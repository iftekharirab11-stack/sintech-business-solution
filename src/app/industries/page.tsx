import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Globe2,
  Headphones,
  LineChart,
  MapPin,
  MonitorSmartphone,
  Palette,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const countries = [
  {
    name: 'Australia',
    code: 'AU',
    tone: 'from-[#173b4d] via-[#216b69] to-[#e79d47]',
    description: 'Flexible BPO and digital support for Australian businesses that value speed, clarity, and dependable local-market communication.',
    services: ['Customer support', 'Virtual assistance', 'Digital marketing'],
  },
  {
    name: 'United States',
    code: 'US',
    tone: 'from-[#642b2b] via-[#a64b31] to-[#f0ac47]',
    description: 'Scalable offshore teams for US companies that need stronger operations, cleaner pipelines, and reliable delivery across time zones.',
    services: ['Call center operations', 'Lead generation', 'Back-office support'],
  },
  {
    name: 'New Zealand',
    code: 'NZ',
    tone: 'from-[#244b43] via-[#50745b] to-[#e2b16a]',
    description: 'Practical business support for New Zealand teams looking to grow capacity without compromising quality or customer experience.',
    services: ['Virtual assistance', 'Web development', 'Graphic design'],
  },
];

const capabilityCards = [
  { title: 'BPO & Customer Operations', text: 'Keep customers supported and revenue conversations moving with trained, accountable teams.', icon: Headphones },
  { title: 'Virtual & Back-Office Support', text: 'Reduce admin drag with reliable assistance, CRM updates, research, and workflow support.', icon: Users },
  { title: 'Digital Growth Services', text: 'Build stronger visibility with design, web development, SEO, and content systems.', icon: MonitorSmartphone },
];

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main className="bg-[#F8F9FA] text-slate-900">
        <section className="relative overflow-hidden bg-[#0B0F17] py-20 text-white md:py-28">
          <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#FF4500]/25 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-[#FFB52E]/15 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FFB52E]/35 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#FFB52E]">
                <Globe2 className="h-4 w-4" /> International delivery coverage
              </div>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">Local understanding. Global-quality delivery.</h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">Sintech Business Solutions provides quality BPO, operational, and digital services for growing teams across Australia, the United States, and New Zealand.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#FF4500] px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-lg shadow-orange-500/20">Start a conversation <ArrowRight className="h-4 w-4" /></Link>
                <Link href="/services/bpo-call-center" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white">Explore BPO services</Link>
              </div>
            </div>

            <div className="mt-14 grid max-w-3xl gap-4 sm:grid-cols-3">
              {[
                ['50+', 'International clients', LineChart],
                ['93%', 'Client satisfaction', Sparkles],
                ['24/7', 'Operational coverage', ShieldCheck],
              ].map(([value, label, Icon]) => {
                const MetricIcon = Icon as typeof LineChart;
                return <div key={label as string} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"><MetricIcon className="h-5 w-5 text-[#FFB52E]" /><div className="mt-4 text-3xl font-bold">{value as string}</div><div className="mt-1 text-sm text-slate-300">{label as string}</div></div>;
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF4500]">Where we serve</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Three markets. One consistent standard of care.</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">Our teams work across time zones and business cultures to help international companies operate with more capacity and confidence.</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {countries.map((country) => (
              <article key={country.name} className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${country.tone}`}>
                  <div className="absolute -right-8 -top-10 text-[11rem] font-black leading-none text-white/10">{country.code}</div>
                  <div className="absolute inset-x-6 bottom-6 flex items-end justify-between text-white">
                    <div><MapPin className="mb-3 h-6 w-6 text-[#FFB52E]" /><h3 className="text-2xl font-bold">{country.name}</h3></div>
                    <span className="rounded-full border border-white/25 bg-black/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em]">Market</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-7 text-slate-600">{country.description}</p>
                  <div className="mt-5 space-y-3">
                    {country.services.map((service) => <div key={service} className="flex items-center gap-2 text-sm font-semibold text-slate-800"><CheckCircle2 className="h-4 w-4 text-[#FF4500]" />{service}</div>)}
                  </div>
                  <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#FF4500]">Discuss your market <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#FFF0DC] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF4500]">Quality without borders</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">The same care follows your customer, wherever they are.</h2>
                <p className="mt-5 text-base leading-8 text-slate-700">We pair a Bangladesh-based delivery team with clear documentation, transparent KPIs, and thoughtful communication. That means your customers get a consistent experience and your leaders get visibility.</p>
                <Link href="/about" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#FF4500] px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white">Meet Sintech <ArrowRight className="h-4 w-4" /></Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {capabilityCards.map(({ title, text, icon: Icon }) => <div key={title} className="rounded-[24px] border border-[#4A2518]/10 bg-white/70 p-6 shadow-sm"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FF4500]/10 text-[#FF4500]"><Icon className="h-5 w-5" /></div><h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{text}</p></div>)}
                <div className="rounded-[24px] bg-[#4A2518] p-6 text-white sm:col-span-2"><div className="flex items-center justify-between gap-6"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FFB52E]">Performance promise</p><p className="mt-2 text-2xl font-bold">Reliable service, measured clearly.</p></div><BarChart3 className="h-9 w-9 shrink-0 text-[#FF4500]" /></div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="rounded-[32px] bg-[#0B0F17] p-8 text-white md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF4500]">Ready to expand?</p><h2 className="mt-3 text-3xl font-bold md:text-4xl">Let&apos;s build a better operation for your market.</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">Tell us whether you operate in Australia, the USA, New Zealand, or across all three. We&apos;ll shape the right support model around your goals.</p></div>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF4500] px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white">Book a consultation <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
