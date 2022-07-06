import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="h-[8vh] px-24 w-full fixed z-30 py-3 flex justify-between bg-green-900 opacity-90">
            <div className="flex-1">
                <Link to="/">
                    <h1 className="text-2xl font-bold text-white hover:text-yellow-200 transition-all ease-in-out duration-500 cursor-pointer">Coffee Cof</h1>
                </Link>
            </div>
            <div className="flex-1 flex justify-around items-center">
                <Link to="/wddm-122-react-website" className="text-sm text-white cursor-pointer hover:text-yellow-200 transition-all ease-in-out duration-500">Home</Link>
                <Link to="/wddm-122-react-website/menu" className="text-sm text-white cursor-pointer hover:text-yellow-200 transition-all ease-in-out duration-500">Menu</Link>
                <Link to="/wddm-122-react-website/about" className="text-sm text-white cursor-pointer hover:text-yellow-200 transition-all ease-in-out duration-500">About</Link>
            </div>
        </div>
    )
}

export default Header;