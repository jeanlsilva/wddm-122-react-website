function Header() {
    return (
        <div className="h-[8vh] px-24 w-full fixed z-30 py-3 flex justify-between bg-green-900 opacity-90">
            <div className="flex-1">
                <h1 className="text-2xl font-bold text-white hover:text-yellow-200 transition-all duration-500 cursor-pointer">Coffee Cof</h1>
            </div>
            <div className="flex-1 flex justify-around items-center">
                <a href="/" className="text-sm text-white cursor-pointer hover:text-yellow-200 transition-all duration-500">Home</a>
                <a href="/menu" className="text-sm text-white cursor-pointer hover:text-yellow-200 transition-all duration-500">Menu</a>
                <a href="/about" className="text-sm text-white cursor-pointer hover:text-yellow-200 transition-all duration-500">About us</a>
            </div>
        </div>
    )
}

export default Header;