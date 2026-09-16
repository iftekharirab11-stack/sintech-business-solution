import { ServiceTemplate } from '@/components/ServiceTemplate';

export default function TelemarketingPage() {
  return (
    <ServiceTemplate
      title="Outbound Sales & Telemarketing"
      subtitle="Build a structured outbound engine that creates conversations, qualifies opportunities, and drives revenue opportunities with consistency."
      intro="Our outbound sales and telemarketing teams are designed to help businesses generate demand, nurture new leads, and convert interest into action. By blending clear scripts, structured qualification, and performance coaching, we keep your pipeline moving without burning time or budget."
      bullets={[
        'Targeted outbound call campaigns aligned to your ideal buyer profile.',
        'Strong call scripting and objection handling for higher conversion rates.',
        'Lead tracking, callback scheduling, and CRM updates to keep sales teams focused.',
        'Daily reporting and performance reviews with optimization loops.',
      ]}
      related={[
        { title: 'Lead Generation & Qualification', href: '/services/bpo/lead-generation' },
        { title: 'Inbound Customer Support', href: '/services/bpo/customer-support' },
        { title: 'Web Design & Custom Development', href: '/services/digital/web-development' },
      ]}
    />
  );
}
