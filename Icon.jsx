// Tiny inline Lucide icon set. 24px default, currentColor stroke.
const Icon = ({ name, size = 22, strokeWidth = 1.75 }) => {
  const common = {
    width: size, height: size, viewBox: "0 0 24 24",
    fill: "none", stroke: "currentColor",
    strokeWidth, strokeLinecap: "round", strokeLinejoin: "round",
  };
  switch (name) {
    case "chart": return <svg {...common}><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-5"/></svg>;
    case "lock":  return <svg {...common}><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>;
    case "zap":   return <svg {...common}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10"/></svg>;
    case "layers":return <svg {...common}><path d="M12 2 2 7l10 5 10-5-10-5Z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/></svg>;
    case "phone": return <svg {...common}><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/></svg>;
    case "code":  return <svg {...common}><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>;
    case "search":return <svg {...common}><circle cx="11" cy="11" r="7"/><path d="m21 21-4.35-4.35"/></svg>;
    case "arrow": return <svg {...common}><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>;
    case "check": return <svg {...common}><path d="M20 6 9 17l-5-5"/></svg>;
    case "menu":  return <svg {...common}><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></svg>;
    case "spark": return <svg {...common}><path d="M12 3v3"/><path d="M12 18v3"/><path d="M3 12h3"/><path d="M18 12h3"/><path d="m5.6 5.6 2.1 2.1"/><path d="m16.3 16.3 2.1 2.1"/><path d="m18.4 5.6-2.1 2.1"/><path d="m7.7 16.3-2.1 2.1"/></svg>;
    case "compass": return <svg {...common}><circle cx="12" cy="12" r="10"/><path d="m16 8-4 8-4-4 8-4Z"/></svg>;
    default: return null;
  }
};

window.Icon = Icon;
