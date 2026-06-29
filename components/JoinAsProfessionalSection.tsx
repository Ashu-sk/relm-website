"use client";

import { useState, useEffect } from "react";
import { fireConfetti } from "@/lib/confetti";
import { COUNTRY_CODES, PHONE_REGEX } from "@/lib/countryCodes";

const INTEREST_OPTIONS = [
  "Startups",
  "Career",
  "Relationship",
  "Fitness",
  "Shopping",
  "Others",
] as const;

const proInputClass = "cc-form-input form-input";
const proSelectClass = "cc-form-select-inline form-input form-select";

export default function JoinAsProfessionalSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    profession: "",
    experience: "",
    country: "",
    linkedin: "",
    desiredDomain: "",
    interests: "",
  });
  const [interest, setInterest] = useState("");
  const [othersCustom, setOthersCustom] = useState("");
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isSuccess) fireConfetti();
  }, [isSuccess]);

  const effectiveInterest =
    interest === "Others" && othersCustom.trim()
      ? othersCustom.trim()
      : interest;

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
          ? "/api/waitlist/professional"
          : `${globalThis.window.location.origin}/api/waitlist/professional`;
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: formData.fullName,
          email: formData.email,
          profession: formData.profession,
          experience: formData.experience,
          phone_country_code: formData.countryCode,
          phone: formData.phone.replaceAll(/\D/g, ""),
          country: formData.country || undefined,
          linkedin: formData.linkedin || undefined,
          desired_domain: formData.desiredDomain || undefined,
          interests: effectiveInterest || undefined,
        }),
      });

      let data: {
        fieldErrors?: Record<string, string>;
        error?: string;
      } = {};
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
        if (data.fieldErrors) setFormErrors(data.fieldErrors);
        else if (data.error) setFormErrors({ _: data.error });
        else setFormErrors({ _: "Something went wrong. Please try again." });
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
      <section className="cc-section cc-pro-form">
        <div className="cc-section-inner mx-auto max-w-xl py-16 text-center">
          <h2 className="cc-section-h2 cc-section-h2-center">You&apos;re in.</h2>
          <p className="cc-expression-sub">
            We&apos;ve received your application.
            <br />
            We&apos;ll reach out when Rarelm opens for professionals.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="join-as-professional"
      className="cc-section cc-section-calm cc-pro-form"
      aria-labelledby="join-professional-heading"
    >
      <div className="cc-section-inner">
        <p className="cc-section-eyebrow cc-section-eyebrow-center">
          <span className="cc-hero-dot" aria-hidden />
          Professionals
        </p>
        <h2 id="join-professional-heading" className="cc-section-h2 cc-section-h2-center">
          Professionals Only
        </h2>
        <p className="cc-expression-sub">
          If trust matters to your work,
          <br />
          Rarelm is built for you.
        </p>
        <ul className="join-professional-list cc-expression-sub">
          <li>Verified presence</li>
          <li>Real people, real intent</li>
          <li>Direct value for your experience</li>
        </ul>

        <form className="join-professional-form" onSubmit={handleSubmit} noValidate>
          <div className="cc-form-card">
            <div className="cc-form-field">
              <label htmlFor="pro-name" className="cc-form-label">
                Name
              </label>
              <input
                id="pro-name"
                type="text"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                autoComplete="name"
                required
                className={proInputClass}
                placeholder="Your name"
              />
              <p className="cc-form-hint">As it appears on your credentials.</p>
            </div>
            <div className="cc-form-field">
              <label htmlFor="pro-email" className="cc-form-label">
                Email
              </label>
              <input
                id="pro-email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                autoComplete="email"
                required
                className={proInputClass}
                placeholder="you@example.com"
              />
              <p className="cc-form-hint">Professional contact only.</p>
            </div>
            <div className="cc-form-field">
              <label htmlFor="pro-phone" className="cc-form-label">
                Phone
              </label>
              <div className="cc-form-phone-row">
                <select
                  id="pro-country-code"
                  value={formData.countryCode}
                  onChange={(e) =>
                    setFormData({ ...formData, countryCode: e.target.value })
                  }
                  className={proSelectClass}
                  aria-label="Country calling code"
                >
                  {COUNTRY_CODES.map(({ code, label }) => (
                    <option key={code} value={code}>
                      {code}
                    </option>
                  ))}
                </select>
                <input
                  id="pro-phone"
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
                  placeholder="Phone number"
                  className={proInputClass}
                />
              </div>
              <p className="cc-form-hint">10-digit mobile number.</p>
              {formErrors.phone && (
                <p className="cc-form-error">{formErrors.phone}</p>
              )}
            </div>
            <div className="cc-form-field">
              <label htmlFor="pro-profession" className="cc-form-label">
                Profession
              </label>
              <select
                id="pro-profession"
                value={formData.profession}
                onChange={(e) =>
                  setFormData({ ...formData, profession: e.target.value })
                }
                required
                className={`${proInputClass} form-select`}
              >
                <option value="">Select — Counsellor, Expert, or Advisor</option>
                <option value="counsellor">Counsellor</option>
                <option value="expert">Expert</option>
                <option value="advisor">Advisor</option>
              </select>
              <p className="cc-form-hint">How you&apos;ll show up on Rarelm.</p>
            </div>

            <div className="cc-form-field">
              <span id="pro-interest-label" className="cc-form-label">
                Interest <span className="normal-case tracking-normal">(optional)</span>
              </span>
              <div
                className="cc-pro-pills"
                role="group"
                aria-labelledby="pro-interest-label"
              >
                {INTEREST_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => {
                      setInterest(interest === opt ? "" : opt);
                      if (interest === opt) setOthersCustom("");
                    }}
                    className={`cc-pro-pill ${interest === opt ? "cc-pro-pill-active" : ""}`}
                    aria-pressed={interest === opt}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              {interest === "Others" && (
                <div className="cc-pro-others-wrap">
                  <input
                    type="text"
                    value={othersCustom}
                    onChange={(e) => setOthersCustom(e.target.value)}
                    placeholder="Describe your interest…"
                    className={proInputClass}
                    aria-label="Describe your interest"
                  />
                </div>
              )}
            </div>

            <div className="cc-form-field">
              <label htmlFor="pro-experience" className="cc-form-label">
                Experience
              </label>
              <input
                id="pro-experience"
                type="text"
                value={formData.experience}
                onChange={(e) =>
                  setFormData({ ...formData, experience: e.target.value })
                }
                required
                placeholder="e.g. 5 years"
                className={proInputClass}
              />
              <p className="cc-form-hint">Years in practice or field.</p>
            </div>
            <div className="cc-form-field">
              <label htmlFor="pro-country" className="cc-form-label">
                Country <span className="normal-case tracking-normal">(optional)</span>
              </label>
              <input
                id="pro-country"
                type="text"
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
                autoComplete="country-name"
                placeholder="e.g. India, USA"
                className={proInputClass}
              />
            </div>
            <div className="cc-form-field">
              <label htmlFor="pro-linkedin" className="cc-form-label">
                LinkedIn <span className="normal-case tracking-normal">(optional)</span>
              </label>
              <input
                id="pro-linkedin"
                type="url"
                value={formData.linkedin}
                onChange={(e) =>
                  setFormData({ ...formData, linkedin: e.target.value })
                }
                placeholder="https://linkedin.com/in/..."
                className={proInputClass}
              />
            </div>
            <div className="cc-form-field">
              <label htmlFor="pro-domain" className="cc-form-label">
                Desired Domain{" "}
                <span className="normal-case tracking-normal">(optional)</span>
              </label>
              <input
                id="pro-domain"
                type="text"
                value={formData.desiredDomain}
                onChange={(e) =>
                  setFormData({ ...formData, desiredDomain: e.target.value })
                }
                className={proInputClass}
                placeholder="your.rarelm"
              />
              <p className="cc-form-hint">Optional — claim when ready.</p>
            </div>

            {formErrors._ && <p className="cc-form-error">{formErrors._}</p>}

            <div className="cc-form-submit">
              <button
                type="submit"
                disabled={isSubmitting}
                className="cc-btn-primary group w-full max-w-none disabled:cursor-not-allowed disabled:opacity-60"
                aria-label="Apply as a Rarelm professional"
              >
                {isSubmitting ? "Submitting…" : "Apply"}
                {!isSubmitting && (
                  <span
                    aria-hidden
                    className="opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-70"
                  >
                    →
                  </span>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
