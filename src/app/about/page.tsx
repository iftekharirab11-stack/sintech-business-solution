import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  Clock3,
  Eye,
  Languages,
  Scaling,
  ShieldCheck,
  Target,
  UserRound,
  WalletCards,
} from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const advantages = [
  {
    title: 'English-Speaking Trained Agents',
    text: 'Our teams are trained to communicate clearly with customers and represent your business professionally.',
    icon: Languages,
  },
  {
    title: 'Flexible Team Scaling',
    text: 'Add the people and capacity your operation needs without building a large in-house team from the ground up.',
    icon: Scaling,
  },
  {
    title: 'Dedicated Account Management',
    text: 'You have a clear point of contact for updates, questions, campaign coordination, and day-to-day communication.',
    icon: UserRound,
  },
  {
    title: 'KPI-Based Performance Tracking',
    text: 'We agree on relevant measures for the work, monitor them, and share regular reports so progress stays visible.',
    icon: BarChart3,
  },
  {
    title: 'Quality Monitoring',
    text: 'Calls and customer interactions are reviewed to maintain service quality and identify useful coaching opportunities.',
    icon: CheckCircle2,
  },
  {
    title: 'Cost-Effective Operations',
    text: 'Work with a capable offshore team while avoiding many of the costs of hiring, managing, and equipping an in-house operation.',
    icon: WalletCards,
  },
  {
    title: 'Flexible Working Hours',
    text: 'Structure team coverage around your operating hours, target market, and the time zone your customers expect.',
    icon: Clock3,
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-[#F8F9FA] text-slate-900">
        <section className="mx-auto max-w-7xl px-4 pb-10 pt-12 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FF4500]">About us</p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">Practical support for the work behind your growth.</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Sintech Business Solutions is a Bangladesh-based BPO and digital services company. We provide trained English-speaking teams for customer support, sales outreach, lead generation, appointment setting, virtual assistance, and back-office work, along with web, design, SEO, and digital advertising support.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF4500]/10 text-[#FF4500]">
                <Target className="h-5 w-5" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF4500]">Mission</p>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                We take on the operational work that slows growing businesses down, from customer conversations and follow-up to admin, CRM, and digital tasks. Our goal is to make that work easier to manage, measure, and scale.
              </p>
            </div>
            <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF4500]/10 text-[#FF4500]">
                <Eye className="h-5 w-5" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF4500]">Vision</p>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                We want to be a dependable team for businesses that need more capacity without losing clear communication, consistent quality, or visibility into performance.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF4500]">Our values</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">A straightforward way to take work off your team&apos;s plate.</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                ['Clear communication', 'We keep instructions, updates, and customer-facing conversations easy to follow.'],
                ['Trained delivery teams', 'Our English-speaking teams learn the workflow, tools, and standards your business requires.'],
                ['Visible performance', 'We use quality checks, relevant KPIs, and regular reporting to keep the work accountable.'],
              ].map(([title, text]) => (
                <div key={title} className="rounded-[30px] border border-slate-200 bg-slate-50 p-8">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF4500]/10 text-[#FF4500]">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF4500]">Why choose Sintech?</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">The practical support behind a stronger operation.</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">We build our support around the way your business actually works, with clear ownership, flexible coverage, and a close eye on quality.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {advantages.map(({ title, text, icon: Icon }) => (
              <article key={title} className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#FF4500]/30 hover:shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF4500]/10 text-[#FF4500]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm">
              <div className="grid gap-4 p-4 sm:grid-cols-2">
                <div className="h-52 rounded-[22px] bg-gradient-to-br from-slate-900 via-slate-700 to-[#FF4500]/80" />
                <div className="h-52 rounded-[22px] bg-gradient-to-br from-[#FF4500]/80 via-orange-500 to-slate-900" />
                <div className="h-52 rounded-[22px] bg-gradient-to-br from-slate-200 via-white to-slate-300 sm:col-span-2" />
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF4500]">Location & infrastructure</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Built for execution in Dhaka.</h2>
              <div className="mt-6 space-y-4 text-slate-700">
                <div className="flex items-start gap-3">
                  <Building2 className="mt-1 h-5 w-5 text-[#FF4500]" />
                  <span>House-36(Lift-5), Road- 01, Block- H, Sector-2, Aftabnagar, Dhaka, Bangladesh, 1212</span>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 h-5 w-5 text-[#FF4500]" />
                  <span>Modern workspace infrastructure designed for remote operations, quality control, and reliable client support.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="rounded-[32px] bg-[#0B0F17] p-8 text-white md:p-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF4500]">Let&apos;s talk about your operation</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Ready to Build Your Offshore Team?</h2>
                <p className="mt-4 text-base leading-7 text-slate-300">Tell us what your business needs. We&apos;ll help you design the right team, workflow, and support structure to meet your goals.</p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#FF4500] px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-lg shadow-orange-500/20">
                  Book a Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white">
                  Talk to Our Team
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
