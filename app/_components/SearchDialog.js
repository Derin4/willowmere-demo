"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { directory, news, places, projects } from "../_libs/data";

const INDEX = [
  ...news.map((n) => ({
    kind: "News",
    title: n.title,
    text: n.text,
    href: "/news",
  })),
  ...projects.map((p) => ({
    kind: "Project",
    title: p.title,
    text: p.text,
    href: "/projects",
  })),
  ...directory.map((d) => ({
    kind: "Directory",
    title: d.name,
    text: d.text,
    href: "/directory",
  })),
  ...places.map((p) => ({
    kind: "Map",
    title: p.name,
    text: p.text,
    href: "/map",
  })),
];

export default function SearchDialog({ open, onClose }) {
  const [q, setQ] = useState("");
  const input = useRef(null);

  useEffect(() => {
    if (!open) return;
    const raf = requestAnimationFrame(
      () => input.current && input.current.focus(),
    );
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const term = q.trim().toLowerCase();
  const hits =
    term.length < 2
      ? []
      : INDEX.filter((i) =>
          `${i.title} ${i.text}`.toLowerCase().includes(term),
        ).slice(0, 8);

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
      inert={!open}
      role='dialog'
      aria-modal='true'
      aria-label='Search the site'
    >
      <button
        type='button'
        aria-label='Close search'
        onClick={onClose}
        className='absolute inset-0 cursor-default bg-night/70 backdrop-blur-sm'
      />
      <div
        className={`relative mx-auto mt-[12vh] w-[min(92vw,40rem)] rounded-3xl bg-paper p-5 shadow-2xl transition-transform duration-300 ${open ? "" : "translate-y-4"}`}
      >
        <label htmlFor='site-q' className='sr-only'>
          Search news, projects, businesses and places
        </label>
        <input
          id='site-q'
          ref={input}
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder='Search news, projects, businesses, places'
          className='w-full rounded-2xl border border-line bg-white px-5 py-4 font-body outline-none focus:border-accent focus:ring-4 focus:ring-accent/10'
        />
        <div className='mt-3 max-h-[50vh] overflow-y-auto' aria-live='polite'>
          {term.length < 2 ? (
            <p className='px-2 py-4 font-body text-sm text-muted'>
              Try &ldquo;bridge&rdquo;, &ldquo;library&rdquo; or
              &ldquo;bakery&rdquo;.
            </p>
          ) : hits.length === 0 ? (
            <p className='px-2 py-4 font-body text-sm text-muted'>
              Nothing found. Try another word.
            </p>
          ) : (
            <ul>
              {hits.map((h) => (
                <li key={h.kind + h.title}>
                  <Link
                    href={h.href}
                    onClick={() => {
                      setQ("");
                      onClose();
                    }}
                    className='flex items-start gap-3 rounded-xl px-2 py-3 transition-colors hover:bg-tint'
                  >
                    <span className='mt-0.5 shrink-0 rounded-full bg-deep px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-paper'>
                      {h.kind}
                    </span>
                    <span>
                      <span className='block font-body font-medium'>
                        {h.title}
                      </span>
                      <span className='block font-body text-sm text-muted'>
                        {h.text}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        <button
          type='button'
          onClick={onClose}
          className='mt-2 px-2 font-body text-sm text-muted underline underline-offset-4'
        >
          Close (Esc)
        </button>
      </div>
    </div>
  );
}
