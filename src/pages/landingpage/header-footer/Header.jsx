import logo from "/images/24Pods-Logo_transparent.png";
export default function Header({ scrolled, menuOpen, setMenuOpen }) {
  const close = () => setMenuOpen(false);

  return (
    <>
      <header className={`hdr${scrolled ? " scrolled" : ""}`}>
        <a href="/" className="logo">
           <img src={logo} alt="24Pods Logo" className="logo-img" />
        </a>

        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#platforms">Platforms</a>
          <a href="#faq">FAQ</a>
          <a href="#contact" className="ncta">
            Start Your Podcast →
          </a>
        </nav>

        <button
          className={`burger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menu"
        >
          <span className="bbar"></span>
          <span className="bbar"></span>
          <span className="bbar"></span>
        </button>
      </header>

      <div className={`mnav${menuOpen ? " open" : ""}`}>
        <a href="#services" onClick={close}>Services</a>
        <a href="#process" onClick={close}>Process</a>
        <a href="#platforms" onClick={close}>Platforms</a>
        <a href="#faq" onClick={close}>FAQ</a>
        <a href="#contact" onClick={close} className="mncta">
          Start Your Podcast →
        </a>
      </div>
    </>
  );
}