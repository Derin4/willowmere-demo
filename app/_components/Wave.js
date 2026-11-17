// Slow river waves along the bottom edge of the hero. Fill matches the page background.
export default function Wave({ fill = "#faf8f2" }) {
  const d =
    "M0 40 C 120 10 240 70 360 40 S 600 10 720 40 S 960 70 1080 40 S 1320 10 1440 40 S 1680 70 1800 40 S 2040 10 2160 40 S 2400 70 2520 40 S 2760 10 2880 40 V80 H0Z";
  return (
    <div
      className='pointer-events-none absolute inset-x-0 bottom-0 h-16 overflow-hidden'
      aria-hidden='true'
    >
      <svg
        viewBox='0 0 2880 80'
        preserveAspectRatio='none'
        className='wave-slow absolute bottom-0 h-full w-[200%] opacity-40'
        fill={fill}
      >
        <path d={d} />
      </svg>
      <svg
        viewBox='0 0 2880 80'
        preserveAspectRatio='none'
        className='wave absolute -bottom-px h-[70%] w-[200%]'
        fill={fill}
      >
        <path d={d} />
      </svg>
    </div>
  );
}
