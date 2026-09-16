import { ServiceTemplate } from '@/components/ServiceTemplate';

export default function SEOMarketingPage() {
  return (
    <ServiceTemplate
      title="SEO & Content Marketing"
      subtitle="Improve search visibility and attract higher-quality traffic with a smarter content and optimization strategy."
      intro="Our SEO and content approach connects keyword strategy, site health, technical audits, and content creation to stronger search performance. We focus on sustainable growth so your business gets attention from people who are already looking for what you offer."
      bullets={[
        'On-page SEO, technical audits, and content strategy planning.',
        'Keyword research aligned to purchase intent and market demand.',
        'Local SEO optimization to strengthen visibility in target locations.',
        'Content systems designed to fuel organic and conversion growth.',
      ]}
      related={[
        { title: 'Social Media & Digital Ads', href: '/services/digital/social-media-ads' },
        { title: 'Web Design & Custom Development', href: '/services/digital/web-development' },
        { title: 'Back-Office Data & CRM Admin', href: '/services/bpo/back-office' },
      ]}
    />
  );
}
