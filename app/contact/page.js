import DemoForm from "../_components/DemoForm";
import SectionHead from "../_components/SectionHead";
import { departments } from "../_libs/data";

export const metadata = { title: "Contact the Township" };

export default function ContactPage() {
  return (
    <div className='mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.3fr_1fr]'>
      <div>
        <SectionHead
          eyebrow='Contact'
          title='Make a request or ask a question'
          text='Choose the department and we will route your message. You will get a reference number.'
        />
        <DemoForm
          prefix='WT'
          submitLabel='Send request (demo)'
          successTitle='Request received'
          successText='A staff member will reply within two business days.'
          fields={[
            {
              name: "dept",
              label: "Department",
              type: "select",
              options: departments,
              required: true,
              wide: true,
            },
            { name: "name", label: "Your name", required: true },
            { name: "email", label: "Email", type: "email", required: true },
            {
              name: "where",
              label: "Location (if it is about a place)",
              wide: true,
            },
            {
              name: "msg",
              label: "Your message",
              type: "textarea",
              required: true,
            },
          ]}
        />
      </div>
      <aside className='self-start rounded-3xl bg-tint p-7 font-body text-sm'>
        <h2 className='mb-4 text-2xl'>Township office</h2>
        <p>12 Mill Street, Willowmere</p>
        <p className='mb-4'>Mon–Fri, 8:30am–4:30pm</p>
        <p className='mb-1 font-medium'>Emergency?</p>
        <p className='text-muted'>
          Call 911. For urgent public works issues after hours, use the
          after-hours line on the township notice board.
        </p>
      </aside>
    </div>
  );
}
