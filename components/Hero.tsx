export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(255,77,45,0.16),transparent_45%)]" />
      <div className="section-shell grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            AI Receptionist for Restoration Companies
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Never Miss Another Restoration Call
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">
            Restoration Rapid Response helps water, fire, and mold restoration companies answer every call, recover
            missed leads instantly, and dispatch faster.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#demo" className="rounded-full bg-accent px-6 py-3 font-semibold transition hover:brightness-110">
              Book a Demo
            </a>
            <a href="#solution" className="rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:border-white/50">
              See How It Works
            </a>
          </div>
          <ul className="mt-8 space-y-2 text-sm text-muted">
            <li>✓ 24/7 lead response</li>
            <li>✓ Missed-call text back</li>
            <li>✓ Built for water, mold, and fire restoration</li>
          </ul>
        </div>
        <div className="card accent-ring">
          <p className="text-xs uppercase tracking-wide text-muted">Live Emergency Intake Preview</p>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-black/30 p-4">
              <p className="text-sm font-semibold">Incoming Call</p>
              <p className="mt-1 text-sm text-muted">Water leak in basement • Policy holder available</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/30 p-4">
              <p className="text-sm font-semibold">AI Qualification</p>
              <p className="mt-1 text-sm text-muted">Collected address, urgency, issue type, and insurance carrier.</p>
            </div>
            <div className="rounded-xl border border-accent/40 bg-accent/10 p-4">
              <p className="text-sm font-semibold">Instant Dispatch Alert</p>
              <p className="mt-1 text-sm text-muted">Dispatcher notified in 30 seconds with full job details.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
