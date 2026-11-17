"use client";

import { useState } from "react";

export default function Notices({ dark = true }) {
  const [done, setDone] = useState(false);
  if (done)
    return (
      <p className='step-in rounded-xl border border-paper/25 p-4 text-sm text-paper'>
        Thank you. This is a demo, so nothing was sent.
      </p>
    );
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      <label htmlFor='nl' className='mb-2 block text-sm text-paper'>
        Get township notices by email
      </label>
      <div className='flex gap-2'>
        <input
          id='nl'
          type='email'
          required
          placeholder='you@example.com'
          className='min-w-0 flex-1 rounded-full border border-paper/25 bg-paper/10 px-4 py-2.5 text-sm text-paper outline-none placeholder:text-paper/40 focus:border-paper'
        />
        <button
          type='submit'
          className='rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5'
        >
          Sign up
        </button>
      </div>
      <p className='mt-2 text-xs text-paper/45'>
        Demo form. Road closures, council dates and water notices.
      </p>
    </form>
  );
}
