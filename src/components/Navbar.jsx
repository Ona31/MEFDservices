import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 z-50 w-full flex justify-between items-center px-6 md:px-16 py-4 transition-all duration-500 ${
          scrolled ? "backdrop-blur-md bg-white/30 shadow-md" : "bg-transparent"
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
            <li>
              <Link to="/" className="hover:text-[var(--var-primary)] transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[var(--var-primary)] transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[var(--var-primary)] transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[var(--var-primary)] transition">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contact & CTA desktop */}
        <div className="hidden md:flex gap-4 items-center font-bold">
          <a href="tel:+243993474764">+243 99 34 74 764</a>
          <a
            href="https://wa.me/243993474764"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-full hover:opacity-90 transition w-fit"
          >
            <i className="fab fa-whatsapp text-xl"></i>
            WhatsApp
          </a>
        </div>

        {/* Hamburger mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center text-[var(--text)] text-2xl z-60"
        >
          <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`}></i>
        </button>
      </header>

      {/* Menu mobile */}
      <div
        className={`fixed top-0 left-0 w-2/3 h-full z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        } ${scrolled ? "backdrop-blur-md bg-white/30 shadow-md" : "bg-white"}`}
      >
        <div className="flex flex-col gap-6 mt-20 px-6 text-[var(--text)] font-bold">
          <Link to="/" onClick={() => setOpen(false)} className="hover:text-[var(--var-primary)]">
            Home
          </Link>
          <Link to="/about" onClick={() => setOpen(false)} className="hover:text-[var(--var-primary)]">
            About
          </Link>
          <Link to="/services" onClick={() => setOpen(false)} className="hover:text-[var(--var-primary)]">
            Services
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="hover:text-[var(--var-primary)]">
            Contact
          </Link>
          <a href="tel:+243993474764" onClick={() => setOpen(false)} className="hover:text-[var(--var-primary)]">
            +243 99 34 74 764
          </a>
          <a
            href="https://wa.me/243993474764"
            onClick={() => setOpen(false)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-full hover:opacity-90 transition w-fit"
          >
            <i className="fab fa-whatsapp text-xl"></i>
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
