import { ServiceTemplate } from '@/components/ServiceTemplate';

export default function BackOfficePage() {
  return (
    <ServiceTemplate
      title="Back-Office Data & CRM Admin"
      subtitle="Keep your internal systems organized, updated, and ready for better operational decisions and faster execution."
      intro="Our back-office support helps businesses maintain accurate records, manage CRM workflows, organize documents, and support recurring operational tasks. This reduces admin bottlenecks, improves accountability, and keeps teams aligned without adding permanent overhead."
      bullets={[
        'CRM updates and pipeline data management to keep records current.',
        'Data entry, document handling, report formatting, and task tracking.',
        'Operational support for administrative workflows and team coordination.',
        'Cleaner systems, better visibility, and reduced internal friction.',
      ]}
      related={[
        { title: 'Executive Virtual Assistance', href: '/services/bpo/virtual-assistant' },
        { title: 'Inbound Customer Support', href: '/services/bpo/customer-support' },
        { title: 'SEO & Content Marketing', href: '/services/digital/seo-marketing' },
      ]}
    />
  );
}
