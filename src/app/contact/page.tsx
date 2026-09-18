'use client';

import { ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import { type FormEvent, useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const BASE_PATH = process.env.NODE_ENV === 'production' ? '/sintech-business-solution' : '';
const WEB3FORMS_ACCESS_KEY = '8c045bb0-8bed-4d0a-9ccf-67d1dea873db';

type Web3FormsResponse = {
  success: boolean;
  message?: string;
};

export default function ContactPage() {
  const [result, setResult] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setResult('Sending your message...');
    setIsSuccess(false);

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = (await response.json()) as Web3FormsResponse;

      if (data.success) {
        setIsSuccess(true);
        setResult('Thank you! We will contact you soon.');
        form.reset();
      } else {
        setIsSuccess(false);
        setResult(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setIsSuccess(false);
      setResult('An error occurred while sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main className='bg-[#F8F9FA] text-slate-900'>
        <section className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
          <div className='grid gap-8 lg:grid-cols-[0.9fr_1.1fr]'>
            <div className='rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm'>
              <p className='text-sm font-semibold uppercase tracking-[0.2em] text-[#FF4500]'>Contact</p>
              <h1 className='mt-3 text-4xl font-extrabold tracking-tight md:text-5xl'>Let&apos;s Build Something Great Together.</h1>
              <div className='mt-8 space-y-5 text-slate-700'>
                <div className='flex items-start gap-3'>
                  <Phone className='mt-1 h-5 w-5 text-[#FF4500]' />
                  <a href='tel:+8801831740418'>+880 183 1740418</a>
                </div>
                <div className='flex items-start gap-3'>
                  <Mail className='mt-1 h-5 w-5 text-[#FF4500]' />
                  <a href='mailto:sintechbusinesssolutions@gmail.com'>sintechbusinesssolutions@gmail.com</a>
                </div>
                <div className='flex items-start gap-3'>
                  <MapPin className='mt-1 h-5 w-5 text-[#FF4500]' />
                  <span>House-36(Lift-5), Road- 01, Block- H, Sector-2, Aftabnagar, Dhaka, Bangladesh, 1212</span>
                </div>
                <div className='flex items-center gap-3'>
                  <ExternalLink className='h-5 w-5 text-[#FF4500]' />
                  <a href='https://www.facebook.com/sintechbusinesssolutions' target='_blank' rel='noreferrer' className='font-semibold text-[#FF4500] hover:underline'>
                    Follow us on Facebook
                  </a>
                </div>
              </div>

              <div className='mt-8 overflow-hidden rounded-[26px] border border-[#b96b32]/25 bg-[#4a2518] p-3 shadow-lg shadow-[#7a4524]/15'>
                <div className='grid items-center gap-5 sm:grid-cols-[128px_1fr]'>
                  <div className='relative aspect-square overflow-hidden rounded-[20px] border border-[#ffd27a]/45'>
                    <Image
                      src={BASE_PATH + '/images/ceo.jpg'}
                      alt='Saidul Islam Nishan, Founder and CEO of Sintech Business Solutions'
                      fill
                      sizes='128px'
                      className='object-cover'
                    />
                  </div>
                  <div className='px-2 py-3'>
                    <p className='text-[11px] font-semibold uppercase tracking-[0.2em] text-[#ffc15a]'>Meet the founder</p>
                    <h2 className='mt-2 text-2xl font-bold text-[#fff3d6]'>SAIDUL ISLAM NISHAN</h2>
                    <p className='mt-1 text-sm font-medium uppercase tracking-[0.16em] text-[#ffd27a]'>Founder &amp; CEO</p>
                    <p className='mt-3 text-sm leading-6 text-[#ffe9c1]'>Building practical BPO and digital solutions that help ambitious teams grow with confidence.</p>
                  </div>
                </div>
              </div>

              <div className='relative my-4 flex h-32 w-full items-center justify-center'>
                <Image
                  src={BASE_PATH + '/images/logo.png?v=47e721f'}
                  alt='Sintech Business Solutions logo'
                  fill
                  sizes='(max-width: 1024px) 100vw, 50vw'
                  className='object-contain p-6'
                />
              </div>
            </div>

            <div className='rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm'>
              <form onSubmit={onSubmit} className='space-y-4 text-left'>
                <div>
                  <label className='mb-1 block text-sm font-semibold text-gray-700'>
                    Your Name
                  </label>
                  <input
                    type='text'
                    name='name'
                    placeholder='e.g. John Doe'
                    required
                    className='w-full rounded-xl border border-gray-300 bg-white p-3.5 text-gray-800 placeholder-gray-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition'
                  />
                </div>

                <div>
                  <label className='mb-1 block text-sm font-semibold text-gray-700'>
                    Email Address
                  </label>
                  <input
                    type='email'
                    name='email'
                    placeholder='john@example.com'
                    required
                    className='w-full rounded-xl border border-gray-300 bg-white p-3.5 text-gray-800 placeholder-gray-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition'
                  />
                </div>

                <div>
                  <label className='mb-1 block text-sm font-semibold text-gray-700'>
                    Estimated Budget
                  </label>
                  <select
                    name='budget'
                    defaultValue='Less than $1k'
                    className='w-full cursor-pointer rounded-xl border border-gray-300 bg-white p-3.5 text-gray-800 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition'
                  >
                    <option value='Less than $1k'>Less than $1k</option>
                    <option value='$1k - $5k'>$1k - $5k</option>
                    <option value='$5k - $10k'>$5k - $10k</option>
                    <option value='$10k+'>$10k+</option>
                  </select>
                </div>

                <div>
                  <label className='mb-1 block text-sm font-semibold text-gray-700'>
                    Project Details
                  </label>
                  <textarea
                    name='message'
                    rows={4}
                    placeholder='Tell us about your project, challenge, or goals.'
                    required
                    className='w-full rounded-xl border border-gray-300 bg-white p-3.5 text-gray-800 placeholder-gray-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition'
                  />
                </div>

                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full cursor-pointer rounded-xl bg-[#FF6B00] py-4 text-center font-bold text-white shadow-md transition duration-200 hover:bg-[#e05e00] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60'
                >
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE & BOOK CONSULTATION →'}
                </button>

                {result && (
                  <div
                    role={isSuccess ? 'status' : 'alert'}
                    aria-live='polite'
                    className={'mt-4 rounded-xl border p-4 text-center text-sm font-semibold ' + (isSuccess ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800')}
                  >
                    {result}
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
