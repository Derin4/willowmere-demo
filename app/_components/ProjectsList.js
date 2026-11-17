"use client";

import { useState } from "react";
import { PROJECT_STATUS, projects } from "../_libs/data";
import ProgressBar from "./ProgressBar";

const CHIP = {
  Current: "bg-forest text-white",
  Upcoming: "bg-wheat text-ink",
  Proposed: "bg-accent text-white",
};

export default function ProjectsList() {
  const [status, setStatus] = useState("All");
  const [supported, setSupported] = useState({});
  const shown =
    status === "All" ? projects : projects.filter((p) => p.status === status);

  return (
    <div>
      <div className='no-scrollbar -mx-6 mb-8 flex gap-2 overflow-x-auto px-6'>
        {PROJECT_STATUS.map((s) => (
          <button
            key={s}
            type='button'
            onClick={() => setStatus(s)}
            aria-pressed={status === s}
            className={`shrink-0 rounded-full border px-4 py-2 font-body text-sm transition-all ${status === s ? "pop border-deep bg-deep text-paper" : "border-line bg-white hover:border-deep"}`}
          >
            {s}
          </button>
        ))}
      </div>
      <div key={status} className='grid gap-6 sm:grid-cols-2'>
        {shown.map((p, i) => (
          <article
            key={p.slug}
            style={{ "--d": `${i * 60}ms` }}
            className='step-in lift flex flex-col rounded-3xl border border-line bg-white p-6'
          >
            <p className='mb-3 flex items-center gap-2 font-body text-xs text-muted'>
              <span
                className={`rounded-full px-2.5 py-0.5 font-semibold uppercase tracking-wider ${CHIP[p.status]}`}
              >
                {p.status}
              </span>
              {p.dept}
            </p>
            <h2 className='mb-2 text-2xl'>{p.title}</h2>
            <p className='mb-5 font-body text-sm text-muted'>{p.text}</p>
            {p.status === "Current" ? (
              <div className='mt-auto'>
                <ProgressBar pct={p.progress} />
                <p className='mt-2 font-body text-xs text-muted'>
                  {p.progress}% complete · {p.budget} · {p.due}
                </p>
              </div>
            ) : (
              <div className='mt-auto flex items-center justify-between gap-3'>
                <p className='font-body text-xs text-muted'>
                  {p.budget} · {p.due}
                </p>
                {p.status === "Proposed" ? (
                  <button
                    type='button'
                    onClick={() =>
                      setSupported((s) => ({ ...s, [p.slug]: !s[p.slug] }))
                    }
                    aria-pressed={!!supported[p.slug]}
                    className={`shrink-0 rounded-full border px-4 py-2 font-body text-xs font-semibold transition-all ${supported[p.slug] ? "pop border-forest bg-forest text-white" : "border-accent text-accent hover:bg-accent hover:text-white"}`}
                  >
                    {supported[p.slug] ? "✓ Supported" : "Support this"} ·{" "}
                    {p.support + (supported[p.slug] ? 1 : 0)}
                  </button>
                ) : null}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
