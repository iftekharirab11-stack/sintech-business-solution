import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Menu, PhoneCall } from 'lucide-react';
import { navItems } from '@/data/siteData';

const BASE_PATH = process.env.NODE_ENV === 'production' ? '/sintech-business-solution' : '';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#b96b32]/20 bg-[#fff8e7]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-24 overflow-hidden rounded-xl border border-[#ffb52e]/70 bg-[#4a2518] shadow-lg shadow-orange-500/20">
            <Image src={`${BASE_PATH}/images/logo.png`} alt="Sintech logo" fill sizes="96px" className="object-contain" />
          </div>
          <div className="text-xl font-black tracking-[0.2em] text-[#4a2518]">
            SINTECH
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                href={item.href}
                className="flex items-center gap-1 text-sm font-medium text-slate-700 transition-colors hover:text-[#FF4500]"
              >
                {item.label}
                {item.children && <span className="text-xs text-slate-500">▾</span>}
              </Link>

              {item.children && (
                <div className="invisible absolute left-0 top-full mt-3 w-[680px] rounded-2xl border border-[#b96b32]/20 bg-[#fff8e7] p-4 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#FF4500]">BPO Services</p>
                      <div className="space-y-2">
                        {item.children.slice(0, 6).map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block rounded-xl border border-slate-100 p-3 transition-colors hover:border-[#FF4500]/40 hover:bg-orange-50"
                          >
                            <div className="text-sm font-semibold text-slate-900">{child.label}</div>
                            <div className="mt-1 text-xs text-slate-600">{child.description}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#FF4500]">Digital Services</p>
                      <div className="space-y-2">
                        {item.children.slice(6).map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block rounded-xl border border-slate-100 p-3 transition-colors hover:border-[#FF4500]/40 hover:bg-orange-50"
                          >
                            <div className="text-sm font-semibold text-slate-900">{child.label}</div>
                            <div className="mt-1 text-xs text-slate-600">{child.description}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="tel:+8801831740418" className="flex items-center gap-2 text-sm font-medium text-slate-700">
            <PhoneCall className="h-4 w-4 text-[#FF4500]" />
            +880 183 1740418
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#FF4500] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-lg shadow-orange-500/20 transition-transform hover:-translate-y-0.5"
          >
            Get a Free Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#b96b32]/20 bg-[#fff8e7] text-[#75452c] lg:hidden">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
