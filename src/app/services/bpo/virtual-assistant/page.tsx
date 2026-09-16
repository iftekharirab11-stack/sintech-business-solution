import { ServiceTemplate } from '@/components/ServiceTemplate';

export default function VirtualAssistantPage() {
  return (
    <ServiceTemplate
      title="Executive Virtual Assistance"
      subtitle="Give leaders and teams a trusted operational partner who handles the details that slow growth down."
      intro="From inbox and calendar management to research, documentation, and executive admin, our virtual assistant support helps businesses stay organized and responsive. We adapt to your workflow so your team can focus on priorities instead of repetitive admin work."
      bullets={[
        'Calendar, inbox, scheduling, and admin support for leaders and teams.',
        'Research, documentation, and meeting preparation support.',
        'Reliable task management for operational workflows and follow-ups.',
        'Flexible support for fast-moving founders, executives, and service teams.',
      ]}
      related={[
        { title: 'Back-Office Data & CRM Admin', href: '/services/bpo/back-office' },
        { title: 'Inbound Customer Support', href: '/services/bpo/customer-support' },
        { title: 'Web Design & Custom Development', href: '/services/digital/web-development' },
      ]}
    />
  );
}
