import img from "../assets/Sans titre-1.png";

export default function HeroSection(){
    return(
        <section className="bloc md:flex w-full  md:h-screen apa">
           <div className="bloc bg-white w-full  md:px-30 px-4 py-32 ">
          <h2 className="flex my-4 p-2 bg-[var(--var-second)] rounded-[50px] w-fit">
  Bienvenue chez
</h2>

<h1 className="font-extrabold text-5xl md:text-8xl text-[var(--text)]">
  MEFD Burger <br />la différence
</h1>

<p className="text-[var(--text)] text-sm my-4">
  Savourez nos burgers artisanaux préparés chaque jour avec des ingrédients frais <br /> et de qualité.
  De la viande tendre, du pain moelleux et des sauces maison pour <br />un goût unique à chaque bouchée !
</p>

<a
  href="https://wa.me/243993474764" // Remplace par ton numéro complet avec indicatif pays
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 py-2 px-4 bg-green-500 rounded-[50px] w-fit text-white font-bold shadow-2xl hover:opacity-90 transition"
>
  <i className="fab fa-whatsapp text-xl"></i> {/* icône WhatsApp */}
  Contactez-nous
</a>


           </div>
           <div className="flex  bg-[var(--var-primary)] w-full md:h-screen md:p-12 p-4">
             <img src={img} alt="" className="  md:absolute md:h-screen right-5" />

            </div>
        </section>
    )
}


