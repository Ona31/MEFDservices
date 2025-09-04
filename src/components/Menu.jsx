import { data_prod } from "../assets/datas";

export default function MenuSection() {
  return (
    <section className="flex flex-col w-full min-h-screen bg-[var(--tro)] md:px-36 items-center py-30">
      <p className="text-[var(--var-primary)]">MEFD Burger menu</p>
      <h2 className="font-extrabold text-4xl text-[var(--text)] mb-12 md:mb-30">
        Menu Burger
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1200px] px-4">
        {data_prod.map((item, index) => (
          <div
  key={index}
  className={`relative flex flex-col items-center rounded-[20px] p-6 shadow-xl ${
    item.highlight ? "bg-red-500 text-white" : "bg-white text-black"
  }`}
>
  {/* Image avec drop shadow */}
  <div className="relative w-full bloc  -mt-16">
    <img
      src={item.Image}
      alt={item.title}
      className="w-28 drop-shadow-[0_20px_20px_rgba(0,0,0,0.2)]"
    /> 
    <div className="mt-8 flex flex-col items-center text-center">
    <h4 className="font-bold text-xl">{item.title}</h4>
    <p className="mt-2 text-sm">{item.description}</p>
  </div>
  </div>

  {/* Titre et description */}
 

  {/* Prix et bouton */}
  <div className="mt-4 flex items-center justify-between w-full">
    <span className={`font-bold ${item.highlight ? "bg-white text-red-500 px-3 py-1 rounded" : ""}`}>
      {item.prix}
    </span>
    <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600">
      🛒
    </button>
  </div>
</div>

        ))}
      </div>
    </section>
  );
}
