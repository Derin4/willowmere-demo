import DemoForm from "../_components/DemoForm";
import SectionHead from "../_components/SectionHead";
import { funds } from "../_libs/data";
import { money } from "../_libs/helpers";
import ProgressBar from "../_components/ProgressBar";

export const metadata = { title: "Give" };

export default function GivePage() {
  return (
    <div className='mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.2fr_1fr]'>
      <div>
        <SectionHead
          eyebrow='Give'
          title='Help build what Willowmere needs'
          text='Every donation goes to the fund you choose. This is a demo: no payment is taken.'
        />
        <div className='space-y-6'>
          {funds.map((f) => {
            const pct = Math.round((f.raised / f.goal) * 100);
            return (
              <div
                key={f.id}
                className='lift rounded-3xl border border-line bg-white p-6'
              >
                <h2 className='mb-1 text-2xl'>{f.name}</h2>
                <p className='mb-4 font-body text-sm text-muted'>{f.text}</p>
                <ProgressBar pct={pct} h='h-3' />
                <p className='mt-2 font-body text-sm'>
                  <strong>{money(f.raised)}</strong> raised of {money(f.goal)} ·{" "}
                  {pct}%
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className='self-start rounded-3xl bg-tint p-7'>
        <h2 className='mb-5 text-2xl'>Make a donation</h2>
        <DemoForm
          prefix='WM'
          submitLabel='Donate (demo)'
          successTitle='Thank you for giving'
          successText='A receipt would be emailed to you. No payment has been taken.'
          fields={[
            {
              name: "fund",
              label: "Fund",
              type: "select",
              options: funds.map((f) => f.name),
              required: true,
              wide: true,
            },
            {
              name: "amount",
              label: "Amount",
              type: "select",
              options: ["$10", "$25", "$50", "$100", "$250", "Other"],
              required: true,
              wide: true,
            },
            { name: "name", label: "Name", required: true },
            { name: "email", label: "Email", type: "email", required: true },
          ]}
        />
      </div>
    </div>
  );
}
