import { ServiceTemplate } from '@/components/ServiceTemplate';

export default function CustomerSupportPage() {
  return (
    <ServiceTemplate
      title="Inbound Customer Support"
      subtitle="Deliver responsive, helpful service experiences that keep customers confident, supported, and loyal across every touchpoint."
      intro="Our inbound support teams handle service requests, issue resolution, order support, and customer communication with clarity and care. We work to keep your buyers informed, reduce churn risk, and protect your brand reputation while staying efficient at scale."
      bullets={[
        'Phone, email, chat, and ticket-based support coverage.',
        'Customer-first scripts and service standards for consistent handling.',
        'Escalation workflows for complex issues and high-priority cases.',
        'Real-time service metrics and improvement loops for quality control.',
      ]}
      related={[
        { title: 'Executive Virtual Assistance', href: '/services/bpo/virtual-assistant' },
        { title: 'Back-Office Data & CRM Admin', href: '/services/bpo/back-office' },
        { title: 'Social Media & Digital Ads', href: '/services/digital/social-media-ads' },
      ]}
    />
  );
}
