import Link from "next/link";
import Counter from "./_components/Counter";
import Events from "./_components/Events";
import HeroCarousel from "./_components/HeroCarousel";
import Icon from "./_components/Icon";
import Photo from "./_components/Photo";
import ProgressBar from "./_components/ProgressBar";
import Reveal from "./_components/Reveal";
import SectionHead from "./_components/SectionHead";
import Wave from "./_components/Wave";
import { bulletin, news, places, projects } from "./_libs/data";

const QUICK = [
  {
    href: "/contact",
    icon: "request",
    title: "Make a request",
    text: "Reach a department.",
  },
  {
    href: "/contact",
    icon: "problem",
    title: "Report a problem",
    text: "Potholes, lights, leaks.",
  },
  {
    href: "/contact",
    icon: "hall",
    title: "Book the hall",
    text: "Events and meetings.",
  },
  {
    href: "/news",
    icon: "news",
    title: "Latest notices",
    text: "News and closures.",
  },
  {
    href: "/projects",
    icon: "build",
    title: "What is being built",
    text: "Progress on projects.",
  },
  {
    href: "/map",
    icon: "map",
    title: "Community map",
    text: "Parks and places.",
  },
  {
    href: "/directory",
    icon: "shop",
    title: "Local directory",
    text: "Businesses nearby.",
  },
  { href: "/give", icon: "give", title: "Give", text: "Support a project." },
];

const STATUS = [
  "Fire rating: Low",
  "Hydrant flushing under way",
  "Harrow Street: one lane closed",
];

const PLACES = [
  {
    id: "place-park",
    name: "Ridge Park",
    text: "Playground, picnic shelters and the future splash pad.",
  },
  {
    id: "place-library",
    name: "Willowmere Library",
    text: "Books, programs and free internet.",
  },
  {
    id: "place-trail",
    name: "Willow River trail",
    text: "A 5 km riverside walking and cycling path.",
  },
];

const cash = (s) => Number(s.replace(/[^0-9]/g, ""));

