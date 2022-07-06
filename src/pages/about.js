import Footer from "../components/footer";
import Header from "../components/header";
import MainText from "../components/mainText";
import SecondaryText from "../components/secondaryText";

function About() {
    return (
        <div className="bg-about bg-cover flex flex-col justify-between">
            <div className="h-screen w-full bg-yellow-100 opacity-50 fixed"></div>
            <Header />
            <MainText />
            <SecondaryText />
            <Footer />
        </div>
    )
}

export default About;