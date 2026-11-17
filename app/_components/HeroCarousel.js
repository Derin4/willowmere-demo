"use client";

import { useEffect, useRef, useState } from "react";
import { HERO_CLIPS } from "../_libs/pictures";
import Photo from "./Photo";

// Background hero: short muted clips that play one after another and crossfade.
// Falls back to the still hero photo if no clips are registered or none can load.
export default function HeroCarousel() {
  const [failed, setFailed] = useState([]);
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [still, setStill] = useState(false);
  const refs = useRef([]);

  const clips = HERO_CLIPS.filter((c) => !failed.includes(c.src));
  const active = clips.length ? idx % clips.length : 0;

  // Reduced motion or data saver: show the first frame only.
  useEffect(() => {
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sd = navigator.connection && navigator.connection.saveData;
    const raf = requestAnimationFrame(() => {
      setStill(Boolean(rm || sd));
      // A clip can fail before React attaches its error handler, so check once on mount too.
      const bad = refs.current.flatMap((v, i) =>
        v && v.error ? [HERO_CLIPS[i].src] : [],
      );
      if (bad.length) setFailed((f) => [...new Set([...f, ...bad])]);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  // Play only the active clip.
  useEffect(() => {
    refs.current.forEach((v, i) => {
      if (!v) return;
      if (i === active && !paused && !still) {
        v.currentTime = 0;
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [active, paused, still, clips.length]);

  // Safety net: move on even if a clip never fires "ended".
  useEffect(() => {
    if (clips.length < 2 || paused || still) return;
    const id = setTimeout(() => setIdx((i) => i + 1), 12000);
    return () => clearTimeout(id);
  }, [active, clips.length, paused, still]);

  if (!clips.length) {
    return (
      <Photo
        id='hero'
        label='Willow River at Willowmere'
        swatch={["#dbeaf0", "#2f5d46"]}
        priority
        sizes='100vw'
        className='drift absolute! inset-0 h-full w-full'
      />
    );
  }

  return (
    <>
      <div className='absolute inset-0 bg-night' aria-hidden='true'>
        {clips.map((c, i) => (
          <video
            key={c.src}
            ref={(el) => {
              refs.current[i] = el;
            }}
            src={c.src}
            poster={c.poster}
            muted
            playsInline
            loop={clips.length === 1}
            preload={i === 0 ? "auto" : "metadata"}
            onEnded={() => clips.length > 1 && setIdx((n) => n + 1)}
            onError={() => setFailed((f) => [...f, c.src])}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${i === active ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>
      <div className='absolute right-4 top-4 z-10 flex items-center gap-3 sm:right-6'>
        {clips.length > 1 ? (
          <div className='flex gap-2' role='group' aria-label='Hero clips'>
            {clips.map((c, i) => (
              <button
                key={c.src}
                type='button'
                onClick={() => setIdx(i)}
                aria-label={`Show clip ${i + 1}`}
                aria-current={i === active}
                className={`h-1.5 rounded-full transition-all ${i === active ? "w-8 bg-wheat" : "w-4 bg-paper/50 hover:bg-paper"}`}
              />
            ))}
          </div>
        ) : null}
        {!still ? (
          <button
            type='button'
            onClick={() => setPaused((p) => !p)}
            aria-label={
              paused ? "Play background video" : "Pause background video"
            }
            className='grid h-9 w-9 place-items-center rounded-full border border-paper/40 bg-night/40 text-xs text-paper backdrop-blur transition-colors hover:bg-paper hover:text-night'
          >
            {paused ? "▶" : "❚❚"}
          </button>
        ) : null}
      </div>
    </>
  );
}
