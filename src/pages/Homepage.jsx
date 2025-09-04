import Footer from "../components/Footer";
import HeroSection from "../components/Hero";
import MenuSection from "../components/Menu";


export default function HomePage(){
    return(
        <main className="bloc w-full h-auto">
           <HeroSection/>
            <MenuSection/>
            <Footer/>
        </main>
    )
}