import { ArrowRight, Building2, Eye, ShieldCheck, Target } from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-[#F8F9FA] text-slate-900">
        <section className="mx-auto max-w-7xl px-4 pb-10 pt-12 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FF4500]">About us</p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">We Don&apos;t Just Work For You—We Work With You.</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Sintech Business Solutions is a Bangladesh-based BPO and business solutions firm dedicated to empowering global enterprises through smart outsourcing.
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
                To deliver smart, reliable, and cost-effective BPO and business solutions that empower clients to grow, scale, and succeed by becoming a trusted extension of their team.
              </p>
            </div>
            <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF4500]/10 text-[#FF4500]">
                <Eye className="h-5 w-5" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF4500]">Vision</p>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                To be a globally recognized BPO and business partner known for performance, integrity, and innovation.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF4500]">Our values</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Operating with clarity, accountability, and growth.</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                ['Client-Centric Operations', 'We align our work to real business outcomes and customer experience goals.'],
                ['Performance-Driven Delivery', 'We execute with consistency, quality, and measurable efficiency.'],
                ['Transparent KPI Monitoring & Continuous Optimization', 'We stay accountable with clear metrics and constant improvement cycles.'],
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
                  <span>House 36, Road 1, Block H, Bot Tola, Sector 02, Dhaka 1215.</span>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 h-5 w-5 text-[#FF4500]" />
                  <span>Modern workspace infrastructure designed for remote operations, quality control, and reliable client support.</span>
                </div>
              </div>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#FF4500] px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white">
                Plan a consultation
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
