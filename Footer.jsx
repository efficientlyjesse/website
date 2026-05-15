const Footer = () => (
  <footer className="e-footer">
    <div className="container e-footer__inner">
      <div className="e-footer__brand">
        <span style={{fontSize: 24, fontWeight: 700}}>E</span>
        <p className="e-footer__tag">
          Custom software, mobile apps, and analytics<br/>
          for small teams that want to ship.
        </p>
        <p className="t-meta" style={{color: "var(--brand-blue-300)"}}>© 2026 Efficiently Software Solutions</p>
      </div>
      <div className="e-footer__cols">
        <div>
          <h5>Services</h5>
          <a>Custom software</a>
          <a>Mobile apps</a>
          <a>Analytics</a>
        </div>
        <div>
          <h5>Company</h5>
          <a href="about.html">About</a>
          <a>Case studies</a>
          <a>Pricing</a>
        </div>
        <div>
          <h5>Get in touch</h5>
          <a href="#contact">Book a call</a>
          <a href="mailto:jesse@efficientlysoftware.com">jesse@efficientlysoftware.com</a>
        </div>
      </div>
    </div>
  </footer>
);

window.Footer = Footer;
