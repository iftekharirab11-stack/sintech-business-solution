import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#4a2518] text-[#ffe9c1]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f47721] text-sm font-black text-[#fff8e7]">
              S
            </div>
            <div className="text-xl font-black tracking-[0.2em] text-[#fff3d6]">SINTECH</div>
          </div>
          <p className="max-w-sm text-sm leading-7 text-slate-300">
            Bangladesh-based BPO and business solution partner delivering smarter operations, digital growth, and dependable global support.
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-white">Quick Links</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li><Link href="/services/bpo-call-center">BPO Services</Link></li>
            <li><Link href="/services/digital-solutions">Digital Solutions</Link></li>
            <li><Link href="/process">Calling Process</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-white">Contact</h3>
          <ul className="space-y-4 text-sm text-slate-300">
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 h-4 w-4 text-[#FF4500]" />
              <span>House 36, Road 1, Block H, Bot Tola, Sector 02, Dhaka 1215.</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-[#FF4500]" />
              <a href="tel:+8801831740418">+880 183 1740418</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-[#FF4500]" />
              <a href="mailto:saidul.islam.nishan98@gmail.com">saidul.islam.nishan98@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 text-xs text-slate-400 sm:px-6 lg:px-8">
          <span>© 2026 Sintech Business Solutions.</span>
          <span>Built for growth.</span>
        </div>
      </div>
    </footer>
  );
}
