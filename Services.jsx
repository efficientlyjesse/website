const SERVICES = [
  { icon: "chart",  title: "Analytics & dashboards", blurb: "Numbers that answer the question you actually have. Pulls from your real systems, refreshes overnight, opens in your browser." },
  { icon: "code",   title: "Custom software",      blurb: "Internal tools, customer portals, ops systems. Built for how your team actually works — not adapted from a template." },
  { icon: "phone",  title: "Mobile apps",          blurb: "Native-feeling iOS and Android apps that ship to the stores. We handle the build, the review, the rollout." },
];

const Services = () => (
  <section className="e-services" id="services">
    <div className="container">
      <div className="e-services__head">
        <span className="t-eyebrow">What we do</span>
        <h2 className="t-display">Three things, done well.</h2>
        <p className="t-body-lg" style={{color: "var(--fg-2)", maxWidth: 620}}>
          We're deliberately narrow. If your problem fits one of these, we're a great fit.
          If it doesn't, we'll happily point you to someone who is.
        </p>
      </div>
      <div className="e-services__grid">
        {SERVICES.map(s => (
          <article className="e-service" key={s.title}>
            <div className="e-service__icon"><Icon name={s.icon}/></div>
            <h3>{s.title}</h3>
            <p>{s.blurb}</p>
            <a className="e-service__link">Learn more <span style={{fontFamily:"var(--font-mono)"}}>→</span></a>
          </article>
        ))}
      </div>
    </div>
  </section>
);

window.Services = Services;
