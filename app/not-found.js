import Link from "next/link";

export default function NotFound() {
  return (
    <div className='mx-auto max-w-xl px-6 py-28 text-center'>
      <p className='font-display text-7xl text-accent'>404</p>
      <h1 className='mt-4 font-display text-3xl'>
        We can&apos;t find that page.
      </h1>
      <p className='mt-3 font-body text-muted'>The link may be a little off.</p>
      <Link
        href='/'
        className='mt-8 inline-block rounded-full bg-accent px-8 py-3 font-body text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-accent-deep'
      >
        Back to home
      </Link>
    </div>
  );
}
