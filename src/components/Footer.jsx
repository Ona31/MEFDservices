export default function Footer() {
  return (
    <footer className="bg-[var(--var-second)] text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Logo / Nom */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-extrabold">MEFD Burger</h2>
          <p className="text-sm">Des burgers artisanaux, frais et délicieux.</p>
        </div>

        {/* Liens rapides */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Liens rapides</h3>
          <a href="#home" className="hover:text-[var(--var-primary)]">Home</a>
          <a href="#about" className="hover:text-[var(--var-primary)]">About</a>
          <a href="#services" className="hover:text-[var(--var-primary)]">Services</a>
          <a href="#contact" className="hover:text-[var(--var-primary)]">Contact</a>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Contact</h3>
          <a href="tel:+243993474764" className="hover:text-[var(--var-primary)]">+243 99 34 74 764</a>
          <a href="https://wa.me/243993474764" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[var(--var-primary)]">
            <i className="fab fa-whatsapp text-lg"></i> WhatsApp
          </a>
          <a href="mailto:info@mefdburger.com" className="hover:text-[var(--var-primary)]">info@mefdburger.com</a>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Suivez-nous</h3>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-[var(--var-primary)]"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-[var(--var-primary)]"><i className="fab fa-instagram"></i></a>
            <a href="https://wa.me/243993474764" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--var-primary)]"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-sm text-white/70">
        &copy; {new Date().getFullYear()} MEFD Burger. Tous droits réservés.
      </div>
    </footer>
  );
}
