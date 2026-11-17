const P = {
  request: "M4 5h16v11H9l-5 4V5Z",
  problem: "M12 4 3 20h18L12 4Zm0 6v5m0 3v.01",
  hall: "M3 21h18M5 21V9l7-5 7 5v12M10 21v-6h4v6",
  news: "M5 4h11v16H7a2 2 0 0 1-2-2V4Zm11 4h3v10a2 2 0 0 1-2 2M8 8h5M8 12h5",
  build: "M4 20h16M7 20V8l8-4v16M15 8h5v12M10 11h2M10 15h2",
  map: "M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2ZM9 4v14M15 6v14",
  shop: "M4 9l1-5h14l1 5M4 9v11h16V9M4 9h16M9 20v-6h6v6",
  give: "M12 20s-7-4.5-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.5-7 10-7 10Z",
};

export default function Icon({ name, className = "h-6 w-6" }) {
  return (
    <svg
      viewBox='0 0 24 24'
      className={`${className} fill-none stroke-current`}
      strokeWidth='1.7'
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden='true'
    >
      <path d={P[name]} />
    </svg>
  );
}
