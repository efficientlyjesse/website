const Hero = ({
  headline = "Technical leverage, built around your business.",
  emphasis = "your",
  eyebrow = "Custom builds · analytics · mobile",
  ctaLabel = "Book a 30-min intro",
  showKpi = true,
  showSync = true,
  showMeta = true,
  mockTilt = 0.6,
} = {}) => {
  // Render headline with the emphasized word wrapped in <em>
  const renderHeadline = () => {
    if (!emphasis || !emphasis.trim()) return headline;
    const re = new RegExp(`(\\b${emphasis.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b)`, "i");
    const parts = headline.split(re);
    return parts.map((p, i) =>
      re.test(p) ? <em key={i}>{p}</em> : <React.Fragment key={i}>{p}</React.Fragment>
    );
  };

  return (
    <section className="e-hero">
      <div className="e-hero__inner">
        <div className="e-hero__copy">
          <span className="t-eyebrow">{eyebrow}</span>
          <h1 className="t-hero">{renderHeadline()}</h1>
          <p className="t-body-lg" style={{maxWidth: 540, color: "var(--fg-2)"}}>
            We pair with your team to design and build the tools that solve the bottleneck
            you actually have — not whatever the platform-of-the-month is selling.
            The source code is yours, and we stay around for what comes next.
          </p>
          <div className="e-hero__cta">
            <a className="btn btn-primary btn-lg" href="#contact">{ctaLabel} <span style={{fontFamily: "var(--font-mono)"}}>→</span></a>
            <a className="btn btn-ghost btn-lg" href="#process">See how we work</a>
          </div>
          {showMeta && (
            <div className="e-hero__meta">
              <span><Icon name="check" size={16}/> Fixed-scope engagements</span>
              <span><Icon name="check" size={16}/> Source code is yours</span>
              <span><Icon name="check" size={16}/> Honest assessment, no pitch</span>
            </div>
          )}
        </div>
        <div className="e-hero__visual">
          <HeroVisualStack showKpi={showKpi} showSync={showSync} mockTilt={mockTilt}/>
        </div>
      </div>
    </section>
  );
};

const HeroVisualStack = ({ showKpi, showSync, mockTilt }) => (
  <div className="e-visual-stack">
    <DashboardMock tilt={mockTilt}/>
    {showKpi && <KpiMock/>}
    {showSync && <SyncMock/>}
  </div>
);

const DashboardMock = ({ tilt = 0.6 }) => (
  <div className="e-mock e-mock--main" style={{ transform: `rotate(${tilt}deg)` }}>
    <div className="e-mock__chrome">
      <span className="e-mock__dot"/><span className="e-mock__dot"/><span className="e-mock__dot"/>
      <div className="e-mock__url">app.efficientlysoftware.com</div>
    </div>
    <div className="e-mock__body">
      <div className="e-mock__head">
        <div>
          <div className="t-eyebrow" style={{color: "var(--fg-3)"}}>Summary · this month</div>
          <h3 style={{margin: "4px 0 0", fontSize: 22}}>Order throughput</h3>
        </div>
        <div className="e-mock__pill">+38% WoW</div>
      </div>
      <svg className="e-mock__chart" viewBox="0 0 320 110" preserveAspectRatio="none">
        <defs>
          <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--tw-accent)" stopOpacity="0.22"/>
            <stop offset="100%" stopColor="var(--tw-accent)" stopOpacity="0"/>
          </linearGradient>
        </defs>
        <path d="M0 88 L40 80 L80 70 L120 78 L160 60 L200 50 L240 38 L280 28 L320 18 L320 110 L0 110 Z" fill="url(#g1)"/>
        <path d="M0 88 L40 80 L80 70 L120 78 L160 60 L200 50 L240 38 L280 28 L320 18" stroke="var(--tw-accent)" strokeWidth="2.25" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        {[40,80,120,160,200,240,280].map((x,i) => (
          <circle key={i} cx={x} cy={[80,70,78,60,50,38,28][i]} r="2.5" fill="#FFF" stroke="var(--tw-accent)" strokeWidth="1.5"/>
        ))}
      </svg>
      <div className="e-mock__stats">
        <div><span className="t-eyebrow" style={{color: "var(--fg-3)"}}>Orders</span><b>2,481</b></div>
        <div><span className="t-eyebrow" style={{color: "var(--fg-3)"}}>Revenue</span><b>$184k</b></div>
        <div><span className="t-eyebrow" style={{color: "var(--fg-3)"}}>Avg time</span><b>3m 12s</b></div>
      </div>
    </div>
  </div>
);

const KpiMock = () => {
  const bars = [
    { label: "Direct",   val: 92, color: "var(--tw-accent)" },
    { label: "Referral", val: 64, color: "var(--tw-accent-300)" },
    { label: "Email",    val: 48, color: "var(--brand-navy)" },
    { label: "Search",   val: 36, color: "var(--cream-300)" },
  ];
  return (
    <div className="e-mock e-mock--kpi">
      <div className="e-kpi__head">
        <span className="t-eyebrow" style={{color: "var(--fg-3)"}}>By channel</span>
        <h4 className="e-kpi__title">New customers</h4>
      </div>
      <div className="e-kpi__bars">
        {bars.map(b => (
          <div className="e-kpi__row" key={b.label}>
            <span className="e-kpi__label">{b.label}</span>
            <div className="e-kpi__track"><div className="e-kpi__fill" style={{width: `${b.val}%`, background: b.color}}/></div>
            <span className="e-kpi__val">{b.val}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const SyncMock = () => (
  <div className="e-mock e-mock--sync">
    <div className="e-sync__head">
      <span className="e-sync__dot"/>
      <div>
        <div className="e-sync__title">Sync running</div>
        <div className="e-sync__sub">postgres → warehouse · 02:14</div>
      </div>
    </div>
    <ul className="e-sync__list">
      <li><span className="e-sync__chk"><Icon name="check" size={12}/></span> orders <em>4,210 rows</em></li>
      <li><span className="e-sync__chk"><Icon name="check" size={12}/></span> customers <em>812 rows</em></li>
      <li><span className="e-sync__chk e-sync__chk--active"/> inventory <em>syncing…</em></li>
    </ul>
  </div>
);

window.Hero = Hero;
