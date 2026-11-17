"use client";

import { useState } from "react";
import { events } from "../_libs/data";

export default function Events() {
  const [on, setOn] = useState({});
  return (
    <ul className='space-y-3'>
      {events.map((e, i) => (
        <li
          key={e.title}
          style={{ "--d": `${i * 70}ms` }}
          className='step-in flex items-center gap-4 rounded-2xl border border-line bg-white p-3'
        >
          <span className='w-16 shrink-0 rounded-xl bg-forest py-2 text-center text-paper'>
            <span className='block font-display text-2xl leading-none'>
              {e.day}
            </span>
            <span className='font-body text-[11px] uppercase tracking-wider'>
              {e.mon}
            </span>
          </span>
          <span className='min-w-0 flex-1'>
            <span className='block font-body font-medium'>{e.title}</span>
            <span className='font-body text-sm text-muted'>{e.where}</span>
          </span>
          <button
            type='button'
            aria-pressed={!!on[e.title]}
            onClick={() => setOn((s) => ({ ...s, [e.title]: !s[e.title] }))}
            className={`shrink-0 rounded-full border px-3 py-1.5 font-body text-xs font-medium transition-all ${on[e.title] ? "pop border-forest bg-forest text-white" : "border-line hover:border-forest"}`}
          >
            {on[e.title] ? "✓ Reminder" : "Remind me"}
          </button>
        </li>
      ))}
    </ul>
  );
}
