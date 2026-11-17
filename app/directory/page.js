import DirectoryList from "../_components/DirectoryList";
import SectionHead from "../_components/SectionHead";

export const metadata = { title: "Directory" };

export default function DirectoryPage() {
  return (
    <div className='mx-auto max-w-6xl px-6 py-16'>
      <SectionHead
        eyebrow='Local directory'
        title='Willowmere businesses and services'
        text='Support local. Listings are fictional and shown for the demo.'
      />
      <DirectoryList />
    </div>
  );
}
