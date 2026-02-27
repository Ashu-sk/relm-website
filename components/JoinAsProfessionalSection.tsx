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
    if (!PHONE_REGEX.test(formData.phone.replace(/\s/g, ""))) {
      setFormErrors({ phone: "Enter a valid 10-digit phone number" });
      return;
    }
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/waitlist/professional", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: formData.fullName,
          email: formData.email,
          profession: formData.profession,
          experience: formData.experience,
          phone_country_code: formData.countryCode,
          phone: formData.phone.replace(/\D/g, ""),
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
      <section className="section-block section-padding-standard">
        <div className="mx-auto max-w-xl py-24 text-center">
          <h2 className="text-display font-semibold">You&apos;re in.</h2>
          <p className="mt-4 text-body text-(--fg-secondary)">
            We&apos;ve received your application.
            <br />
            We&apos;ll reach out when Relm opens for professionals.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="join-as-professional"
      className="section-block section-padding-standard"
      aria-labelledby="join-professional-heading"
    >
      <div className="section-container">
        <div className="mx-auto w-full max-w-2xl text-center">
          <h2
            id="join-professional-heading"
            className="text-display font-semibold"
          >
            Professionals Only
          </h2>
          <p className="join-professional-lead mt-6 text-body leading-relaxed text-(--fg-secondary)">
            If trust matters to your work,
            <br />
            Relm is built for you.
          </p>
          <ul className="join-professional-list mt-6 text-body leading-relaxed text-(--fg-secondary)">
            <li>Verified presence</li>
            <li>Real people, real intent</li>
            <li>Direct value for your experience</li>
          </ul>

          <form
            className="join-professional-form mt-10"
            onSubmit={handleSubmit}
            noValidate
          >
            {/* Form container: glassmorphism */}
            <div className="mx-auto max-w-md space-y-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-200 ease-in-out">
              <div className="space-y-1">
                <label
                  htmlFor="pro-name"
                  className="block text-left text-sm font-medium text-(--fg-secondary)"
                >
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
                  className="pro-input w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-(--fg-primary) placeholder:text-(--fg-tertiary)/70 backdrop-blur-sm transition-all duration-200 ease-in-out hover:border-white/15 hover:bg-white/[0.07] focus:border-white/25 focus:outline-none focus:ring-1 focus:ring-white/20 focus:ring-offset-0 focus:ring-offset-transparent"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="pro-email"
                  className="block text-left text-sm font-medium text-(--fg-secondary)"
                >
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
                  className="pro-input w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-(--fg-primary) placeholder:text-(--fg-tertiary)/70 backdrop-blur-sm transition-all duration-200 ease-in-out hover:border-white/15 hover:bg-white/[0.07] focus:border-white/25 focus:outline-none focus:ring-1 focus:ring-white/20 focus:ring-offset-0 focus:ring-offset-transparent"
                  placeholder="you@example.com"
                />
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="pro-phone"
                  className="block text-left text-sm font-medium text-(--fg-secondary)"
                >
                  Phone
                </label>
                <div className="flex gap-2">
                  <select
                    id="pro-country-code"
                    value={formData.countryCode}
                    onChange={(e) =>
                      setFormData({ ...formData, countryCode: e.target.value })
                    }
                    className="pro-input w-28 shrink-0 cursor-pointer rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-(--fg-primary) backdrop-blur-sm transition-all duration-200 ease-in-out hover:border-white/15 hover:bg-white/[0.07] focus:border-white/25 focus:outline-none focus:ring-1 focus:ring-white/20"
                  >
                    {COUNTRY_CODES.map(({ code, label }) => (
                      <option key={code} value={code}>
                        {label}
                      </option>
                    ))}
                  </select>
                  <input
                    id="pro-phone"
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
                    placeholder="1234567890"
                    className="pro-input flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-(--fg-primary) placeholder:text-(--fg-tertiary)/70 backdrop-blur-sm transition-all duration-200 ease-in-out hover:border-white/15 hover:bg-white/[0.07] focus:border-white/25 focus:outline-none focus:ring-1 focus:ring-white/20"
                  />
                </div>
                {formErrors.phone && (
                  <p className="mt-2 text-sm text-red-400">{formErrors.phone}</p>
                )}
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="pro-profession"
                  className="block text-left text-sm font-medium text-(--fg-secondary)"
                >
                  Profession
                </label>
                <select
                  id="pro-profession"
                  value={formData.profession}
                  onChange={(e) =>
                    setFormData({ ...formData, profession: e.target.value })
                  }
                  required
                  className="pro-input w-full cursor-pointer rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-(--fg-primary) backdrop-blur-sm transition-all duration-200 ease-in-out hover:border-white/15 hover:bg-white/[0.07] focus:border-white/25 focus:outline-none focus:ring-1 focus:ring-white/20"
                >
                  <option value="">Select — Counsellor, Expert, or Advisor</option>
                  <option value="counsellor">Counsellor</option>
                  <option value="expert">Expert</option>
                  <option value="advisor">Advisor</option>
                </select>
              </div>

              {/* Interest — pill selector */}
              <div className="space-y-2">
                <span className="block text-left text-sm font-medium text-(--fg-secondary)">
                  Interest <span className="text-(--fg-tertiary)">(optional)</span>
                </span>
                <div className="flex flex-wrap gap-2">
                  {INTEREST_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => {
                        setInterest(interest === opt ? "" : opt);
                        if (interest === opt) setOthersCustom("");
                      }}
                      className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ease-in-out ${
                        interest === opt
                          ? "scale-105 border-white/20 bg-white/10 ring-1 ring-white/20"
                          : "border-white/10 bg-white/5 text-(--fg-secondary) hover:border-white/15 hover:bg-white/[0.07] hover:text-(--fg-primary)"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                {interest === "Others" && (
                  <div className="animate-slide-up-fade overflow-hidden rounded-xl border border-white/10 bg-white/5 pt-3">
                    <input
                      type="text"
                      value={othersCustom}
                      onChange={(e) => setOthersCustom(e.target.value)}
                      placeholder="Describe your interest…"
                      className="pro-input w-full border-0 bg-transparent px-4 pb-3 text-(--fg-primary) placeholder:text-(--fg-tertiary)/70 focus:outline-none"
                    />
                  </div>
                )}
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="pro-experience"
                  className="block text-left text-sm font-medium text-(--fg-secondary)"
                >
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
                  className="pro-input w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-(--fg-primary) placeholder:text-(--fg-tertiary)/70 backdrop-blur-sm transition-all duration-200 ease-in-out hover:border-white/15 hover:bg-white/[0.07] focus:border-white/25 focus:outline-none focus:ring-1 focus:ring-white/20 focus:ring-offset-0"
                />
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="pro-country"
                  className="block text-left text-sm font-medium text-(--fg-secondary)"
                >
                  Country <span className="text-(--fg-tertiary)">(optional)</span>
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
                  className="pro-input w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-(--fg-primary) placeholder:text-(--fg-tertiary)/70 backdrop-blur-sm transition-all duration-200 ease-in-out hover:border-white/15 hover:bg-white/[0.07] focus:border-white/25 focus:outline-none focus:ring-1 focus:ring-white/20"
                />
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="pro-linkedin"
                  className="block text-left text-sm font-medium text-(--fg-secondary)"
                >
                  LinkedIn <span className="text-(--fg-tertiary)">(optional)</span>
                </label>
                <input
                  id="pro-linkedin"
                  type="url"
                  value={formData.linkedin}
                  onChange={(e) =>
                    setFormData({ ...formData, linkedin: e.target.value })
                  }
                  placeholder="https://linkedin.com/in/..."
                  className="pro-input w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-(--fg-primary) placeholder:text-(--fg-tertiary)/70 backdrop-blur-sm transition-all duration-200 ease-in-out hover:border-white/15 hover:bg-white/[0.07] focus:border-white/25 focus:outline-none focus:ring-1 focus:ring-white/20"
                />
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="pro-domain"
                  className="block text-left text-sm font-medium text-(--fg-secondary)"
                >
                  Desired Domain{" "}
                  <span className="text-(--fg-tertiary)">(optional)</span>
                </label>
                <input
                  id="pro-domain"
                  type="text"
                  value={formData.desiredDomain}
                  onChange={(e) =>
                    setFormData({ ...formData, desiredDomain: e.target.value })
                  }
                  className="pro-input w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-(--fg-primary) placeholder:text-(--fg-tertiary)/70 backdrop-blur-sm transition-all duration-200 ease-in-out hover:border-white/15 hover:bg-white/[0.07] focus:border-white/25 focus:outline-none focus:ring-1 focus:ring-white/20"
                  placeholder="your.relm"
                />
              </div>

              {formErrors._ && (
                <p className="text-sm text-red-400">{formErrors._}</p>
              )}
            </div>

            <div className="mt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="hero-cta-primary group w-full max-w-md rounded-full py-3 font-medium transition-all duration-200 ease-in-out disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Submitting…" : "Apply"}
                {!isSubmitting && (
                  <span
                    aria-hidden
                    className="ml-1.5 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-70"
                  >
                    →
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
