"use client";

import { useState } from "react";
import { PLACE_TYPES, places } from "../_libs/data";

const TYPE_COLOR = {
  Parks: "#2f5d46",
  Culture: "#b4532a",
  Community: "#1f3d2f",
};

export default function CommunityMap() {
  const [type, setType] = useState("All");
  const [active, setActive] = useState(null);
  const shown = type === "All" ? places : places.filter((p) => p.type === type);
  const current = places.find((p) => p.id === active);

  return (
    <div>
      <div className='no-scrollbar -mx-6 mb-6 flex gap-2 overflow-x-auto px-6'>
        {PLACE_TYPES.map((t) => (
          <button
            key={t}
            type='button'
            onClick={() => {
              setType(t);
              setActive(null);
            }}
            aria-pressed={type === t}
            className={`shrink-0 rounded-full border px-4 py-2 font-body text-sm transition-all ${type === t ? "pop border-deep bg-deep text-paper" : "border-line bg-white hover:border-deep"}`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className='grid gap-8 lg:grid-cols-[1.7fr_1fr]'>
        <div className='relative overflow-hidden rounded-3xl border border-line bg-tint'>
          <svg
            viewBox='0 0 600 380'
            className='block w-full'
            role='img'
            aria-label='Illustrated map of Willowmere'
          >
            <rect width='600' height='380' fill='#eef3ea' />
            <path
              d='M-10 250 C120 200 200 330 330 280 S520 200 620 250 L620 300 C520 250 420 340 330 330 S120 260 -10 300Z'
              fill='#cfe2ea'
            />
            <path
              className='shimmer'
              d='M-10 275 C120 225 200 305 330 305 S520 225 620 275'
              fill='none'
              stroke='#fff'
              strokeWidth='2'
              opacity='.8'
            />
            <path
              d='M0 140H600M0 205H600M180 0V380M380 0V380'
              stroke='#fff'
              strokeWidth='9'
            />
            <path
              d='M0 140H600M0 205H600M180 0V380M380 0V380'
              stroke='#d9d3c0'
              strokeWidth='1'
              strokeDasharray='6 6'
            />
            <ellipse cx='110' cy='85' rx='70' ry='45' fill='#bcd7b6' />
            <ellipse cx='505' cy='95' rx='60' ry='40' fill='#bcd7b6' />
            {shown.map((p) => (
              <g
                key={p.id}
                transform={`translate(${p.x} ${p.y})`}
                onClick={() => setActive(p.id)}
                className='cursor-pointer transition-transform hover:scale-110'
                style={{ transformBox: "fill-box" }}
              >
                {active === p.id ? (
                  <circle
                    className='pin-ping'
                    r='13'
                    fill={TYPE_COLOR[p.type]}
                  />
                ) : null}
                <circle
                  r={active === p.id ? 17 : 13}
                  fill={TYPE_COLOR[p.type]}
                  stroke='#fff'
                  strokeWidth='3'
                />
                <text
                  textAnchor='middle'
                  dy='4'
                  fontSize='12'
                  fontWeight='700'
                  fill='#fff'
                >
                  {p.id}
                </text>
              </g>
            ))}
          </svg>
          <p className='border-t border-line bg-paper px-4 py-2 font-body text-xs text-muted'>
            Illustrated map, not to scale.
          </p>
        </div>
        <div>
          {current ? (
            <div
              className='step-in mb-6 rounded-2xl border-l-4 border-accent bg-white p-5 shadow-sm'
              key={current.id}
            >
              <p className='font-body text-xs font-semibold uppercase tracking-widest text-accent-deep'>
                {current.type}
              </p>
              <h2 className='mb-1 text-2xl'>{current.name}</h2>
              <p className='font-body text-sm text-muted'>{current.text}</p>
            </div>
          ) : (
            <p className='mb-6 font-body text-sm text-muted'>
              Select a pin or a place in the list to see details.
            </p>
          )}
          <ol className='divide-y divide-line border-y border-line'>
            {shown.map((p) => (
              <li key={p.id}>
                <button
                  type='button'
                  onClick={() => setActive(p.id)}
                  className={`flex w-full items-center gap-3 py-3 text-left font-body text-sm transition-colors hover:text-accent ${active === p.id ? "text-accent" : ""}`}
                >
                  <span
                    className='flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white'
                    style={{ background: TYPE_COLOR[p.type] }}
                  >
                    {p.id}
                  </span>
                  {p.name}
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
