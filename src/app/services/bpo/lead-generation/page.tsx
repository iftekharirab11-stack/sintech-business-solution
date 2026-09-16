import { ServiceTemplate } from '@/components/ServiceTemplate';

export default function LeadGenerationPage() {
  return (
    <ServiceTemplate
      title="Lead Generation & Qualification"
      subtitle="Create a reliable pipeline using research-driven outreach, qualification frameworks, and strong handoff systems for sales teams."
      intro="We help businesses reach more of the right people by combining targeted research, outreach, qualification, and CRM documentation. This gives your sales team better opportunities, less admin overhead, and a cleaner path from first contact to conversion."
      bullets={[
        'B2B and B2C lead sourcing with clear qualification criteria.',
        'Research-backed outreach using buyer signals and intent indicators.',
        'Lead segmentation and CRM hygiene for sales team efficiency.',
        'Escalation support and appointment-ready follow-ups.',
      ]}
      related={[
        { title: 'Outbound Sales & Telemarketing', href: '/services/bpo/telemarketing' },
        { title: 'Appointment Setting', href: '/services/bpo/appointment-setting' },
        { title: 'SEO & Content Marketing', href: '/services/digital/seo-marketing' },
      ]}
    />
  );
}
