import { ServiceTemplate } from '@/components/ServiceTemplate';

export default function GraphicDesignPage() {
  return (
    <ServiceTemplate
      title="Graphic Design & Brand Identity"
      subtitle="Build a brand that looks premium, communicates clearly, and helps customers trust your business faster."
      intro="We create visual systems, identity assets, and marketing designs that help brands stand out in competitive markets. From logos and social kits to brand guidelines and landing page visuals, our design services align aesthetics with business goals."
      bullets={[
        'Logo design, brand identity, and visual direction.',
        'Social media kits and campaign creative for digital channels.',
        'Marketing collateral and presentation design for business growth.',
        'Brand consistency across channels and customer touchpoints.',
      ]}
      related={[
        { title: 'Web Design & Custom Development', href: '/services/digital/web-development' },
        { title: 'Social Media & Digital Ads', href: '/services/digital/social-media-ads' },
        { title: 'Lead Generation & Qualification', href: '/services/bpo/lead-generation' },
      ]}
    />
  );
}
