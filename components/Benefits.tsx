const benefits = [
  'Respond to emergency leads instantly',
  'Reduce lost jobs from missed calls',
  'Qualify better leads before your team jumps in',
  'Improve speed-to-contact',
  'Keep your dispatch process moving',
  'Stay responsive after hours',
];

export function Benefits() {
  return (
    <section className="py-16">
      <div className="section-shell">
        <h2 className="text-3xl font-bold">Why Restoration Companies Use Restoration Rapid Response</h2>
        <ul className="mt-8 grid gap-3 md:grid-cols-2">
          {benefits.map((item) => (
            <li key={item} className="card py-4 text-muted">
              ✓ {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
