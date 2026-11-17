import "@fontsource/young-serif/400.css";
import "@fontsource/work-sans/400.css";
import "@fontsource/work-sans/500.css";
import "@fontsource/work-sans/600.css";
import "./_styles/globals.css";
import AlertBanner from "./_components/AlertBanner";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { site } from "./_libs/site";

export const metadata = {
  title: { default: site.title, template: "%s — " + site.name },
  description: site.description,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      style={{
        "--font-display-name": "'Young Serif'",
        "--font-body-name": "'Work Sans'",
      }}
    >
      <body className='font-body text-ink bg-paper min-h-screen flex flex-col'>
        <a
          href='#main'
          className='sr-only z-50 rounded-full bg-accent px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4'
        >
          Skip to content
        </a>
        <AlertBanner />
        <Header />
        <main id='main' className='flex-1'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
