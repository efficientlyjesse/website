const Contact = () => {
  const [sent, setSent] = React.useState(false);
  const submit = (e) => { e.preventDefault(); setSent(true); };
  return (
    <section className="e-contact" id="contact">
      <div className="container">
        <div className="e-contact__inner">
          <div className="e-contact__copy">
            <span className="t-eyebrow">Let's talk</span>
            <h2 className="t-display">Tell us what you're trying to build.</h2>
            <p className="t-body-lg" style={{color: "var(--fg-2)", maxWidth: 480}}>
              A few sentences is fine. We'll reply within a business day with a couple
              of questions, or a time to talk.
            </p>
            <ul className="e-contact__list">
              <li><Icon name="check" size={18}/> Free 30-minute intro call</li>
              <li><Icon name="check" size={18}/> Honest assessment, no pitch</li>
              <li><Icon name="check" size={18}/> If we're a bad fit we'll say so</li>
            </ul>
          </div>
          {sent ? (
            <div className="e-contact__form e-contact__sent">
              <div className="e-contact__check"><Icon name="check" size={28}/></div>
              <h3>Got it.</h3>
              <p>Talk soon — we'll reply within a business day.</p>
            </div>
          ) : (
            <form className="e-contact__form" onSubmit={submit}>
              <div className="field"><label>Name</label><input className="input" placeholder="Sam Chen" required/></div>
              <div className="field"><label>Work email</label><input className="input" type="email" placeholder="sam@northbeam.co" required/></div>
              <div className="field"><label>Company</label><input className="input" placeholder="Northbeam Logistics"/></div>
              <div className="field">
                <label>What are you trying to build?</label>
                <textarea className="input" rows="4" placeholder="A few sentences is fine."/>
              </div>
              <button className="btn btn-primary btn-lg" type="submit">Send <span style={{fontFamily:"var(--font-mono)"}}>→</span></button>
              <p className="t-meta">By sending you agree to receive a follow-up email. We don't share your information.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

window.Contact = Contact;
