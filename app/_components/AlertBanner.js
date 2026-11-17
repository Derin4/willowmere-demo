"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "../_libs/site";

export default function AlertBanner() {
  const [shown, setShown] = useState(true);
  if (!shown) return null;
  return (
    <div role='status' className='bg-accent text-white'>
      <div className='mx-auto flex max-w-6xl items-center gap-3 px-6 py-2 font-body text-sm'>
        <span className='shrink-0 rounded-full bg-white/20 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider'>
          Notice
        </span>
        <p className='min-w-0 flex-1'>
          {site.alert}{" "}
          <Link href='/news' className='underline underline-offset-4'>
            Details
          </Link>
        </p>
        <button
          type='button'
          onClick={() => setShown(false)}
          aria-label='Dismiss notice'
          className='grid h-7 w-7 shrink-0 place-items-center rounded-full transition-colors hover:bg-white/20'
        >
          ×
        </button>
      </div>
    </div>
  );
}
