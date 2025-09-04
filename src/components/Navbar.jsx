import { useState, useEffect } from "react";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Effet scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 flex justify-between items-center w-full px-6 md:px-16 py-4 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-white/30 shadow-md" // 🎨 glassmorphism
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-12">
        <div className="flex bg-[var(--var-primary)] justify-center p-2 rounded-md">
          <h2 className="text-white text-xl font-extrabold text-center leading-tight">
            MEFD <br />
            <span className="text-base font-light">BURGER</span>
          </h2>
        </div>
      </div>

      {/* Navigation desktop */}
      <nav className="hidden md:flex items-center">
        <ul className="flex gap-8 text-[var(--text)] font-bold">
          <li><a href="#home" className="hover:text-[var(--var-primary)] transition">Home</a></li>
          <li><a href="#about" className="hover:text-[var(--var-primary)] transition">About</a></li>
          <li><a href="#services" className="hover:text-[var(--var-primary)] transition">Services</a></li>
          <li><a href="#contact" className="hover:text-[var(--var-primary)] transition">Contact</a></li>
        </ul>
      </nav>

      {/* Contact & CTA (desktop) */}
      <div className="hidden md:flex gap-6 font-bold items-center text-[var(--text)]">
        <a href="tel:+243993474764">+243 99 34 74 764</a>
                <a
  href="https://wa.me/243993474764" // Remplace par ton numéro complet avec indicatif pays
  onClick={() => setOpen(false)} // ferme le menu mobile après le clic
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-full hover:opacity-90 transition w-fit"
>
  <i className="fab fa-whatsapp text-xl"></i> {/* icône WhatsApp */}
  WhatsApp
</a>
      </div>

      {/* Bouton Hamburger (mobile) */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex items-center text-[var(--text)] text-2xl"
      >
        <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`}></i>
      </button>

      {/* Menu mobile */}
      <div
        className={`fixed top-0 left-0 w-2/3 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6 mt-20 px-6 text-[var(--text)] font-bold">
          <a href="#home" onClick={() => setOpen(false)} className="hover:text-[var(--var-primary)]">Home</a>
          <a href="#about" onClick={() => setOpen(false)} className="hover:text-[var(--var-primary)]">About</a>
          <a href="#services" onClick={() => setOpen(false)} className="hover:text-[var(--var-primary)]">Services</a>
          <a href="#contact" onClick={() => setOpen(false)} className="hover:text-[var(--var-primary)]">Contact</a>
          <a href="tel:+243993474764" onClick={() => setOpen(false)} className="hover:text-[var(--var-primary)]">
            +243 99 34 74 764
          </a>
         <a
  href="https://wa.me/243993474764" // Remplace par ton numéro complet avec indicatif pays
  onClick={() => setOpen(false)} // ferme le menu mobile après le clic
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-full hover:opacity-90 transition w-fit"
>
  <i className="fab fa-whatsapp text-xl"></i> {/* icône WhatsApp */}
  WhatsApp
</a>

        </div>
      </div>
    </header>
  );
}
