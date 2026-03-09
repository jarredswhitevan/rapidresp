const steps = [
  'AI answers calls or texts missed callers instantly.',
  'Collects job details, property info, and urgency level.',
  'Qualifies emergency leads based on your rules.',
  'Alerts your owner or dispatcher immediately.',
  'Helps your team convert the lead faster.',
];

export function Solution() {
  return (
    <section id="solution" className="py-16">
      <div className="section-shell">
        <h2 className="text-3xl font-bold">Your 24/7 AI Front Desk for Restoration Leads</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <div key={step} className="card">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">Step {index + 1}</p>
              <p className="mt-3 text-sm text-muted">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
