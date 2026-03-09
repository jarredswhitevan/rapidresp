const faqs = [
  ['How does the AI answer calls?', 'It uses your approved intake script to greet callers, gather details, and route urgent leads immediately.'],
  ['What happens if we miss a call after hours?', 'The system can automatically send a text, capture details, and notify your team so no lead is ignored overnight.'],
  ['Can it collect insurance and job details?', 'Yes. Intake can include property details, insurance information, and service-specific questions for cleaner handoff.'],
  ['Does it work for water, fire, and mold leads?', 'Yes, workflows are designed for common restoration categories including water, fire, mold, and flood or sewage cleanup.'],
  ['Does it replace my dispatcher?', 'No. It supports your dispatcher by handling first response and qualification so staff can focus on active jobs.'],
  ['How fast can we get started?', 'Most teams can launch quickly after intake questions, routing rules, and notification preferences are configured.'],
];

export function FAQ() {
  return (
    <section id="faq" className="py-16">
      <div className="section-shell">
        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        <div className="mt-8 space-y-4">
          {faqs.map(([q, a]) => (
            <details key={q} className="card group">
              <summary className="cursor-pointer list-none font-semibold">{q}</summary>
              <p className="mt-3 text-sm text-muted">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
