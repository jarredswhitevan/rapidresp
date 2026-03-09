export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="section-shell grid gap-6 md:grid-cols-3">
        <div>
          <p className="font-semibold">Restoration Rapid Response</p>
          <p className="mt-2 text-sm text-muted">AI receptionist and lead capture for emergency restoration businesses.</p>
        </div>
        <div className="text-sm text-muted">
          <p><a href="#features" className="hover:text-white">Features</a></p>
          <p><a href="#services" className="hover:text-white">Services</a></p>
          <p><a href="#faq" className="hover:text-white">FAQ</a></p>
        </div>
        <div className="text-sm text-muted">
          <p>contact@restorationrapidresponse.com</p>
          <p className="mt-2">© {new Date().getFullYear()} Restoration Rapid Response. All rights reserved.</p>
          <p className="mt-2 text-xs">Service availability and integrations may vary based on business setup.</p>
        </div>
      </div>
    </footer>
  );
}
