"use client";

import { useState, useEffect } from "react";
import { fireConfetti } from "@/lib/confetti";
import { supabase } from "@/lib/supabaseClient";
import type { User } from "@supabase/supabase-js";

const waitlistInputClass = "cc-form-input form-input";

function nameFromUser(user: User): string {
  const meta = user.user_metadata ?? {};
  if (typeof meta.full_name === "string" && meta.full_name.trim()) {
    return meta.full_name.trim();
  }
  if (typeof meta.name === "string" && meta.name.trim()) {
    return meta.name.trim();
  }
  return "";
}

export default function JoinWaitlistSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isSuccess) fireConfetti();
  }, [isSuccess]);

  useEffect(() => {
    let cancelled = false;

    const applyUser = (user: User | null) => {
      if (!user || cancelled) return;
      const email = user.email?.trim() ?? "";
      const fullName = nameFromUser(user);
      setFormData((prev) => ({
        fullName: fullName || prev.fullName,
        email: email || prev.email,
      }));
    };

    const init = async () => {
      const params = new URLSearchParams(window.location.search);
      if (params.get("error_description")) {
        setFormErrors({ _: params.get("error_description") ?? "Google sign-in failed." });
      }

      const { data } = await supabase.auth.getSession();
      if (cancelled) return;
      applyUser(data.session?.user ?? null);

      const returnedFromOAuth =
        params.has("code") ||
        params.has("waitlist_oauth") ||
        params.has("error") ||
        params.has("error_description");
      if (returnedFromOAuth) {
        document.getElementById("join-waitlist")?.scrollIntoView({ behavior: "smooth" });
        const url = new URL(window.location.href);
        url.searchParams.delete("code");
        url.searchParams.delete("waitlist_oauth");
        url.searchParams.delete("error");
        url.searchParams.delete("error_description");
        url.searchParams.delete("error_code");
        window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
      }
    };

    void init();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      applyUser(session?.user ?? null);
    });

    return () => {
      cancelled = true;
      subscription.unsubscribe();
    };
  }, []);

  const handleGoogleSignIn = async () => {
    setFormErrors({});
    setIsGoogleLoading(true);
    try {
      const redirectTo = `${window.location.origin}${window.location.pathname}?waitlist_oauth=1`;
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo,
          queryParams: { prompt: "select_account" },
          skipBrowserRedirect: true,
        },
      });
      if (error) {
        setFormErrors({ _: error.message || "Google sign-in failed. Please try again." });
        setIsGoogleLoading(false);
        return;
      }
      if (data.url) {
        window.location.assign(data.url);
        return;
      }
      setFormErrors({ _: "Google sign-in failed. Please try again." });
      setIsGoogleLoading(false);
    } catch (err) {
      console.error(err);
      setFormErrors({ _: "Google sign-in failed. Please try again." });
      setIsGoogleLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormErrors({});
    setIsSubmitting(true);

    try {
      const apiUrl =
        typeof globalThis.window === "undefined"
          ? "/api/waitlist/user"
          : `${globalThis.window.location.origin}/api/waitlist/user`;
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
        }),
      });

      let data: { fieldErrors?: Record<string, string>; error?: string } = {};
      const contentType = res.headers.get("content-type");
      if (contentType?.includes("application/json")) {
        try {
          data = await res.json();
        } catch {
          data = { error: "Invalid response" };
        }
      } else {
        data = { error: "Something went wrong. Please try again." };
      }

      if (!res.ok) {
        if (data.fieldErrors) {
          setFormErrors(data.fieldErrors);
        } else if (data.error) {
          setFormErrors({ _: data.error });
        } else {
          setFormErrors({ _: "Something went wrong. Please try again." });
        }
        setIsSubmitting(false);
        return;
      }

      setIsSuccess(true);
    } catch (err) {
      console.error(err);
      setFormErrors({ _: "Something went wrong. Please try again." });
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section className="cc-section cc-waitlist">
        <div className="cc-waitlist-inner mx-auto max-w-xl py-16 text-center">
          <div className="waitlist-success-animate">
            <h2 className="cc-section-h2 cc-section-h2-center">You&apos;re in.</h2>
            <p className="cc-expression-sub">
              Your place is reserved.
              <br />
              We&apos;ll reach out when Rarelm opens its doors.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="join-waitlist"
      className="cc-section cc-waitlist"
      aria-labelledby="join-waitlist-heading"
    >
      <div className="cc-waitlist-glow-orange" aria-hidden />
      <div className="cc-waitlist-glow-blue" aria-hidden />
      <div className="cc-waitlist-inner">
        <p className="cc-section-eyebrow cc-section-eyebrow-center">
          <span className="cc-hero-dot" aria-hidden />
          Early access
        </p>
        <h2 id="join-waitlist-heading" className="cc-section-h2 cc-section-h2-center">
          Be early. Be real.
        </h2>
        <div className="join-waitlist-tired-of">
          <p className="cc-expression-sub">Tired of:</p>
          <ul className="join-waitlist-list cc-expression-sub">
            <li>bots winning</li>
            <li>fake reach</li>
            <li>real people getting buried</li>
          </ul>
        </div>
        <p className="cc-vision-row-title">
          Rarelm isn&apos;t for everyone.
          <br />
          And that&apos;s intentional.
        </p>

        <div className="join-waitlist-form">
          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={isGoogleLoading || isSubmitting}
            className="cc-btn-ghost w-full max-w-none disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Continue with Google"
          >
            <svg aria-hidden width="18" height="18" viewBox="0 0 18 18">
              <path
                fill="#4285F4"
                d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"
              />
              <path
                fill="#34A853"
                d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"
              />
              <path
                fill="#FBBC05"
                d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707s.102-1.167.282-1.707V4.961H.957C.347 6.175 0 7.55 0 9s.348 2.825.957 4.039l3.007-2.332z"
              />
              <path
                fill="#EA4335"
                d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.961L3.964 7.293C4.672 5.163 6.656 3.58 9 3.58z"
              />
            </svg>
            {isGoogleLoading ? "Connecting…" : "Continue with Google"}
          </button>

          <form onSubmit={handleSubmit} noValidate>
            <div className="cc-form-card">
              <div className="cc-form-field">
                <label htmlFor="join-name" className="cc-form-label">
                  Name
                </label>
                <input
                  id="join-name"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  autoComplete="name"
                  required
                  className={waitlistInputClass}
                  placeholder="Your name"
                />
                <p className="cc-form-hint">One human. One account.</p>
              </div>
              <div className="cc-form-field">
                <label htmlFor="join-email" className="cc-form-label">
                  Email
                </label>
                <input
                  id="join-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  autoComplete="email"
                  required
                  className={waitlistInputClass}
                  placeholder="you@example.com"
                />
                <p className="cc-form-hint">Early access updates only.</p>
              </div>
              {formErrors.email && (
                <p className="cc-form-error">{formErrors.email}</p>
              )}
              {formErrors._ && <p className="cc-form-error">{formErrors._}</p>}

              <div className="cc-form-submit">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cc-btn-primary group disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label="Join Rarelm waitlist"
                >
                  {isSubmitting ? "Submitting…" : "Enter Rarelm"}
                  {!isSubmitting && (
                    <span
                      aria-hidden
                      className="opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-70"
                    >
                      →
                    </span>
                  )}
                </button>
                <p className="cc-form-subline">The bots are furious.</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
