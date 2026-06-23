"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "PageStock", href: "/pagestock" },
  { label: "Original Tag", href: "/original-tag" },
  { label: "QAC", href: "/qac" },
  { label: "Our Stand", href: "/#our-stand" },
  { label: "Vision", href: "/vision" },
  { label: "Founder", href: "/founder" },
  { label: "Join", href: "/join" },
  { label: "Contact Us", href: "/contact-us" },
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
      className="fixed left-0 right-0 top-0 z-50 flex h-[52px] items-center justify-between px-4 sm:h-14 sm:px-[clamp(1.5rem,5vw,8rem)]"
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

      <div className="relative z-10 flex items-center gap-2">
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className="text-[20px] leading-none text-(--fg-secondary) transition-smooth hover:text-foreground lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span aria-hidden>{menuOpen ? "✕" : "☰"}</span>
        </button>

        <Link
          href="/"
          className="flex items-center gap-2 transition-smooth hover:opacity-80"
          aria-label="Rarelm home"
          onClick={closeMenu}
        >
          <Image
            src="/relm-logo.png"
            alt="Rarelm"
            width={24}
            height={24}
            className="h-6 w-6"
          />
          <span className="text-[16px] font-medium leading-none text-foreground">
            Rarelm
          </span>
        </Link>
      </div>

      <nav
        className="relative z-10 hidden justify-center gap-6 lg:flex xl:gap-8"
        aria-label="Primary"
      >
        {navItems.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className="nav-link text-caption text-(--fg-secondary) hover:text-foreground"
          >
            {label}
          </Link>
        ))}
      </nav>

      <div className="relative z-10 flex items-center justify-end">
        <Link
          href="/join"
          className="flex items-center gap-1.5 whitespace-nowrap rounded-[8px] border-[1.5px] border-[#FF6B35] px-[14px] py-[7px] text-[13px] leading-none text-foreground transition-smooth hover:bg-white/5"
          onClick={closeMenu}
        >
          <span>Join Waitlist</span>
          <span aria-hidden>→</span>
        </Link>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-0 top-16 z-40 flex flex-col overflow-y-auto bg-(--bg-base)/95 backdrop-blur-lg transition-opacity duration-300 sm:top-14 lg:hidden ${
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
              className="nav-link rounded-md px-4 py-4 text-[1.1rem] font-normal text-foreground hover:bg-white/5"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
