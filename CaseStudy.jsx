const CaseStudy = () => (
  <section className="e-case">
    <div className="container">
      <div className="e-case__inner">
        <div className="e-case__copy">
          <span className="t-eyebrow" style={{color: "var(--brand-blue-300)"}}>Case study · Northbeam Logistics</span>
          <h2 className="t-display" style={{color: "var(--white)"}}>One dashboard replaced eleven spreadsheets.</h2>
          <p style={{color: "var(--brand-blue-300)", fontSize: 18, maxWidth: 540}}>
            A 40-person logistics team was running their entire ops day through Google Sheets.
            We built them a single dashboard that pulls from their TMS overnight. Saves the
            team about six hours a week and answers the question their CEO actually asks.
          </p>
          <a className="btn btn-primary btn-lg" style={{marginTop: 16}} href="#">Read the story <span style={{fontFamily:"var(--font-mono)"}}>→</span></a>
        </div>
        <div className="e-case__stats">
          <div><b>6 hrs</b><span>saved per week</span></div>
          <div><b>11 → 1</b><span>spreadsheets to one app</span></div>
          <div><b>8 wks</b><span>discovery to launch</span></div>
        </div>
      </div>
    </div>
  </section>
);

window.CaseStudy = CaseStudy;
