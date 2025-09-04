import Footer from "../components/Footer";

export default function About() {
  return (
    <section className="min-h-screen px-6 md:px-36 py-36 bg-[var(--bg)] text-[var(--text)]">
      
      {/* Intro */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-[var(--var-primary)] text-xl font-bold mb-2">À propos de nous</h2>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          MEFD Burger - L'expérience du vrai burger
        </h1>
        <p className="text-sm md:text-base text-gray-700">
          Chez MEFD Burger, nous croyons que la restauration rapide peut être savoureuse et de qualité. 
          Nous préparons nos burgers chaque jour avec des ingrédients frais pour garantir une expérience culinaire unique.
        </p>
      </div>

      {/* Valeurs */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white/10 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center">
          <h3 className="text-xl font-bold mb-2">Qualité</h3>
          <p>Nous utilisons uniquement des ingrédients frais et soigneusement sélectionnés pour nos burgers.</p>
        </div>
        <div className="bg-white/10 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center">
          <h3 className="text-xl font-bold mb-2">Goût</h3>
          <p>Chaque burger est préparé pour offrir une saveur unique et délicieuse à chaque bouchée.</p>
        </div>
        <div className="bg-white/10 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center">
          <h3 className="text-xl font-bold mb-2">Passion</h3>
          <p>Notre équipe met tout son cœur pour vous offrir une expérience culinaire mémorable.</p>
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
      <Footer/>
  
    </section>
  );
}
