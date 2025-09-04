import img from "../assets/Sans titre-1.png";

export default function HeroSection(){
    return(
        <section className="bloc md:flex w-full  md:h-screen apa">
           <div className="bloc bg-white w-full  md:px-30 px-4 py-32 ">
          <h2 className="flex p-2 bg-[var(--var-second)] rounded-[50px] w-fit">
  Bienvenue chez
</h2>

<h1 className="font-extrabold text-4xl md:text-8xl text-[var(--text)]">
  MEFD Burger <br />la différence
</h1>

<p className="text-[var(--text)] text-sm my-4">
  Savourez nos burgers artisanaux préparés chaque jour avec des ingrédients frais <br /> et de qualité.
  De la viande tendre, du pain moelleux et des sauces maison pour <br />un goût unique à chaque bouchée !
</p>

<a href="#order" className="flex py-2 px-4 bg-[var(--var-primary)] rounded-[50px] w-fit text-white font-bold shadow-2xl">
  Commandez maintenant
</a>

           </div>
           <div className="flex  bg-[var(--var-primary)] w-full md:h-screen md:p-12 p-4">
             <img src={img} alt="" className="  md:absolute md:h-screen right-5" />

            </div>
        </section>
    )
}


