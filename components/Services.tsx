const services = [
  ['Water Damage', 'Identify active leaks and water intrusion calls and route them for immediate response.'],
  ['Fire Damage', 'Capture smoke, fire, and structural damage details quickly for rapid next-step coordination.'],
  ['Mold Remediation', 'Classify mold-related concerns and gather occupancy and safety details before dispatch.'],
  ['Flood / Sewage Cleanup', 'Prioritize sanitation-critical events and route calls with urgency and context.'],
];

export function Services() {
  return (
    <section id="services" className="py-16">
      <div className="section-shell">
        <h2 className="text-3xl font-bold">Built for Every Restoration Emergency</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {services.map(([title, desc]) => (
            <article key={title} className="card">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-muted">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
