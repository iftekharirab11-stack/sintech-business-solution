import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export type RelatedService = {
  title: string;
  href: string;
};

export function ServiceTemplate({
  title,
  subtitle,
  intro,
  bullets,
  related,
}: {
  title: string;
  subtitle: string;
  intro: string;
  bullets: string[];
  related: RelatedService[];
}) {
  return (
    <>
      <Header />
      <main className="bg-[#F8F9FA] text-slate-900">
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-[32px] bg-[#0B0F17] px-6 py-10 text-white shadow-2xl md:px-10 lg:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF4500]">Sintech Service</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl">{title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">{subtitle}</p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF4500]">Overview</p>
              <p className="mt-5 text-base leading-8 text-slate-700">{intro}</p>

              <div className="mt-8 space-y-4">
                {bullets.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#FF4500]" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] bg-[#FF4500] p-8 text-white shadow-lg shadow-orange-500/20">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-100">What you gain</p>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-orange-50">
                <li>• Faster response cycles and more reliable delivery.</li>
                <li>• Lower operating overhead without losing quality.</li>
                <li>• Better visibility through discipline, tracking, and reporting.</li>
                <li>• Flexible support built around your business momentum.</li>
              </ul>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#FF4500]">
                Talk to an expert
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF4500]">Related services</p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {related.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-colors hover:border-[#FF4500]/30 hover:bg-orange-50">
                  <div className="text-lg font-semibold text-slate-900">{item.title}</div>
                  <div className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#FF4500]">
                    Explore <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
