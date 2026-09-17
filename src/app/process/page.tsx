import Link from 'next/link';
import {
  ArrowRight,
  CalendarCheck2,
  CheckCircle2,
  Headphones,
  Megaphone,
  PhoneCall,
  Target,
  Users,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const services = [
  {
    title: 'B2B Cold Calling',
    icon: Target,
    description: 'Our virtual assistants help you contact businesses that have not reached out before. With confident communication and sharp qualification skills, they identify the right people, open conversations, and create collaboration opportunities for your company.',
    accent: 'bg-[#fff0dc] text-[#ff4500]',
  },
  {
    title: 'B2C Cold Calling',
    icon: Users,
    description: 'Approach customers who have not interacted with your brand through thoughtful, targeted outreach. Our assistants build awareness, communicate your value, and help turn new end users into buyers.',
    accent: 'bg-[#e8f2ee] text-[#2c765f]',
  },
  {
    title: 'Inbound Telemarketing',
    icon: PhoneCall,
    description: 'When customers call because they already know your business, our assistants respond with product knowledge, clear answers, and the confidence to guide interested clients toward placing an order.',
    accent: 'bg-[#f9e8e4] text-[#a64b31]',
  },
  {
    title: 'Outbound Telemarketing',
    icon: Megaphone,
    description: 'Reach a defined customer group with proactive calls to a targeted contact list. Our virtual assistants use the information customers share to create relevant conversations and move them toward a purchase.',
    accent: 'bg-[#eef0f7] text-[#4d5d91]',
  },
  {
    title: 'Sales Lead Generation',
    icon: Headphones,
    description: 'With experienced communicators and a structured process, our VA team attracts shoppers, qualifies interest, and turns potential customers into sales opportunities for your business.',
    accent: 'bg-[#f6edda] text-[#a56a20]',
  },
  {
    title: 'Appointment Setting',
    icon: CalendarCheck2,
    description: 'Our telemarketing and cold-calling assistants connect qualified customers to your sales representatives by handling the follow-up and scheduling the right conversation at the right time.',
    accent: 'bg-[#e9eef0] text-[#356370]',
  },
];

const inclusions = [
  'Dedicated Calling Assistants',
  'For 20 Business Days',
  'Script Preparation',
  'Auto Dialer',
  'Call Recordings',
  'Live Transfers',
  'Appointment Setting',
  'Daily Reporting',
  'No Setup Cost',
  'No Hidden Fees',
  'Email & Phone Support',
  'Super Easy Onboarding',
];

export default function ProcessPage() {
  return (
    <>
      <Header />
      <main className="bg-[#F8F9FA] text-slate-900">
        <section className="relative overflow-hidden bg-[#0B0F17] py-20 text-white md:py-28">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#FF4500]/25 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-44 w-44 rounded-full bg-[#FFB52E]/15 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FFB52E]/35 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#FFB52E]">
                <PhoneCall className="h-4 w-4" /> Sales conversations that move
              </div>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">Turn first conversations into real opportunities.</h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">From B2B cold calling to appointment setting, Sintech gives your business a dependable virtual assistant team for outreach, qualification, and sales momentum.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#FF4500] px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-lg shadow-orange-500/20">Book a calling consultation <ArrowRight className="h-4 w-4" /></Link>
                <Link href="/services/bpo-call-center" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white">View BPO hub</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF4500]">Our calling services</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">A complete outreach team for every stage of the funnel.</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">Choose one focused service or combine them into a consistent pipeline for awareness, conversations, qualification, and conversion.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map(({ title, icon: Icon, description, accent }) => (
              <article key={title} className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#FF4500]/30 hover:shadow-xl">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${accent}`}><Icon className="h-5 w-5" /></div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
                <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#FF4500]">Discuss this service <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#FFF0DC] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF4500]">What&apos;s included</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Everything needed to start calling with confidence.</h2>
                <p className="mt-5 text-base leading-8 text-slate-700">A straightforward launch model with the people, tools, reporting, and support needed to keep your campaign moving without unnecessary friction.</p>
                <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#FF4500] px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white">Get your campaign plan <ArrowRight className="h-4 w-4" /></Link>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {inclusions.map((item) => <div key={item} className="flex items-center gap-3 rounded-2xl border border-[#4A2518]/10 bg-white/75 p-4 text-sm font-semibold text-slate-800"><CheckCircle2 className="h-5 w-5 shrink-0 text-[#FF4500]" />{item}</div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="rounded-[32px] bg-[#0B0F17] p-8 text-white md:p-12">
            <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF4500]">Ready to reach more customers?</p><h2 className="mt-3 text-3xl font-bold md:text-4xl">Let&apos;s turn your calling list into a growth plan.</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">Tell us your audience, offer, and target market. We&apos;ll help shape the right calling support around your business.</p></div>
              <Link href="/contact" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#FF4500] px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white">Talk to Sintech <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
