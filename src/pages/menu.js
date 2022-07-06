import Footer from "../components/footer";
import Header from "../components/header";
import MenuScreen from "../components/menuGrid";

function Menu() {
    return (
        <div className="bg-about bg-cover">
            <div className="h-screen w-full bg-yellow-100 opacity-50 fixed"></div>
            <Header />
            <MenuScreen />
            <Footer />
        </div>
    )
}

export default Menu;