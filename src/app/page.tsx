'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { ArrowRight, BarChart3, BriefcaseBusiness, CheckCircle2, ChevronRight, Globe2, Headphones, Menu, MessageCircle, MonitorSmartphone, Palette, Phone, Search, ShieldCheck, Sparkles, Users, X } from 'lucide-react';

const industries = ['Real Estate & E-Commerce', 'Tech & SaaS', 'Healthcare & Education', 'Financial Services', 'SMBs & Startups', 'Retail & Hospitality'];
const services = ['Call Center & BPO', 'Virtual Assistant', 'Back-Office Support', 'Web Development', 'Graphic Design', 'SEO & Marketing'];
const process = [
  ['01', 'Understand', 'Analyze business needs and goals.'],
  ['02', 'Plan', 'Craft a structured action plan.'],
  ['03', 'Execute', 'Deliver with a dedicated team.'],
  ['04', 'Monitor', 'Track real-time KPIs and performance.'],
  ['05', 'Optimize', 'Continuously improve every workflow.'],
];

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="#top" className="flex items-center gap-3">
      <div className="relative h-11 w-11 overflow-hidden rounded-xl border border-[#ffb52e]/70 bg-[#4a2518]">
        <Image src="/images/logo.png" alt="Sintech logo" fill sizes="44px" className="object-cover" />
      </div>
      <div>
        <div className="text-base font-black tracking-[0.16em] text-[#4a2518]">SINTECH</div>
        {!compact && <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.19em] text-[#f47721]">Business Solutions</div>}
      </div>
    </Link>
  );
}

