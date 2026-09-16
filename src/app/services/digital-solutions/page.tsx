import Link from 'next/link';
import { ArrowRight, BarChart3, BrushCleaning, Globe, Palette, Search, Sparkles } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { digitalServices } from '@/data/siteData';

const portfolioFilters = ['Web', 'Design', 'SEO'];

export default function DigitalSolutionsPage() {
  return (
    <>
      <Header />
      <main className="bg-[#0B0F17] text-white">
        <section className="mx-auto max-w-7xl px-4 pb-10 pt-12 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-slate-800 bg-slate-950/80 p-8 shadow-2xl md:p-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF4500]">Digital Solutions</p>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
                Custom Web Development, Brand Design &amp; Data-Driven Growth Marketing
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                From high-converting web applications to SEO and visual branding—we engineer modern digital assets that command attention.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {digitalServices.map((service) => (
              <Link key={service.title} href={service.href} className="group rounded-[28px] border border-slate-800 bg-slate-900/70 p-6 transition-all hover:-translate-y-1 hover:border-[#FF4500]/50 hover:shadow-[0_20px_50px_rgba(255,69,0,0.16)]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF4500]/10 text-[#FF4500]">
                  {service.title.includes('Web') && <Globe className="h-5 w-5" />}
                  {service.title.includes('Graphic') && <Palette className="h-5 w-5" />}
                  {service.title.includes('SEO') && <Search className="h-5 w-5" />}
                  {service.title.includes('Social') && <BarChart3 className="h-5 w-5" />}
                </div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#FF4500]">
                  Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-white py-20 text-slate-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF4500]">Portfolio</p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Selected work across web, design, and SEO.</h2>
              </div>
              <div className="flex gap-2">
                {portfolioFilters.map((filter) => (
                  <button key={filter} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-700">
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {[
                ['Web', 'Luxury Real Estate Platform', 'Responsive UX and conversion-first design for a real estate lead funnel.'],
                ['Design', 'Brand Refresh for SaaS Launch', 'Visual identity, web system, and launch collateral for a product launch.'],
                ['SEO', 'Local Growth Campaign', 'Search engine optimization and content strategy that boosted qualified traffic.'],
              ].map(([tag, title, description]) => (
                <div key={title} className="rounded-[28px] border border-slate-200 bg-slate-50 p-5">
                  <div className="mb-4 inline-flex rounded-full bg-[#FF4500]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#FF4500]">{tag}</div>
                  <div className="mb-3 h-40 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-700 to-[#FF4500]/80" />
                  <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-slate-800 bg-slate-950/80 p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF4500]">Let’s build</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Your next digital growth move starts here.</h2>
              </div>
              <div className="rounded-[24px] border border-slate-700 bg-slate-900 p-5">
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Service Category</label>
                <select defaultValue="Digital Solutions" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white">
                  <option>Digital Solutions</option>
                  <option>Web Development</option>
                  <option>Graphic Design</option>
                  <option>SEO</option>
                </select>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
