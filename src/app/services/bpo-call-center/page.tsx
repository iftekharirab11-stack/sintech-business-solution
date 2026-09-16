import Link from 'next/link';
import { ArrowRight, CheckCircle2, Landmark, MessageSquareText, PhoneCall, Sparkles } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { bpoServices } from '@/data/siteData';

const faqs = [
  {
    question: 'Why outsource BPO to Bangladesh?',
    answer: 'Bangladesh offers a highly skilled, cost-efficient talent pool with strong English proficiency and strong operations discipline, giving businesses dependable support without sacrificing quality.',
  },
  {
    question: 'How are agents trained?',
    answer: 'Agents go through product and process onboarding, call handling frameworks, customer service simulations, quality checks, and performance coaching to maintain consistency.',
  },
];

export default function BPOHubPage() {
  return (
    <>
      <Header />
      <main className="bg-[#F8F9FA] text-slate-900">
        <section className="mx-auto max-w-7xl px-4 pb-8 pt-12 sm:px-6 lg:px-8">
          <div className="rounded-[32px] bg-[#0B0F17] px-6 py-10 text-white shadow-2xl md:px-10 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF4500]">BPO &amp; Call Center</p>
                <h1 className="mt-4 max-w-xl text-4xl font-extrabold tracking-tight md:text-5xl">
                  High-Performance Inbound &amp; Outbound BPO Call Center Solutions
                </h1>
                <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
                  Transform cold leads into clients, reduce response times, and provide 24/7 multi-channel support.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#FF4500] px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white">
                    Book a BPO Consultation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="rounded-[28px] border border-slate-700 bg-slate-900/70 p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-300">Lead Estimator</span>
                  <Sparkles className="h-5 w-5 text-[#FF4500]" />
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                      <span>Agents Needed</span>
                      <span className="font-semibold text-white">12</span>
                    </div>
                    <input type="range" min="2" max="30" defaultValue="12" className="w-full accent-[#FF4500]" />
                  </div>
                  <div className="rounded-2xl bg-slate-950/80 p-4">
                    <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Estimated Monthly Savings</div>
                    <div className="mt-3 text-3xl font-bold text-[#FF4500]">$8,500</div>
                    <div className="mt-2 text-sm text-slate-300">Potential operational savings vs. local hiring and overhead.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF4500]">Dedicated service lines</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Flexible support for every revenue stage.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {bpoServices.map((service) => (
              <Link key={service.title} href={service.href} className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#FF4500]/30 hover:shadow-xl">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-[#FF4500]">
                  {service.title.includes('Outbound') && <PhoneCall className="h-5 w-5" />}
                  {service.title.includes('Lead') && <Landmark className="h-5 w-5" />}
                  {service.title.includes('Inbound') && <MessageSquareText className="h-5 w-5" />}
                  {service.title.includes('Appointment') && <CheckCircle2 className="h-5 w-5" />}
                  {service.title.includes('Executive') && <Sparkles className="h-5 w-5" />}
                  {service.title.includes('Back-Office') && <CheckCircle2 className="h-5 w-5" />}
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#FF4500]">
                  Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF4500]">FAQ</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">BPO questions answered.</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 open:border-[#FF4500]/30 open:bg-orange-50" open>
                  <summary className="cursor-pointer list-none text-lg font-semibold text-slate-900">{faq.question}</summary>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="rounded-[32px] bg-[#FF4500] p-8 text-white shadow-lg shadow-orange-500/20 md:p-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-100">Start your BPO strategy</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight">Need a better support engine?</h2>
              </div>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#FF4500]">
                Contact for a BPO Consultation
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
