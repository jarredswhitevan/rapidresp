const problems = [
  'Missed after-hours calls',
  'Slow follow-up on emergency requests',
  'Unqualified leads waste team time',
  'Dispatch delays from incomplete intake',
];

export function Problem() {
  return (
    <section className="py-16" id="problem">
      <div className="section-shell">
        <h2 className="text-3xl font-bold">Restoration Companies Lose Jobs When Calls Go Unanswered</h2>
        <p className="mt-4 max-w-3xl text-muted">
          In emergency restoration, homeowners and property managers call the first company that responds. When owners
          and dispatchers are on active jobs, unanswered calls and voicemail often turn into lost opportunities.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((item) => (
            <article key={item} className="card">
              <p className="font-semibold">{item}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
