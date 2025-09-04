export default function Services() {
  return (
    <section className="min-h-screen px-6 md:px-16 py-16 bg-[var(--bg)] text-[var(--text)]">
      {/* Intro */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-[var(--var-primary)] text-xl font-bold mb-2">Nos Services</h2>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Ce que nous proposons</h1>
        <p className="text-sm md:text-base text-gray-700">
          Nous proposons une variété de services pour satisfaire vos envies de burger et améliorer votre expérience culinaire.
        </p>
      </div>

      {/* Services list */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white/10 p-6 rounded-2xl shadow-lg text-center">
          <h3 className="text-xl font-bold mb-2">Livraison rapide</h3>
          <p>Recevez vos commandes directement chez vous en un temps record grâce à notre service de livraison.</p>
        </div>
        <div className="bg-white/10 p-6 rounded-2xl shadow-lg text-center">
          <h3 className="text-xl font-bold mb-2">Commandes en ligne</h3>
          <p>Passez vos commandes facilement via notre site web ou WhatsApp, où que vous soyez.</p>
        </div>
        <div className="bg-white/10 p-6 rounded-2xl shadow-lg text-center">
          <h3 className="text-xl font-bold mb-2">Événements & Catering</h3>
          <p>Nous fournissons des services pour vos événements, anniversaires ou réceptions avec des menus sur mesure.</p>
        </div>
      </div>

      {/* Call-to-action */}
      <div className="text-center">
        <a
          href="#order"
          className="inline-block px-6 py-3 bg-[var(--var-primary)] text-white font-bold rounded-full hover:opacity-90 transition mb-4"
        >
          Commandez maintenant
        </a>
        <a
          href="https://wa.me/243993474764"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-bold rounded-full hover:opacity-90 transition"
        >
          <i className="fab fa-whatsapp text-xl"></i>
          WhatsApp
        </a>
      </div>
    </section>
  );
}
