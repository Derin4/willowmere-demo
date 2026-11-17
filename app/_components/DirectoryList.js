"use client";

import { useState } from "react";
import { DIR_CATS, directory } from "../_libs/data";

export default function DirectoryList() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");
  const term = q.trim().toLowerCase();
  const shown = directory.filter(
    (d) =>
      (cat === "All" || d.cat === cat) &&
      (!term || `${d.name} ${d.text} ${d.cat}`.toLowerCase().includes(term)),
  );

  return (
    <div>
      <label htmlFor='dir-q' className='sr-only'>
        Search the directory
      </label>
      <input
        id='dir-q'
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder='Search businesses and services'
        className='mb-4 w-full max-w-md rounded-full border border-line bg-white px-5 py-3 font-body text-sm outline-none focus:border-accent focus:ring-4 focus:ring-accent/10'
      />
      <div className='no-scrollbar -mx-6 mb-6 flex gap-2 overflow-x-auto px-6'>
        {DIR_CATS.map((c) => (
          <button
            key={c}
            type='button'
            onClick={() => setCat(c)}
            aria-pressed={cat === c}
            className={`shrink-0 rounded-full border px-4 py-2 font-body text-sm transition-all ${cat === c ? "pop border-deep bg-deep text-paper" : "border-line bg-white hover:border-deep"}`}
          >
            {c}
          </button>
        ))}
      </div>
      <p className='mb-4 font-body text-sm text-muted' aria-live='polite'>
        {shown.length} listings
      </p>
      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {shown.map((d, i) => (
          <div
            key={d.name}
            style={{ "--d": `${Math.min(i, 8) * 40}ms` }}
            className='step-in lift flex gap-4 rounded-2xl border border-line bg-white p-5'
          >
            <span
              className='grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-tint font-display text-xl text-forest'
              aria-hidden='true'
            >
              {d.name[0]}
            </span>
            <div className='min-w-0'>
              <p className='mb-1 font-body text-xs font-semibold uppercase tracking-widest text-accent-deep'>
                {d.cat}
              </p>
              <h2 className='mb-1 text-xl leading-snug'>{d.name}</h2>
              <p className='mb-3 font-body text-sm text-muted'>{d.text}</p>
              <p className='font-body text-xs'>
                {d.addr}
                <br />
                {d.phone}
              </p>
            </div>
          </div>
        ))}
      </div>
      {shown.length === 0 ? (
        <p className='py-10 font-body text-muted'>
          No listings match. Try another word or category.
        </p>
      ) : null}
    </div>
  );
}
