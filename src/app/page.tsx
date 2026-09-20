import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Globe,
  LineChart,
  MessageSquareText,
  PhoneCall,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { industryMarquee, processSteps, servicePillars } from '@/data/siteData';

const statCards = [
  { value: '70%', label: 'Cost Reduced' },
  { value: '24/7', label: 'Support' },
  { value: '98%', label: 'Client Satisfaction' },
];

const featureCards = [
  {
    title: 'Call Center Operations',
    icon: PhoneCall,
    text: 'Inbound and outbound support that keeps your conversations moving around the clock.',
  },
  {
    title: 'Virtual Assistance',
    icon: Users,
    text: 'Responsive admin, research, and executive support for busy teams.',
  },
  {
    title: 'Digital Growth',
    icon: Globe,
    text: 'Web, design, SEO, and sales systems that lift visibility and revenue.',
  },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="bg-[#F8F9FA] text-slate-900">
        <section className="mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#FF4500]/20 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#FF4500] shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            SMART OUTSOURCING • BETTER PERFORMANCE • SUSTAINABLE GROWTH
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h1 className="max-w-xl text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-950 md:text-6xl">
                Scale Your Operations &amp; Digital Footprint with Offshore Elite Talent.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
                Bangladesh-based BPO and business solutions partner delivering 24/7 call center support, virtual assistance, and modern digital services at up to 70% lower overhead.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#FF4500] px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-lg shadow-orange-500/20 transition-transform hover:-translate-y-0.5">
                  Book Strategy Call
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/services/digital-solutions" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-slate-700 transition-colors hover:border-[#FF4500] hover:text-[#FF4500]">
                  Explore Services
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {featureCards.map(({ title, icon: Icon, text }) => (
                  <div key={title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-[#FF4500]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="text-sm font-semibold text-slate-900">{title}</div>
                    <p className="mt-2 text-xs leading-5 text-slate-600">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-[fadeInUp_0.5s_ease-out]">
              <div className="rounded-[30px] border border-slate-200 bg-white p-5 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
                <div className="rounded-[22px] bg-[#0B0F17] p-5 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.2em] text-slate-400">Operations Overview</div>
                      <div className="mt-2 text-3xl font-bold">+180%</div>
                    </div>
                    <div className="rounded-full bg-[#FF4500]/15 p-3 text-[#FF4500]">
                      <LineChart className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {statCards.map((stat) => (
                      <div key={stat.label} className="rounded-2xl border border-slate-700 bg-slate-900/70 p-3">
                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                        <div className="mt-1 text-[11px] uppercase tracking-[0.14em] text-slate-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl bg-slate-900/80 p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-200">Performance</span>
                      <span className="text-sm font-semibold text-[#FF4500]">92.8%</span>
                    </div>
                    <div className="flex h-2 overflow-hidden rounded-full bg-slate-800">
                      <div className="w-[92%] rounded-full bg-[#FF4500]" />
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-slate-300">
                      <div><span className="block text-slate-500">CSAT</span><span className="mt-1 block font-semibold text-white">98%</span></div>
                      <div><span className="block text-slate-500">FCR</span><span className="mt-1 block font-semibold text-white">89%</span></div>
                      <div><span className="block text-slate-500"> SLA </span><span className="mt-1 block font-semibold text-white">4.8m</span></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-5 -left-5 rounded-2xl border border-[#FF4500]/20 bg-white px-4 py-3 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-[#FF4500]/10 p-2 text-[#FF4500]">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-900">Trusted Partner</div>
                    <div className="text-xs text-slate-500">Bangladesh offshore delivery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden border-y border-slate-200 bg-white py-5">
          <div className="flex animate-[scroll_22s_linear_infinite] gap-8 whitespace-nowrap px-4 text-sm font-semibold uppercase tracking-[0.24em] text-slate-600">
            {[...industryMarquee, ...industryMarquee].map((industry) => (
              <div key={industry} className="inline-flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#FF4500]" />
                {industry}
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF4500]">Service pillars</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Turn business complexity into scalable systems.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {servicePillars.map((pillar) => (
              <div key={pillar.id} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#FF4500]/30 hover:shadow-xl">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF4500]">{pillar.title}</p>
                  </div>
                  <div className="rounded-full bg-orange-50 p-3 text-[#FF4500]">
                    {pillar.id === 'bpo' ? <PhoneCall className="h-5 w-5" /> : <Search className="h-5 w-5" />}
                  </div>
                </div>

                <p className="mb-6 max-w-lg text-sm leading-7 text-slate-600">{pillar.description}</p>

                <div className="space-y-3">
                  {pillar.items.map((item) => (
                    <Link key={item.name} href={item.href} className="group flex items-center justify-between rounded-2xl border border-slate-200 p-4 transition-colors hover:border-[#FF4500]/30 hover:bg-orange-50">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 group-hover:bg-white group-hover:text-[#FF4500]">
                          {item.icon === 'PhoneCall' && <PhoneCall className="h-4 w-4" />}
                          {item.icon === 'Users' && <Users className="h-4 w-4" />}
                          {item.icon === 'BriefcaseBusiness' && <BriefcaseBusiness className="h-4 w-4" />}
                          {item.icon === 'MonitorSmartphone' && <BarChart3 className="h-4 w-4" />}
                          {item.icon === 'Search' && <Search className="h-4 w-4" />}
                          {item.icon === 'Palette' && <Sparkles className="h-4 w-4" />}
                        </div>
                        <span className="font-medium text-slate-900">{item.name}</span>
                      </div>
                      <span className="text-[#FF4500]">Learn More →</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#0B0F17] py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF4500]">Our process</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">From strategy to optimization — built for results.</h2>
            </div>

            <div className="grid gap-5 md:grid-cols-5">
              {processSteps.map((step, index) => (
                <div key={step} className="rounded-3xl border border-slate-800 bg-slate-950/60 p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FF4500]">0{index + 1}</span>
                    {index < 4 && <span className="text-slate-500">→</span>}
                  </div>
                  <div className="text-xl font-semibold text-white">{step}</div>
                  <p className="mt-4 text-sm leading-6 text-slate-400">
                    {index === 0 && 'Listen and analyze your business needs with precision.'}
                    {index === 1 && 'Design a tailored action plan aligned to your goals.'}
                    {index === 2 && 'Launch with a skilled team and disciplined execution.'}
                    {index === 3 && 'Track KPI performance in real time with proactive oversight.'}
                    {index === 4 && 'Refine workflows continuously for sustainable efficiency.'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm lg:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF4500]">Why choose us</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">Reliable outsourcing with measurable impact.</h2>
              <div className="mt-8 space-y-4">
                {[
                  'Client-centric operations built around responsiveness and accountability.',
                  'Performance-driven teams optimized for quality, speed, and compliance.',
                  'Transparent KPI monitoring and continuous optimization for long-term value.',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#FF4500]" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[30px] bg-[#FF4500] p-8 text-white shadow-lg shadow-orange-500/20">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                <MessageSquareText className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-bold">Let&rsquo;s build your next growth engine.</h3>
              <p className="mt-4 text-sm leading-7 text-orange-50">
                Tell us where your operations are stretched and we&rsquo;ll match you with a solution that fits your goals, budget, and timeline.
              </p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#FF4500]">
                Talk to an expert
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
