import { ServiceTemplate } from '@/components/ServiceTemplate';

export default function AppointmentSettingPage() {
  return (
    <ServiceTemplate
      title="Appointment Setting"
      subtitle="Turn interest into booked conversations by qualifying leads and scheduling meetings with the right team members."
      intro="We handle outreach, follow-up, and calendar coordination so your sales team can stay focused on closing. This helps reduce missed opportunities, improve workflow discipline, and give your business a cleaner conversion path from inquiry to meeting."
      bullets={[
        'Qualification-first outreach for sales-ready conversations.',
        'Calendar coordination and reminder management for smooth scheduling.',
        'Clear follow-up sequences to re-engage warm leads and prospects.',
        'Detailed scheduling reports and lead quality visibility.',
      ]}
      related={[
        { title: 'Lead Generation & Qualification', href: '/services/bpo/lead-generation' },
        { title: 'Inbound Customer Support', href: '/services/bpo/customer-support' },
        { title: 'Graphic Design & Brand Identity', href: '/services/digital/graphic-design' },
      ]}
    />
  );
}
