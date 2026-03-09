const samples = [
  'Placeholder testimonial from a restoration owner about recovering missed jobs and improving response times.',
  'Sample testimonial: our team now gets complete emergency details before dispatch and responds faster after hours.',
  'Placeholder testimonial: missed-call text back helped us reconnect with urgent callers before competitors did.',
];

export function Testimonials() {
  return (
    <section className="py-16">
      <div className="section-shell">
        <h2 className="text-3xl font-bold">Testimonials</h2>
        <p className="mt-3 text-sm text-muted">Sample placeholder testimonials for layout preview only.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {samples.map((sample, i) => (
            <blockquote key={i} className="card text-muted">
              “{sample}”
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
