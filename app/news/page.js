import NewsList from "../_components/NewsList";
import SectionHead from "../_components/SectionHead";

export const metadata = { title: "News" };

export default function NewsPage() {
  return (
    <div className='mx-auto max-w-4xl px-6 py-16'>
      <SectionHead
        eyebrow='News & bulletin'
        title='What is happening in Willowmere'
      />
      <NewsList />
    </div>
  );
}
