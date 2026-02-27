"use client";

import { useState, useEffect } from "react";
import { fireConfetti } from "@/lib/confetti";
import { COUNTRY_CODES, PHONE_REGEX } from "@/lib/countryCodes";

const waitlistInputClass =
  "waitlist-input-premium w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3.5 text-(--fg-primary) placeholder:text-(--fg-tertiary)/70 transition-all duration-200 ease-out hover:border-white/15 focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/20";

export default function JoinWaitlistSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    desiredDomain: "",
    country: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isSuccess) fireConfetti();
  }, [isSuccess]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormErrors({});
    if (!PHONE_REGEX.test(formData.phone.replace(/\s/g, ""))) {
      setFormErrors({ phone: "Enter a valid 10-digit phone number" });
      return;
    }
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/waitlist/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          desiredDomain: formData.desiredDomain,
          country: formData.country,
          phone_country_code: formData.countryCode,
          phone: formData.phone.replace(/\D/g, ""),
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
      <section className="section-block section-padding-standard">
        <div className="mx-auto max-w-xl py-24 text-center">
          <div className="waitlist-success-animate">
            <h2 className="text-display font-semibold">You&apos;re in.</h2>
            <p className="mt-4 text-body text-(--fg-secondary)">
              Your place is reserved.
              <br />
              We&apos;ll reach out when Relm opens its doors.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="join-waitlist"
      className="section-block section-padding-standard"
      aria-labelledby="join-waitlist-heading"
    >
      <div className="section-container">
        <div className="relative mx-auto w-full max-w-xl text-center">
          <h2
            id="join-waitlist-heading"
            className="text-display font-semibold"
          >
            Be early. Be real.
          </h2>
          <div className="join-waitlist-tired-of">
            <p className="text-body text-(--fg-secondary)">
              Tired of:
            </p>
            <ul className="join-waitlist-list text-body leading-relaxed text-(--fg-secondary)">
              <li>bots winning</li>
              <li>fake reach</li>
              <li>real people getting buried</li>
            </ul>
          </div>
          <p className="text-headline font-semibold text-foreground">
            Relm isn&apos;t for everyone.
            <br />
            And that&apos;s intentional.
          </p>

          {/* Background glow — low opacity animated pulse */}
          <div
            className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
            aria-hidden
          >
            <div
              className="waitlist-glow-bg h-96 w-96 rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
              }}
            />
          </div>

          <form
            className="join-waitlist-form mt-10"
            onSubmit={handleSubmit}
            noValidate
          >
            {/* Glassmorphism card */}
            <div className="relative mx-auto max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all duration-200">
              <div className="space-y-5">
                <div className="space-y-1.5">
                  <label
                    htmlFor="join-name"
                    className="block text-left text-sm font-medium text-(--fg-secondary)"
                  >
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
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="join-email"
                    className="block text-left text-sm font-medium text-(--fg-secondary)"
                  >
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
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="join-country"
                    className="block text-left text-sm font-medium text-(--fg-secondary)"
                  >
                    Country
                  </label>
                  <input
                    id="join-country"
                    type="text"
                    value={formData.country}
                    onChange={(e) =>
                      setFormData({ ...formData, country: e.target.value })
                    }
                    autoComplete="country-name"
                    className={waitlistInputClass}
                    placeholder="e.g. India, USA"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="join-phone"
                    className="block text-left text-sm font-medium text-(--fg-secondary)"
                  >
                    Phone
                  </label>
                  <div className="flex gap-2">
                    <select
                      id="join-country-code"
                      value={formData.countryCode}
                      onChange={(e) =>
                        setFormData({ ...formData, countryCode: e.target.value })
                      }
                      className="join-waitlist-phone-select h-[3.125rem] w-24 shrink-0 cursor-pointer appearance-none rounded-2xl border border-white/10 bg-black/40 px-3 py-3 pr-9 text-(--fg-primary) transition-all duration-200 ease-out hover:border-white/15 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20"
                    >
                      {COUNTRY_CODES.map(({ code, label }) => (
                        <option key={code} value={code}>
                          {label}
                        </option>
                      ))}
                    </select>
                    <input
                      id="join-phone"
                      type="tel"
                      inputMode="numeric"
                      value={formData.phone}
                      onChange={(e) => {
                        const v = e.target.value.replace(/\D/g, "").slice(0, 10);
                        setFormData({ ...formData, phone: v });
                      }}
                      autoComplete="tel-national"
                      required
                      maxLength={10}
                      className={`${waitlistInputClass} min-w-0 flex-1`}
                      placeholder="1234567890"
                    />
                  </div>
                  {formErrors.phone && (
                    <p className="mt-2 text-sm text-red-400">
                      {formErrors.phone}
                    </p>
                  )}
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="join-domain"
                    className="block text-left text-sm font-medium text-(--fg-secondary)"
                  >
                    Desired Domain
                  </label>
                  <p className="join-waitlist-helper">
                    Optional — claim when ready
                  </p>
                  <input
                    id="join-domain"
                    type="text"
                    value={formData.desiredDomain}
                    onChange={(e) =>
                      setFormData({ ...formData, desiredDomain: e.target.value })
                    }
                    className={waitlistInputClass}
                    placeholder="your.relm"
                  />
                  {formErrors.desiredDomain && (
                    <p className="mt-2 text-sm text-red-400">
                      {formErrors.desiredDomain}
                    </p>
                  )}
                </div>
                {formErrors._ && (
                  <p className="mt-2 text-sm text-red-400">{formErrors._}</p>
                )}
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full rounded-full bg-white/10 py-3.5 font-medium text-(--fg-primary) shadow-sm transition-all duration-200 ease-out hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(255,255,255,0.12)] active:scale-95 disabled:scale-100 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:shadow-none"
                >
                  {isSubmitting ? "Submitting…" : "Enter Relm"}
                  {!isSubmitting && (
                    <span
                      aria-hidden
                      className="ml-1.5 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-70"
                    >
                      →
                    </span>
                  )}
                </button>
                <p className="join-waitlist-reassurance">
                  We&apos;re opening slowly. On purpose.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
