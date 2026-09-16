import { ServiceTemplate } from '@/components/ServiceTemplate';

export default function WebDevelopmentPage() {
  return (
    <ServiceTemplate
      title="Web Design & Custom Development"
      subtitle="Launch responsive, high-converting web experiences built for performance, clarity, and business growth."
      intro="We design and develop modern digital experiences for businesses that need stronger online presence, clearer brand positioning, and better conversion journeys. Whether you need a marketing site, web app, or e-commerce presence, we create digital experiences that turn traffic into business value."
      bullets={[
        'Next.js, WordPress, and Shopify implementation options.',
        'Responsive design with mobile-first UX and conversion-focused layouts.',
        'Performance optimization for speed, usability, and SEO.',
        'Custom functionality and clean design systems tailored to your goals.',
      ]}
      related={[
        { title: 'Graphic Design & Brand Identity', href: '/services/digital/graphic-design' },
        { title: 'SEO & Content Marketing', href: '/services/digital/seo-marketing' },
        { title: 'Outbound Sales & Telemarketing', href: '/services/bpo/telemarketing' },
      ]}
    />
  );
}
