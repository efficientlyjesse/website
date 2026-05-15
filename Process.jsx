const STEPS = [
  { title: "Discovery",        body: "We sit with your team, watch how the work actually happens, and write a project brief we both sign off on." },
  { title: "Design & shape",   body: "We sketch the flows, prototype the screens, and walk you through it together. Decisions get made before the production code is written, not after." },
  { title: "Build & demo",     body: "We ship working builds you can poke at. You give us feedback. We adjust on the next iteration — no surprises, no big-bang reveal." },
  { title: "Launch & handoff", body: "Production rollout, training your team, and the source code goes into your repository." },
];

const Process = () => (
  <section className="e-process" id="process">
    <div className="container">
      <div className="e-services__head">
        <span className="t-eyebrow">How we work</span>
        <h2 className="t-display">Four stages, no surprises.</h2>
      </div>
      <ol className="e-process__list">
        {STEPS.map((s, i) => (
          <li key={s.title} className="e-process__step">
            <div className="e-process__num">{String(i+1).padStart(2, "0")}</div>
            <div className="e-process__content">
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

window.Process = Process;
