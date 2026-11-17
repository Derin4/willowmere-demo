"use client";

import { useState } from "react";
import { refCode } from "../_libs/helpers";

const FIELD =
  "w-full rounded-xl border border-line bg-white px-3.5 py-3 font-body text-sm outline-none transition-colors focus:border-accent focus:ring-4 focus:ring-accent/10";

// A generic demo form. `fields` is plain data so it can be passed from a server page.
export default function DemoForm({
  fields,
  submitLabel = "Send (demo)",
  prefix = "REF",
  successTitle = "Request received",
  successText = "",
  className = "",
}) {
  const [values, setValues] = useState({});
  const [done, setDone] = useState(null);

  const set = (name, v) => setValues((s) => ({ ...s, [name]: v }));

  function onSubmit(e) {
    e.preventDefault();
    setDone({ code: refCode(prefix) });
  }

  if (done) {
    return (
      <div
        className={`step-in rounded-2xl border border-line bg-white p-8 ${className}`}
      >
        <p className='font-display text-2xl text-ink'>{successTitle}</p>
        <p className='mt-2 font-body text-sm text-muted'>
          Reference: <span className='text-ink'>{done.code}</span>
        </p>
        {successText ? (
          <p className='mt-4 font-body text-sm text-muted'>{successText}</p>
        ) : null}
        <p className='mt-6 font-body text-xs text-muted/70'>
          This is a demo confirmation — nothing has actually been sent.
        </p>
        <button
          type='button'
          onClick={() => {
            setDone(null);
            setValues({});
          }}
          className='mt-5 font-body text-sm text-ink underline underline-offset-4'
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={`grid gap-5 sm:grid-cols-2 ${className}`}
    >
      {fields.map((f) => {
        const id = `f-${f.name}`;
        const wide = f.wide || f.type === "textarea";
        return (
          <div key={f.name} className={wide ? "sm:col-span-2" : ""}>
            <label
              htmlFor={id}
              className='mb-1.5 block font-body text-sm text-muted'
            >
              {f.label}
              {f.required ? " *" : ""}
            </label>
            {f.type === "textarea" ? (
              <textarea
                id={id}
                rows={f.rows || 4}
                required={f.required}
                placeholder={f.placeholder}
                value={values[f.name] || ""}
                onChange={(e) => set(f.name, e.target.value)}
                className={FIELD}
              />
            ) : f.type === "select" ? (
              <select
                id={id}
                required={f.required}
                value={values[f.name] || ""}
                onChange={(e) => set(f.name, e.target.value)}
                className={FIELD}
              >
                <option value=''>{f.placeholder || "Choose one"}</option>
                {f.options.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={id}
                type={f.type || "text"}
                required={f.required}
                placeholder={f.placeholder}
                value={values[f.name] || ""}
                onChange={(e) => set(f.name, e.target.value)}
                className={FIELD}
              />
            )}
          </div>
        );
      })}
      <div className='sm:col-span-2'>
        <button
          type='submit'
          className='rounded-full bg-accent px-7 py-3.5 font-body text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-accent-deep'
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
