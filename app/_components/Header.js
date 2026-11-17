"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "../_libs/site";
import SearchDialog from "./SearchDialog";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [shut, setShut] = useState(false);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrolled(window.scrollY > 24));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);
  const SearchIcon = (
    <svg
      viewBox='0 0 20 20'
      className='h-5 w-5 fill-none stroke-current stroke-2'
      aria-hidden='true'
    >
      <circle cx='9' cy='9' r='6' />
      <path d='m14 14 4 4' strokeLinecap='round' />
    </svg>
  );

  return (
    <>
      <header
        className={`sticky top-0 z-40 border-b border-line bg-paper/92 backdrop-blur transition-shadow ${scrolled ? "shadow-[0_6px_20px_-12px_rgba(0,0,0,.25)]" : ""}`}
      >
        <div
          className={`hidden bg-deep text-xs text-paper/80 transition-[height,opacity] duration-300 lg:block ${scrolled ? "h-0 overflow-hidden opacity-0" : "h-9 opacity-100"}`}
        >
          <div className='mx-auto flex h-9 max-w-6xl items-center justify-between px-6'>
            <span>{site.contact[1]}</span>
            <span className='flex items-center gap-6'>
              <span>Call {site.phone}</span>
              <span>{site.contact[2]}</span>
            </span>
          </div>
        </div>
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-[padding] duration-300 ${scrolled ? "py-3" : "py-4"}`}
        >
          <Link
            href='/'
            onClick={close}
            className='flex items-center gap-3 font-display text-2xl tracking-tight text-ink'
          >
            <svg viewBox='0 0 32 32' className='h-9 w-9' aria-hidden='true'>
              <rect width='32' height='32' rx='9' fill='#1f3d2f' />
              <path
                d='M16 6c5 4 7 8 7 11a7 7 0 0 1-14 0c0-3 2-7 7-11Z'
                fill='#e8d9a8'
              />
              <path
                d='M5 25c3-2 5-2 8 0s5 2 8 0 5-2 6 0'
                fill='none'
                stroke='#dbeaf0'
                strokeWidth='1.8'
                strokeLinecap='round'
              />
            </svg>
            {site.name}
          </Link>
          <nav
            className='hidden items-center gap-6 font-body text-sm text-ink/70 lg:flex'
            aria-label='Main'
          >
            {site.nav.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`relative py-2 transition-colors hover:text-ink after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-accent after:transition-transform hover:after:scale-x-100 ${pathname.startsWith(l.href) ? "text-ink after:scale-x-100" : ""}`}
              >
                {l.label}
              </Link>
            ))}
            <div
              className='group relative'
              data-shut={shut}
              onMouseLeave={() => setShut(false)}
            >
              <button
                type='button'
                className='flex items-center gap-1 rounded-full border border-forest/30 bg-tint px-4 py-2 font-medium text-deep transition-colors hover:border-forest'
              >
                I&apos;d like to…
                <svg
                  viewBox='0 0 12 12'
                  className='h-3 w-3 fill-none stroke-current stroke-2 transition-transform group-hover:rotate-180'
                  aria-hidden='true'
                >
                  <path d='M2 4.5 6 8l4-3.5' />
                </svg>
              </button>
              <div className='mega absolute right-0 top-full w-[40rem] pt-4'>
                <div className='grid grid-cols-3 gap-6 rounded-2xl border border-line bg-white p-6 shadow-[0_30px_60px_-30px_rgba(31,61,47,.55)]'>
                  {site.tasks.map((g) => (
                    <div key={g.group}>
                      <p className='mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-deep'>
                        {g.group}
                      </p>
                      <ul className='space-y-0.5'>
                        {g.items.map((t) => (
                          <li key={t.label}>
                            <Link
                              href={t.href}
                              onClick={() => setShut(true)}
                              className='block rounded-lg px-2 py-1.5 text-sm text-ink transition-colors hover:bg-tint'
                            >
                              {t.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </nav>
          <div className='flex items-center gap-2'>
            <button
              type='button'
              onClick={() => setSearch(true)}
              aria-label='Search the site'
              className='grid h-10 w-10 place-items-center rounded-full text-ink transition-colors hover:bg-tint'
            >
              {SearchIcon}
            </button>
            <Link
              href={site.cta.href}
              className='hidden rounded-full bg-accent px-5 py-2.5 font-body text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-accent-deep xl:inline-block'
            >
              {site.cta.label}
            </Link>
            <button
              type='button'
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className='flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden'
            >
              <span
                className={`h-0.5 w-6 bg-ink transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`h-0.5 w-6 bg-ink transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`h-0.5 w-6 bg-ink transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>
        <div
          className={`absolute inset-x-0 top-full overflow-hidden bg-paper transition-[height] duration-500 lg:hidden ${open ? "h-[100dvh]" : "h-0"}`}
          inert={!open}
        >
          <nav
            className='h-full overflow-y-auto px-6 pb-28 pt-4'
            aria-label='Mobile'
          >
            {[{ href: "/", label: "Home" }, ...site.nav, site.cta].map((l) => (
              <Link
                key={l.href + l.label}
                href={l.href}
                onClick={close}
                className='block border-b border-line py-3.5 font-display text-2xl text-ink'
              >
                {l.label}
              </Link>
            ))}
            <p className='mb-1 mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-accent-deep'>
              I&apos;d like to…
            </p>
            <ul className='columns-1'>
              {site.tasks
                .flatMap((g) => g.items)
                .filter(
                  (t, i, a) => a.findIndex((x) => x.label === t.label) === i,
                )
                .map((t) => (
                  <li key={t.label}>
                    <Link
                      href={t.href}
                      onClick={close}
                      className='block py-2 font-body text-base text-ink'
                    >
                      {t.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
        </div>
      </header>
      <SearchDialog open={search} onClose={() => setSearch(false)} />
    </>
  );
}
