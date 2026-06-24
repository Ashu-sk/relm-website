"use client";

import { useState, useEffect } from "react";
import { fireConfetti } from "@/lib/confetti";
import { COUNTRY_CODES, PHONE_REGEX } from "@/lib/countryCodes";

const waitlistInputClass = "cc-form-input form-input";
const waitlistSelectClass = "cc-form-select-inline form-input form-select";

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
    if (!PHONE_REGEX.test(formData.phone.replaceAll(/\s/g, ""))) {
      setFormErrors({ phone: "Enter a valid 10-digit phone number" });
      return;
    }
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
          desiredDomain: formData.desiredDomain,
          country: formData.country,
          phone_country_code: formData.countryCode,
          phone: formData.phone.replaceAll(/\D/g, ""),
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

        <form className="join-waitlist-form" onSubmit={handleSubmit} noValidate>
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
            <div className="cc-form-field">
              <label htmlFor="join-country" className="cc-form-label">
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
              <p className="cc-form-hint">Where you&apos;re joining from.</p>
            </div>
            <div className="cc-form-field">
              <label htmlFor="join-phone" className="cc-form-label">
                Phone
              </label>
              <div className="cc-form-phone-row">
                <select
                  id="join-country-code"
                  value={formData.countryCode}
                  onChange={(e) =>
                    setFormData({ ...formData, countryCode: e.target.value })
                  }
                  className={waitlistSelectClass}
                >
                  {COUNTRY_CODES.map(({ code, label }) => (
                    <option key={code} value={code}>
                      {code}
                    </option>
                  ))}
                </select>
                <input
                  id="join-phone"
                  type="tel"
                  inputMode="numeric"
                  value={formData.phone}
                  onChange={(e) => {
                    const v = e.target.value.replaceAll(/\D/g, "").slice(0, 10);
                    setFormData({ ...formData, phone: v });
                  }}
                  autoComplete="tel-national"
                  required
                  maxLength={10}
                  className={waitlistInputClass}
                  placeholder="Phone number"
                />
              </div>
              <p className="cc-form-hint">10-digit mobile number.</p>
              {formErrors.phone && (
                <p className="cc-form-error">{formErrors.phone}</p>
              )}
            </div>
            <div className="cc-form-field">
              <label htmlFor="join-domain" className="cc-form-label">
                Desired Domain
              </label>
              <input
                id="join-domain"
                type="text"
                value={formData.desiredDomain}
                onChange={(e) =>
                  setFormData({ ...formData, desiredDomain: e.target.value })
                }
                className={waitlistInputClass}
                placeholder="your.rarelm"
              />
              <p className="cc-form-hint">Optional — claim when ready.</p>
              {formErrors.desiredDomain && (
                <p className="cc-form-error">{formErrors.desiredDomain}</p>
              )}
            </div>
            {formErrors._ && <p className="cc-form-error">{formErrors._}</p>}

            <div className="cc-form-submit">
              <button
                type="submit"
                disabled={isSubmitting}
                className="cc-btn-primary group disabled:cursor-not-allowed disabled:opacity-50"
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
    </section>
  );
}
