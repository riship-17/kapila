"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/content/site";
import { cx } from "@/lib/cx";
import { Container } from "../ui/Container";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 8);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

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

  const isCurrent = (href: string) => !href.includes("#") && (pathname === href || pathname.startsWith(`${href}/`));
  const linkClass = "decoration-1 underline-offset-4 hover:underline aria-[current=page]:underline";

  return (
    <header
      className={cx(
        "sticky top-0 z-40 border-b bg-paper/90 backdrop-blur-md transition-colors duration-300",
        scrolled || menuOpen ? "border-rule" : "border-transparent",
      )}
    >
      <Container className="flex h-(--header-height) items-center justify-between">
        <Link href="/" aria-label={`${site.name} home`} className="block">
          <Image src={site.logo.src} alt={site.name} width={site.logo.width} height={site.logo.height} priority className="h-10 w-auto md:h-11" />
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8 text-[0.9375rem]">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={isCurrent(item.href) ? "page" : undefined} className={linkClass}>
                  {item.label}
                </Link>
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
          className="-mr-2 p-2 font-mono text-label uppercase md:hidden"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
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
                <Link
                  href={item.href}
                  aria-current={isCurrent(item.href) ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={cx(linkClass, "block py-5 text-title")}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </nav>
    </header>
  );
}
