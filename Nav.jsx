const Nav = ({ active = "home" }) => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={"e-nav" + (scrolled ? " is-scrolled" : "")}>
      <div className="e-nav__inner">
        <a className="e-nav__brand" href="index.html" aria-label="Efficiently home">
          <span style={{fontSize: 18, fontWeight: 700, letterSpacing: -0.5}}>Efficiently</span>
        </a>
        <div className="e-nav__links">
          <a href="index.html#services" className={active === "services" ? "is-active" : ""}>Services</a>
          <a href="index.html#process" className={active === "process" ? "is-active" : ""}>How we work</a>
          <a href="index.html#contact" className={active === "contact" ? "is-active" : ""}>Contact</a>
        </div>
        <a className="btn btn-primary" href="index.html#contact">
          Book a call <span style={{fontFamily: "var(--font-mono)"}}>→</span>
        </a>
      </div>
    </nav>
  );
};
window.Nav = Nav;