export default function HomePage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [mobileOpen, setMobileOpen] = useState(false);

  function toggleService(service: string) {
    setSelectedServices((current) => current.includes(service) ? current.filter((item) => item !== service) : [...current, service]);
  }

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.alert('Thank you! Your quote request has been sent to sintechbusinesssolutions@gmail.com');
    event.currentTarget.reset();
    setSelectedServices([]);
  }

  return (
    <main id="top" className="min-h-screen overflow-hidden bg-[#f8f9fa] text-[#0b0f17]">
      <header className="sticky top-0 z-50 border-b border-[#0b0f17]/10 bg-[#f8f9fa]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <BrandMark />
          <nav className="hidden items-center gap-7 lg:flex">
            {['Services', 'Process', 'Leadership', 'Industries', 'Contact'].map((label) => <Link key={label} href={`#${label.toLowerCase()}`} className="text-sm font-semibold text-[#4a2518] hover:text-[#ff4500]">{label}</Link>)}
          </nav>
          <Link href="#contact" className="hidden items-center gap-2 rounded-full bg-[#ff4500] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white sm:inline-flex">Get a Free Quote <ArrowRight className="h-4 w-4" /></Link>
          <button type="button" onClick={() => setMobileOpen((open) => !open)} aria-label="Toggle navigation" className="rounded-xl border border-[#0b0f17]/15 bg-white p-2.5 text-[#4a2518] lg:hidden">{mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
        </div>
        {mobileOpen && <nav className="border-t border-[#0b0f17]/10 bg-[#f8f9fa] px-4 py-3 lg:hidden">{['Services', 'Process', 'Leadership', 'Industries', 'Contact'].map((label) => <Link key={label} href={`#${label.toLowerCase()}`} onClick={() => setMobileOpen(false)} className="block border-b border-[#0b0f17]/10 py-3 text-sm font-semibold">{label}</Link>)}</nav>}
      </header>

      <section className="mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 lg:px-8 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#ff4500]/25 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#ff4500]"><Sparkles className="h-3.5 w-3.5" /> SMART OUTSOURCING • BETTER PERFORMANCE • SUSTAINABLE GROWTH</div>
            <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight md:text-6xl">Scale Your Operations &amp; Digital Footprint with Elite Offshore Talent.</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#4a2518]/75 md:text-lg">Bangladesh-based BPO and business solutions firm providing 24/7 call center support, virtual assistants, back-office operations, and digital services at up to 70% lower overhead.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Link href="#contact" className="inline-flex items-center gap-2 rounded-full bg-[#ff4500] px-6 py-3.5 text-sm font-bold text-white">Book Strategy Call <ArrowRight className="h-4 w-4" /></Link><Link href="#services" className="inline-flex items-center gap-2 rounded-full border border-[#4a2518]/25 bg-white px-6 py-3.5 text-sm font-bold text-[#4a2518]">Explore Services</Link></div>
            <div className="mt-10 grid grid-cols-3 gap-3 border-t border-[#0b0f17]/10 pt-6">{[['70%', 'Lower overhead'], ['24/7', 'Global coverage'], ['98%', 'Client retention']].map(([value, label]) => <div key={label}><div className="text-2xl font-black text-[#ff4500]">{value}</div><div className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#4a2518]/60">{label}</div></div>)}</div>
          </div>
          <div className="relative rounded-[34px] border border-white/70 bg-white/35 p-3 shadow-2xl"><div className="relative aspect-[4/5] overflow-hidden rounded-[26px] bg-[#4a2518]"><Image src="/images/call-center.jpg" alt="Sintech offshore support team" fill priority sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" /><div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/25 bg-[#0b0f17]/80 p-4 text-white backdrop-blur-md"><div className="flex items-center justify-between text-xs font-semibold uppercase tracking-widest"><span>Operations dashboard</span><span className="text-[#ffb52e]">● Live</span></div><div className="mt-3 flex items-end justify-between"><div><div className="text-3xl font-black">+180%</div><div className="text-xs text-white/60">Team productivity</div></div><BarChart3 className="h-7 w-7 text-[#ff4500]" /></div></div></div></div>
        </div>
      </section>

      <section id="industries" className="overflow-hidden bg-[#0b0f17] py-5 text-white"><div className="flex min-w-max animate-[scroll_24s_linear_infinite] gap-8 px-4 text-xs font-bold uppercase tracking-[0.18em] text-[#ffe0a5]">{[...industries, ...industries].map((industry, index) => <div key={`${industry}-${index}`} className="inline-flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-[#ff4500]" />{industry}</div>)}</div></section>

      <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"><div className="mb-10 max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#ff4500]">What we do</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Two growth pillars. One accountable partner.</h2></div><div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[30px] border border-[#0b0f17]/10 bg-white p-7 shadow-xl"><div className="flex items-start justify-between"><div><div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff4500]/10 text-[#ff4500]"><Headphones className="h-6 w-6" /></div><h3 className="text-2xl font-black">BPO &amp; Operations</h3><p className="mt-3 max-w-md text-sm leading-7 text-[#4a2518]/70">Make daily work lighter with reliable people and clear processes.</p></div><span className="rounded-full bg-[#fff0dc] px-3 py-1 text-xs font-bold text-[#ff4500]">01</span></div><div className="mt-7 grid gap-3 sm:grid-cols-2">{[['Call Center', Phone], ['Virtual Assistant', Users], ['Back-Office Operations', BriefcaseBusiness], ['Lead Generation', MessageCircle]].map(([label, Icon]) => { const ServiceIcon = Icon as typeof Phone; return <Link key={label as string} href="#contact" className="group flex items-center justify-between rounded-2xl border border-[#0b0f17]/10 bg-[#f8f9fa] p-4 hover:border-[#ff4500]/50"><span className="flex items-center gap-3 text-sm font-bold"><ServiceIcon className="h-4 w-4 text-[#ff4500]" />{label as string}</span><ChevronRight className="h-4 w-4 text-[#4a2518]/40" /></Link>; })}</div></div>
        <div className="rounded-[30px] border border-[#0b0f17]/10 bg-[#0b0f17] p-7 text-white shadow-xl"><div className="flex items-start justify-between"><div><div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff4500]/15 text-[#ff4500]"><Globe2 className="h-6 w-6" /></div><h3 className="text-2xl font-black">Digital Solutions</h3><p className="mt-3 max-w-md text-sm leading-7 text-white/65">Digital assets that look sharp, work fast, and support measurable growth.</p></div><span className="rounded-full bg-[#ff4500]/15 px-3 py-1 text-xs font-bold text-[#ffb52e]">02</span></div><div className="relative mt-7 h-32 overflow-hidden rounded-2xl"><Image src="/images/crm-digital.png" alt="Digital CRM dashboard" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover opacity-70" /><div className="absolute inset-0 bg-[#0b0f17]/30" /><div className="absolute bottom-4 left-4 text-xs font-bold uppercase tracking-widest text-[#ffe0a5]">Digital command center</div></div><div className="mt-4 grid gap-3 sm:grid-cols-3">{[['Web Development', MonitorSmartphone], ['Graphic Design', Palette], ['SEO & Marketing', Search]].map(([label, Icon]) => { const ServiceIcon = Icon as typeof Search; return <Link key={label as string} href="#contact" className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-[#ff4500]/60"><ServiceIcon className="h-4 w-4 text-[#ff4500]" /><div className="mt-3 text-sm font-bold">{label as string}</div><ArrowRight className="mt-4 h-4 w-4 text-[#ffb52e]" /></Link>; })}</div></div>
      </div></section>

      <section id="leadership" className="bg-[#fff0dc] py-20"><div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"><div className="rounded-[30px] border border-[#4a2518]/10 bg-white p-6 shadow-xl"><div className="relative aspect-[4/3] overflow-hidden rounded-[22px] bg-[#4a2518]"><Image src="/images/ceo.jpg" alt="Saidul Islam, Founder and CEO" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /></div><div className="px-2 pb-2 pt-6"><p className="text-xs font-bold uppercase tracking-widest text-[#ff4500]">Leadership</p><h2 className="mt-2 text-3xl font-black">Saidul Islam</h2><p className="mt-1 text-sm font-bold uppercase tracking-widest text-[#4a2518]/60">Founder &amp; CEO</p><blockquote className="mt-5 border-l-2 border-[#ff4500] pl-4 text-base font-medium leading-7 text-[#4a2518]/75">“We build sustainable business growth by becoming the dependable extension every ambitious team deserves.”</blockquote></div></div><div className="rounded-[30px] border border-[#4a2518]/10 bg-[#4a2518] p-6 text-white shadow-xl"><div className="relative aspect-[4/3] overflow-hidden rounded-[22px]"><Image src="/images/workspace.jpg" alt="Sintech operations workspace" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover opacity-80" /></div><div className="px-2 pb-2 pt-6"><p className="text-xs font-bold uppercase tracking-widest text-[#ffb52e]">Built for continuity</p><h2 className="mt-2 text-3xl font-black">An infrastructure that keeps moving.</h2><p className="mt-4 text-sm leading-7 text-white/70">Our Dhaka operations hub brings people, technology, and process discipline together for dependable 24/7 delivery across time zones.</p><div className="mt-6 flex items-center gap-3 text-sm font-bold text-[#ffe0a5]"><ShieldCheck className="h-5 w-5 text-[#ff4500]" /> Secure, monitored, and ready to scale</div></div></div></div></section>

      <section id="process" className="bg-[#0b0f17] py-20 text-white"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-widest text-[#ff4500]">Our process</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Clarity first. Momentum always.</h2></div><div className="mt-12 grid gap-4 md:grid-cols-5">{process.map(([number, title, text], index) => <div key={number} className="rounded-3xl border border-white/10 bg-white/5 p-5"><div className="flex items-center justify-between"><span className="text-xs font-black tracking-widest text-[#ff4500]">{number}</span>{index < 4 && <ArrowRight className="hidden h-4 w-4 text-white/30 md:block" />}</div><h3 className="mt-8 text-xl font-black">{title}</h3><p className="mt-3 text-sm leading-6 text-white/55">{text}</p></div>)}</div></div></section>

      <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"><div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="text-xs font-bold uppercase tracking-widest text-[#ff4500]">Start a conversation</p><h2 className="mt-3 text-4xl font-black md:text-5xl">Let&apos;s build your next growth engine.</h2><p className="mt-5 max-w-md text-base leading-8 text-[#4a2518]/70">Tell us where your operations are stretched. We&apos;ll help you find the right people, process, and digital system to move forward.</p><div className="mt-8 space-y-5 text-sm font-semibold text-[#4a2518]"><a href="mailto:sintechbusinesssolutions@gmail.com" className="flex items-center gap-3"><MessageCircle className="h-5 w-5 text-[#ff4500]" />sintechbusinesssolutions@gmail.com</a><a href="tel:+8801831740418" className="flex items-center gap-3"><Phone className="h-5 w-5 text-[#ff4500]" />+880 183 1740418</a><div className="flex items-start gap-3"><Globe2 className="mt-1 h-5 w-5 text-[#ff4500]" /><span>House-36 (Lift-5), Road-01, Block-H, Sector-2, Aftabnagar, Dhaka, Bangladesh, 1211</span></div><a href="https://www.facebook.com/sintechbusinesssolutions" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-[#ff4500]"><Globe2 className="h-5 w-5" />Follow Sintech on Facebook</a></div></div><form onSubmit={submitForm} className="rounded-[30px] border border-[#0b0f17]/10 bg-white p-6 shadow-2xl md:p-8"><div className="grid gap-5 md:grid-cols-2"><label className="text-sm font-bold text-[#4a2518]">Full Name<input required name="name" type="text" placeholder="Your name" className="mt-2 w-full rounded-xl border border-[#4a2518]/15 bg-[#f8f9fa] px-4 py-3 font-normal outline-none focus:border-[#ff4500]" /></label><label className="text-sm font-bold text-[#4a2518]">Business Email<input required name="email" type="email" placeholder="you@company.com" className="mt-2 w-full rounded-xl border border-[#4a2518]/15 bg-[#f8f9fa] px-4 py-3 font-normal outline-none focus:border-[#ff4500]" /></label></div><label className="mt-5 block text-sm font-bold text-[#4a2518]">Phone Number<input name="phone" type="tel" placeholder="+880..." className="mt-2 w-full rounded-xl border border-[#4a2518]/15 bg-[#f8f9fa] px-4 py-3 font-normal outline-none focus:border-[#ff4500]" /></label><fieldset className="mt-5"><legend className="text-sm font-bold text-[#4a2518]">Selected Services</legend><div className="mt-3 flex flex-wrap gap-2">{services.map((service) => <button type="button" key={service} onClick={() => toggleService(service)} className={`rounded-full border px-3 py-2 text-xs font-bold ${selectedServices.includes(service) ? 'border-[#ff4500] bg-[#ff4500] text-white' : 'border-[#4a2518]/15 bg-[#f8f9fa] text-[#4a2518]'}`}>{selectedServices.includes(service) && <CheckCircle2 className="mr-1 inline h-3.5 w-3.5" />}{service}</button>)}</div></fieldset><label className="mt-5 block text-sm font-bold text-[#4a2518]">Message<textarea required name="message" rows={5} placeholder="Tell us about your goals..." className="mt-2 w-full resize-none rounded-xl border border-[#4a2518]/15 bg-[#f8f9fa] px-4 py-3 font-normal outline-none focus:border-[#ff4500]" /></label><button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ff4500] px-6 py-4 text-sm font-black uppercase tracking-wide text-white">Send My Quote Request <ArrowRight className="h-4 w-4" /></button></form></div></section>

      <footer className="bg-[#0b0f17] py-8 text-white"><div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8"><BrandMark compact /><p className="text-xs text-white/45">© 2026 Sintech Business Solutions. Built for smarter growth.</p><a href="https://www.facebook.com/sintechbusinesssolutions" target="_blank" rel="noreferrer" aria-label="Sintech Facebook" className="text-[#ffb52e]"><Globe2 className="h-5 w-5" /></a></div></footer>
    </main>
  );
}
