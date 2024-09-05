import Footer from "./Footer";
import Gallery from "./GallerySection";
import HeroSection from "./HeroSection";
import NavBar from "./NavBar";
import OurServiceSection from "./OurServiceSection";
import ProjectSection from "./ProjectSection";


const LandingPage = () => {

    return (
        <section className="bg-zinc-900 min-h-screen text-white font-mono">
            <NavBar />
            <HeroSection />
            <ProjectSection />
            <OurServiceSection />
            <Gallery />
            <Footer />
        </section>
    )
}

export default LandingPage;