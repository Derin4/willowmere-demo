import CommunityMap from "../_components/CommunityMap";
import SectionHead from "../_components/SectionHead";

export const metadata = { title: "Community map" };

export default function MapPage() {
  return (
    <div className='mx-auto max-w-6xl px-6 py-16'>
      <SectionHead
        eyebrow='Community map'
        title='Places worth a visit'
        text='Parks, culture and community spaces around Willowmere.'
      />
      <CommunityMap />
    </div>
  );
}
