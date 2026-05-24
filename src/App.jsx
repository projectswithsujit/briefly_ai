import Features from "./components/Features";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";

export default function App({ title }){
    return(<>
    <Navbar title={title} />
    <HeroSection />
    <main class="container">
        <MainSection />
        <Features />
    </main>
    <Footer title={title} />
    </>)
}