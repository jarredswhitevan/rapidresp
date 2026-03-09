const process = [
  'Connect your phone and workflow',
  'Customize your intake questions',
  'Start capturing leads 24/7',
  'Get alerted when qualified jobs come in',
];

export function HowItWorks() {
  return (
    <section className="py-16">
      <div className="section-shell">
        <h2 className="text-3xl font-bold">How It Works</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {process.map((item, i) => (
            <div key={item} className="card relative">
              <p className="text-xs uppercase text-accent">Step {i + 1}</p>
              <p className="mt-3 text-sm text-muted">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
