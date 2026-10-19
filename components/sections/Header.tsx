"use client";

import * as m from "motion/react-m";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { nav, site } from "@/content/site";
import { cx } from "@/lib/cx";
import { useMotionPreference } from "@/lib/motion";
import { Container } from "../ui/Container";

type NavLinkProps = { href: string; current: boolean; onClick?: () => void; className?: string; children: ReactNode };

function NavLink({ href, current, onClick, className, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={current ? "page" : undefined}
      className={cx("decoration-1 underline-offset-4 hover:underline aria-[current=page]:underline", className)}
    >
      {children}
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const { transition } = useMotionPreference();

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      menuButton.current?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const isCurrent = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-paper">
      <Container className="relative flex h-(--header-height) items-center justify-between">
        <Link href="/" className="text-[1rem] font-medium" onClick={closeMenu}>
          {site.name}
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex gap-8 font-mono text-label uppercase">
            {nav.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href} current={isCurrent(item.href)}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          ref={menuButton}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          onClick={() => setMenuOpen((open) => !open)}
          className="font-mono text-label uppercase md:hidden"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        <m.div
          aria-hidden
          className="absolute right-(--margin) bottom-0 left-(--margin) h-px bg-rule"
          initial={false}
          animate={{ opacity: scrolled || menuOpen ? 1 : 0 }}
          transition={transition(0.25)}
        />
      </Container>

      <nav
        id="site-menu"
        aria-label="Primary"
        hidden={!menuOpen}
        className="absolute inset-x-0 top-full h-[calc(100dvh-var(--header-height))] bg-paper md:hidden"
      >
        <Container>
          <ul>
            {nav.map((item) => (
              <li key={item.href} className="border-b border-rule">
                <NavLink href={item.href} current={isCurrent(item.href)} onClick={closeMenu} className="block py-5 text-heading">
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </Container>
      </nav>
    </header>
  );
}
