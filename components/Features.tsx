const features = [
  {
    title: 'AI Call Answering',
    copy: 'Answer inbound calls immediately with a professional intake flow tailored for restoration emergencies.',
  },
  {
    title: 'Missed Call Text Back',
    copy: 'Automatically text callers when your team is unavailable so leads stay engaged instead of moving on.',
  },
  {
    title: 'Emergency Lead Qualification',
    copy: 'Prioritize urgent, high-fit calls and reduce noise before dispatchers spend time on follow-up.',
  },
  {
    title: 'Insurance Information Capture',
    copy: 'Collect carrier, claim context, and contact details early to accelerate your intake process.',
  },
  {
    title: 'Instant Dispatch Alerts',
    copy: 'Trigger immediate notifications to owners and dispatch teams with complete lead summaries.',
  },
  {
    title: 'CRM / Workflow-Friendly Handoff',
    copy: 'Pass structured lead details into your existing tools so your process stays fast and organized.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-16">
      <div className="section-shell">
        <h2 className="text-3xl font-bold">What We Offer</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="card transition hover:-translate-y-1 hover:border-accent/40">
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-3 text-sm text-muted">{feature.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
