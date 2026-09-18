'use client';

import { ArrowRight, ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const BASE_PATH = process.env.NODE_ENV === 'production' ? '/sintech-business-solution' : '';

export default function ContactPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (service: string) => {
    setSelectedServices((current) => current.includes(service)
      ? current.filter((item) => item !== service)
      : [...current, service]);
  };

  return (
    <>
      <Header />
      <main className="bg-[#F8F9FA] text-slate-900">
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF4500]">Contact</p>
              <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">Let&apos;s Build Something Great Together.</h1>
              <div className="mt-8 space-y-5 text-slate-700">
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 text-[#FF4500]" />
                  <a href="tel:+8801831740418">+880 183 1740418</a>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 text-[#FF4500]" />
                  <a href="mailto:sintechbusinesssolutions@gmail.com">sintechbusinesssolutions@gmail.com</a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-[#FF4500]" />
                  <span>House-36 (Lift-5), Road-01, Block-H, Sector-2, Aftabnagar, Dhaka, Bangladesh, 1211.</span>
                </div>
                <div className="flex items-center gap-3">
                  <ExternalLink className="h-5 w-5 text-[#FF4500]" />
                  <a href="https://www.facebook.com/sintechbusinesssolutions" target="_blank" rel="noreferrer" className="font-semibold text-[#FF4500] hover:underline">
                    Follow us on Facebook
                  </a>
                </div>
              </div>

              <div className="mt-8 overflow-hidden rounded-[26px] border border-[#b96b32]/25 bg-[#4a2518] p-3 shadow-lg shadow-[#7a4524]/15">
                <div className="grid items-center gap-5 sm:grid-cols-[128px_1fr]">
                  <div className="relative aspect-square overflow-hidden rounded-[20px] border border-[#ffd27a]/45">
                    <Image
                      src={`${BASE_PATH}/images/ceo.jpg`}
                      alt="Saidul Islam, Founder and CEO of Sintech Business Solutions"
                      fill
                      sizes="128px"
                      className="object-cover"
                    />
                  </div>
                  <div className="px-2 py-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#ffc15a]">Meet the founder</p>
                    <h2 className="mt-2 text-2xl font-bold text-[#fff3d6]">SAIDUL ISLAM</h2>
                    <p className="mt-1 text-sm font-medium uppercase tracking-[0.16em] text-[#ffd27a]">Founder &amp; CEO</p>
                    <p className="mt-3 text-sm leading-6 text-[#ffe9c1]">Building practical BPO and digital solutions that help ambitious teams grow with confidence.</p>
                  </div>
                </div>
              </div>

              <div className="relative mt-8 h-64 overflow-hidden rounded-2xl bg-[#0B0F17] p-8">
                <Image
                  src={`${BASE_PATH}/images/logo.png?v=47e721f`}
                  alt="Sintech Business Solutions logo"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-6"
                />
              </div>
            </div>

            <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm">
              <form className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Full Name</label>
                    <input type="text" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none ring-0 focus:border-[#FF4500]" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Work Email</label>
                    <input type="email" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none ring-0 focus:border-[#FF4500]" placeholder="you@company.com" />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Company Name / Website</label>
                  <input type="text" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none ring-0 focus:border-[#FF4500]" placeholder="Company or website" />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Service Category</label>
                  <div className="flex flex-wrap gap-2">
                    {['Call Center', 'Virtual Assistant', 'Web Dev', 'Graphic Design', 'SEO'].map((item) => (
                      <button
                        key={item}
                        type="button"
                        aria-pressed={selectedServices.includes(item)}
                        onClick={() => toggleService(item)}
                        className={`rounded-full border px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-colors ${selectedServices.includes(item) ? 'border-[#FF4500] bg-[#FF4500] text-white' : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-[#FF4500] hover:text-[#FF4500]'}`}
                      >
                        {selectedServices.includes(item) ? 'Selected: ' : ''}{item}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Estimated Budget</label>
                  <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-[#FF4500]">
                    <option>Less than $1k</option>
                    <option>$1k-$5k</option>
                    <option>$5k+</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Project Details</label>
                  <textarea rows={5} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-[#FF4500]" placeholder="Tell us about your project, challenge, or goals." />
                </div>

                <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#FF4500] px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-lg shadow-orange-500/20">
                  Send Message &amp; Book Consultation
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
