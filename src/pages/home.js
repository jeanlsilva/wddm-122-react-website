import BestChoices from "../components/bestChoices";
import Description from "../components/description";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";

function Home() {
    return (
        <div className="bg-yellow-100 overflow-hidden">
            <div className="h-screen w-full bg-yellow-100 opacity-50 fixed z-20"></div>
            <Header />
            <Hero />
            <Description />
            <BestChoices />
            <Footer />
        </div>
    )
}

export default Home;