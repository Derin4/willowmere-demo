"use client";

import { useState } from "react";
import { NEWS_CATS, news } from "../_libs/data";
import Photo from "./Photo";

const PHOTO = {
  "spring-cleanup": "news-1",
  "budget-hearing": "news-2",
  "bridge-work": "news-3",
};
const ALT = {
  "spring-cleanup": "Volunteers at the riverfront clean-up",
  "budget-hearing": "A council chamber during a public hearing",
  "bridge-work": "Harrow Street bridge",
};
const CHIP = {
  Notice: "bg-wheat text-ink",
  Council: "bg-deep text-paper",
  "Public works": "bg-accent text-white",
  Events: "bg-forest text-white",
};

export default function NewsList() {
  const [cat, setCat] = useState("All");
  const shown = cat === "All" ? news : news.filter((n) => n.cat === cat);
  return (
    <div>
      <div className='no-scrollbar -mx-6 mb-8 flex gap-2 overflow-x-auto px-6'>
        {NEWS_CATS.map((c) => (
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
      <div key={cat} className='grid gap-5 sm:grid-cols-2'>
        {shown.map((n, i) => (
          <article
            key={n.slug}
            style={{ "--d": `${i * 60}ms` }}
            className={`step-in zoom lift flex flex-col overflow-hidden rounded-3xl border border-line bg-white ${PHOTO[n.slug] ? "" : "sm:col-span-1"}`}
          >
            {PHOTO[n.slug] ? (
              <Photo
                id={PHOTO[n.slug]}
                label={ALT[n.slug]}
                swatch={["#dbeaf0", "#2f5d46"]}
                sizes='(min-width:640px) 40vw, 100vw'
                className='aspect-[4/3] w-full'
              />
            ) : null}
            <div className='flex flex-1 flex-col p-6'>
              <p className='mb-3 flex items-center gap-2 font-body text-xs text-muted'>
                <span
                  className={`rounded-full px-2.5 py-0.5 font-semibold uppercase tracking-wider ${CHIP[n.cat] || "bg-tint"}`}
                >
                  {n.cat}
                </span>
                {n.date}
              </p>
              <h2 className='mb-2 text-2xl leading-snug'>{n.title}</h2>
              <p className='font-body text-muted'>{n.text}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
