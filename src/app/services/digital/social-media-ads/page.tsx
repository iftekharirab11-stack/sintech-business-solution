import { ServiceTemplate } from '@/components/ServiceTemplate';

export default function SocialMediaAdsPage() {
  return (
    <ServiceTemplate
      title="Social Media & Digital Ads"
      subtitle="Turn paid media into a more predictable growth channel with strategy, audience targeting, and strong creative support."
      intro="We build digital ad systems around clear goals, measurable KPIs, and practical campaign management. From creative planning to optimization and reporting, our team helps businesses reach the right audience with more efficient ad spend and stronger results."
      bullets={[
        'Meta and Google ads campaign planning and management.',
        'Creative testing, audience targeting, and funnel alignment.',
        'Content calendars and campaign reporting for accountability.',
        'Optimization for cost efficiency and stronger conversion quality.',
      ]}
      related={[
        { title: 'SEO & Content Marketing', href: '/services/digital/seo-marketing' },
        { title: 'Graphic Design & Brand Identity', href: '/services/digital/graphic-design' },
        { title: 'Inbound Customer Support', href: '/services/bpo/customer-support' },
      ]}
    />
  );
}