export default function HomePage() {
  const current = projects.filter((p) => p.status === "Current");
  const invested = current.reduce((n, p) => n + cash(p.budget), 0);
  const [lead, ...rest] = news;
  return (
    <>
      <section className='relative h-[82vh] min-h-[560px] overflow-hidden bg-night'>
        <HeroCarousel />
        <div className='absolute inset-0 bg-gradient-to-t from-night/90 via-night/50 to-night/15' />
        <div className='absolute inset-x-0 bottom-0 pb-24'>
          <div className='mx-auto max-w-6xl px-6 text-paper'>
            <p className='fade-up mb-3 font-body text-sm tracking-[0.2em] text-paper/75'>
              WELCOME TO
            </p>
            <h1
              className='fade-up max-w-3xl text-5xl leading-[1.04] sm:text-7xl'
              style={{ "--d": "100ms" }}
            >
              Willowmere, on the Willow River
            </h1>
            <p
              className='fade-up mt-5 max-w-xl font-body text-lg text-paper/85'
              style={{ "--d": "200ms" }}
            >
              A small community with big plans. See what is happening, what is
              being built, and how to take part.
            </p>
            <div
              className='fade-up mt-7 flex flex-wrap gap-3'
              style={{ "--d": "300ms" }}
            >
              <Link
                href='/contact'
                className='rounded-full bg-accent px-7 py-3.5 font-body text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-accent-deep'
              >
                Make a request
              </Link>
              <Link
                href='/projects'
                className='rounded-full border border-paper/50 px-7 py-3.5 font-body text-sm font-semibold text-paper backdrop-blur transition-colors hover:bg-paper hover:text-night'
              >
                See what is being built
              </Link>
            </div>
            <div
              className='fade-up mt-7 flex flex-wrap items-center gap-2'
              style={{ "--d": "400ms" }}
            >
              <span className='font-body text-xs uppercase tracking-widest text-paper/60'>
                Today
              </span>
              {STATUS.map((s) => (
                <span
                  key={s}
                  className='inline-flex items-center gap-2 rounded-full bg-paper/15 px-3 py-1.5 font-body text-xs backdrop-blur'
                >
                  <span
                    className='h-1.5 w-1.5 rounded-full bg-wheat'
                    aria-hidden='true'
                  />
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
        <Wave />
      </section>

      <section className='relative z-10 mx-auto -mt-2 max-w-6xl px-6'>
        <div className='grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4'>
          {QUICK.map((q, i) => (
            <Reveal key={q.title} delay={i * 50}>
              <Link
                href={q.href}
                className='lift group flex h-full flex-col rounded-2xl border border-line bg-white p-5'
              >
                <span className='mb-4 grid h-11 w-11 place-items-center rounded-xl bg-tint text-forest transition-colors group-hover:bg-forest group-hover:text-paper'>
                  <Icon name={q.icon} />
                </span>
                <p className='font-display text-lg leading-snug'>{q.title}</p>
                <p className='mt-1 font-body text-sm text-muted'>{q.text}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className='mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[1.6fr_1fr]'>
        <div>
          <SectionHead eyebrow='Latest' title='Community news' />
          <Reveal>
            <Link
              href='/news'
              className='zoom lift group mb-5 grid overflow-hidden rounded-3xl border border-line bg-white sm:grid-cols-[1fr_1.1fr]'
            >
              <Photo
                id='news-1'
                label='Volunteers at the riverfront clean-up'
                swatch={["#dbeaf0", "#2f5d46"]}
                sizes='(min-width:1024px) 25vw, 100vw'
                className='aspect-[4/3] w-full sm:aspect-auto sm:min-h-[16rem]'
              />
              <span className='block p-6'>
                <span className='mb-2 block font-body text-xs text-muted'>
                  <span className='font-semibold uppercase tracking-widest text-accent-deep'>
                    {lead.cat}
                  </span>{" "}
                  · {lead.date}
                </span>
                <span className='mb-2 block font-display text-2xl leading-snug transition-colors group-hover:text-accent'>
                  {lead.title}
                </span>
                <span className='block font-body text-sm text-muted'>
                  {lead.text}
                </span>
              </span>
            </Link>
          </Reveal>
          <div className='divide-y divide-line border-y border-line'>
            {rest.slice(0, 3).map((n) => (
              <article key={n.slug} className='py-5'>
                <p className='mb-1 font-body text-xs text-muted'>
                  <span className='font-semibold uppercase tracking-widest text-accent-deep'>
                    {n.cat}
                  </span>{" "}
                  · {n.date}
                </p>
                <h3 className='mb-1 text-xl'>{n.title}</h3>
                <p className='font-body text-sm text-muted'>{n.text}</p>
              </article>
            ))}
          </div>
          <Link
            href='/news'
            className='mt-6 inline-block font-body text-sm font-semibold text-accent-deep underline underline-offset-4'
          >
            All news
          </Link>
        </div>
        <aside className='space-y-10'>
          <div>
            <h2 className='mb-4 text-2xl'>Upcoming</h2>
            <Events />
          </div>
          <div className='rounded-3xl bg-wheat/50 p-6'>
            <h2 className='mb-3 text-xl'>Bulletin board</h2>
            <ul className='space-y-3 font-body text-sm'>
              {bulletin.map((b) => (
                <li key={b.text}>
                  <span className='mr-2 rounded-full bg-deep px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-paper'>
                    {b.tag}
                  </span>
                  {b.text}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <section className='bg-deep text-paper'>
        <div className='mx-auto max-w-6xl px-6 py-20'>
          <SectionHead light eyebrow='Under way' title='Projects under way' />
          <div className='grid gap-6 sm:grid-cols-3'>
            {current.map((p, i) => (
              <Reveal
                key={p.slug}
                delay={i * 90}
                className='rounded-3xl border border-paper/15 bg-paper/5 p-6'
              >
                <h3 className='mb-1 text-xl'>{p.title}</h3>
                <p className='mb-5 font-body text-sm text-paper/65'>{p.due}</p>
                <ProgressBar
                  pct={p.progress}
                  track='bg-paper/15'
                  bar='bg-wheat'
                />
                <p className='mt-3 font-body text-xs text-paper/65'>
                  {p.progress}% complete · {p.budget}
                </p>
              </Reveal>
            ))}
          </div>
          <Link
            href='/projects'
            className='mt-10 inline-block font-body text-sm font-semibold text-wheat underline underline-offset-4'
          >
            All projects, upcoming and proposed
          </Link>
        </div>
      </section>

      <section className='mx-auto max-w-6xl px-6 py-24'>
        <SectionHead
          eyebrow='Explore'
          title='Places worth a visit'
          text='Parks, culture and community spaces around Willowmere.'
        />
        <div className='grid gap-5 sm:grid-cols-3'>
          {PLACES.map((p, i) => (
            <Reveal key={p.id} delay={i * 90}>
              <Link
                href='/map'
                className='zoom lift group block overflow-hidden rounded-3xl border border-line bg-white'
              >
                <Photo
                  id={p.id}
                  label={p.name}
                  swatch={["#dbeaf0", "#2f5d46"]}
                  sizes='(min-width:640px) 33vw, 100vw'
                  className='aspect-[4/3] w-full'
                />
                <span className='block p-5'>
                  <span className='block font-display text-xl transition-colors group-hover:text-accent'>
                    {p.name}
                  </span>
                  <span className='mt-1 block font-body text-sm text-muted'>
                    {p.text}
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <p className='mt-6 font-body text-sm text-muted'>
          {places.length} places on the{" "}
          <Link
            href='/map'
            className='font-semibold text-accent-deep underline underline-offset-4'
          >
            community map
          </Link>
          .
        </p>
      </section>

      <section className='bg-tint'>
        <div className='mx-auto grid max-w-6xl gap-8 px-6 py-16 text-center sm:grid-cols-3'>
          {[
            [<Counter key='a' to={current.length} />, "projects under way"],
            [
              <Counter key='b' to={invested} prefix='$' />,
              "being invested in the township",
            ],
            [
              <Counter key='c' to={1200} suffix='+' />,
              "neighbours at this year’s Harvest Fair",
            ],
          ].map(([n, l]) => (
            <div key={l}>
              <p className='font-display text-5xl text-forest'>{n}</p>
              <p className='mt-1 font-body text-sm text-muted'>{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='bg-night text-paper'>
        <div className='mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-14'>
          <p className='max-w-xl font-display text-3xl leading-snug'>
            Help build what Willowmere needs.
          </p>
          <Link
            href='/give'
            className='rounded-full bg-accent px-8 py-4 font-body text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-accent-deep'
          >
            Give to a project
          </Link>
        </div>
      </section>
    </>
  );
}
