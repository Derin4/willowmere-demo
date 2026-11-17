// Photos and hero clips live in /public. A slot with no entry shows a placeholder.
// hero 16:9 (also the video poster) · news-1..3 4:3 · place-park, place-library, place-trail 4:3
export const PICTURES = {
  hero: "/wm-hero.webp",
  "news-1": "/wm-news-1.webp",
  "news-2": "/wm-news-2.webp",
  "news-3": "/wm-news-3.webp",
  "place-park": "/wm-place-park.webp",
  "place-library": "/wm-place-library.webp",
  "place-trail": "/wm-place-trail.webp",
};

// Hero background clips, played one after another. Remove a line if a clip is not ready yet.
export const HERO_CLIPS = [
  { src: "/wm-clip-1.mp4", poster: "/wm-hero.webp" },
  { src: "/wm-clip-2.mp4" },
  { src: "/wm-clip-3.mp4" },
  { src: "/wm-clip-4.mp4" },
];
