Willowmere Township

A demo community website for a fictional township, built by MyClickAid for its portfolio gallery.

Live demo: https://willowmere-demo.derin-obasa.workers.dev/

A fictional community. Willowmere Township, its news, projects, businesses, prices and donations are made up for this demo. Nothing here is a real government service, and no forms send data or take payment.

What it shows
Video hero: a carousel of short, muted township clips with a pause button. It skips any clip that fails to load and falls back to a still photo.
"I'd like to…" menu: a task-based menu (report a problem, book the hall, support a project) instead of department names.
Site-wide tools: a dismissible alert banner, a site search across news, projects, the directory and places, a utility bar with hours and phone, and a skip-to-content link.
Home page: status chips, an icon quick-link grid, community news, upcoming events with reminders, a bulletin board, projects under way, places to visit and animated counters.
News: filter by category (notices, council, public works, events).
Projects: current, upcoming and proposed projects with animated progress bars and a "Support this" button.
Directory: searchable local businesses with category filters.
Community map: an illustrated map with pins and a place list.
Give: donation funds with progress bars and a demo donation form.
Contact: a department request form with a demo confirmation.
Built with
Next.js (App Router, JavaScript, static export)
Tailwind CSS v4
Fonts: Young Serif and Work Sans, self-hosted with @fontsource
Hosted on Cloudflare
Getting started
bash
npm install
npm run dev

Open http://localhost:3000.

To create the production build (a static site in the out folder):

bash
npm run build
Project structure
app/
\_components/ Header, Footer, HeroCarousel, SearchDialog, NewsList, ProjectsList, ...
\_libs/ site.js, data.js, pictures.js, helpers.js
\_styles/ globals.css
news/ projects/ directory/ map/ give/ contact/
public/ Photos (.webp) and hero clips (.mp4)
Photos and hero clips

Everything is optional. A photo slot shows a green placeholder until you add an image, and the hero shows a still photo if no clips are listed. Put the files in public/ and register them in app/\_libs/pictures.js.

Slot File Ratio
Hero still and video poster wm-hero.webp 16:9
News photos wm-news-1.webp to wm-news-3.webp 4:3
Place photos wm-place-park.webp, wm-place-library.webp, wm-place-trail.webp 4:3
Hero clips wm-clip-1.mp4 to wm-clip-4.mp4 16:9

Keep each clip muted, around 720p and under about 3 MB so the page stays fast.

Deployment

The site is a static export (output: "export" in next.config.mjs) and deploys to Cloudflare from this repository. Every push to the main branch rebuilds and redeploys it.

About MyClickAid

MyClickAid is a bespoke web design studio. This site is one of several demo projects that show what a custom-designed website can look like for different kinds of organizations.
