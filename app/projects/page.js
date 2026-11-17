import ProjectsList from "../_components/ProjectsList";
import SectionHead from "../_components/SectionHead";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <div className='mx-auto max-w-6xl px-6 py-16'>
      <SectionHead
        eyebrow='Community projects'
        title='Built, building and proposed'
        text='Follow the progress of current projects, see what is coming, and show your support for proposals.'
      />
      <ProjectsList />
    </div>
  );
}
