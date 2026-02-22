"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Our Stand", href: "#our-stand" },
  { label: "Vision", href: "#vision" },
  { label: "Founder", href: "#founder" },
  { label: "Join", href: "#join-waitlist" },
  { label: "Contact Us", href: "#contact-us" },
] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handler = () => setMenuOpen(false);
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("resize", handler);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("resize", handler);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 grid h-14 grid-cols-3 items-center px-4 sm:px-6 md:px-8"
      aria-label="Site header"
    >
      <div
        className={`absolute inset-0 transition-[background-color,backdrop-filter] duration-500 ease-out ${
          scrolled || menuOpen
            ? "bg-(--bg-base)/80 backdrop-blur-md"
            : "bg-transparent backdrop-blur-none"
        }`}
        aria-hidden
      />

      <Link
        href="#"
        className="relative z-10 flex items-center gap-2 transition-smooth hover:opacity-80"
        aria-label="Relm home"
      >
        <Image
          src="/relm-logo.png"
          alt=""
          width={28}
          height={28}
          className="h-6 w-6 sm:h-7 sm:w-7"
        />
        <span className="text-title text-foreground">Relm</span>
      </Link>

      <nav
        className="relative z-10 hidden justify-center gap-6 lg:flex xl:gap-8"
        aria-label="Primary"
      >
        {navItems.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className="text-caption text-(--fg-secondary) transition-smooth hover:text-foreground"
          >
            {label}
          </Link>
        ))}
      </nav>

      <div className="relative z-10 flex flex-1 items-center justify-end gap-3">
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-lg text-(--fg-secondary) transition-smooth hover:bg-white/5 hover:text-foreground lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`h-0.5 w-5 bg-current transition-transform ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-current transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-current transition-transform ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
        <Link
          href="#join-waitlist"
          className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-3 py-1.5 text-caption font-medium text-background transition-smooth hover:opacity-90 sm:px-4 sm:py-2"
          onClick={closeMenu}
        >
          Join Waitlist
          {" "}
          <span aria-hidden>→</span>
        </Link>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-0 top-14 z-40 flex flex-col overflow-y-auto bg-(--bg-base)/95 backdrop-blur-lg transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-1 flex-col gap-1 px-4 py-6 sm:px-6" aria-label="Mobile navigation">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-body font-medium text-foreground transition-smooth hover:bg-white/5"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
