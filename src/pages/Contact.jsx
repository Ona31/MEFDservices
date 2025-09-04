import Footer from "../components/Footer";

export default function Contact() {
  return (
    <section className="min-h-screen px-6 md:px-16 py-36 bg-[var(--bg)] text-[var(--text)]">
      {/* Intro */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-[var(--var-primary)] text-xl font-bold mb-2">Contactez-nous</h2>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Restons en contact</h1>
        <p className="text-sm md:text-base text-gray-700">
          Pour toute question, commande ou suggestion, n’hésitez pas à nous contacter via téléphone, WhatsApp ou notre formulaire en ligne.
        </p>
      </div>

      {/* Contact info */}
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-8 mb-12 justify-center items-center">
        <div className="flex flex-col items-center text-center bg-white/10 p-6 rounded-2xl shadow-lg w-full md:w-1/3">
          <h3 className="text-xl font-bold mb-2">Téléphone</h3>
          <a href="tel:+243993474764" className="text-[var(--var-primary)] font-semibold">+243 99 34 74 764</a>
        </div>
        <div className="flex flex-col items-center text-center bg-white/10 p-6 rounded-2xl shadow-lg w-full md:w-1/3">
          <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
          <a
            href="https://wa.me/243993474764"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white font-bold bg-green-500 px-4 py-2 rounded-full hover:opacity-90 transition"
          >
            <i className="fab fa-whatsapp text-xl"></i>
            WhatsApp
          </a>
        </div>
        <div className="flex flex-col items-center text-center bg-white/10 p-6 rounded-2xl shadow-lg w-full md:w-1/3">
          <h3 className="text-xl font-bold mb-2">Adresse</h3>
          <p>Kinshasa, République Démocratique du Congo</p>
        </div>
      </div>

      {/* Formulaire de contact */}
      <div className="max-w-3xl mx-auto">
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Votre nom"
            className="p-3 rounded-md bg-white/10 text-white border border-gray-300"
          />
          <input
            type="email"
            placeholder="Votre email"
            className="p-3 rounded-md bg-white/10 text-white border border-gray-300"
          />
          <textarea
            placeholder="Votre message"
            className="p-3 rounded-md bg-white/10 text-white border border-gray-300 h-32"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-[var(--var-primary)] text-white font-bold rounded-full hover:opacity-90 transition"
          >
            Envoyer
          </button>
        </form>
      </div>
      <Footer/>

    </section>
  );
}
