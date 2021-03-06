function Footer() {
    return (
        <div className="px-24 py-12 flex flex-col sm:flex-row justify-between bg-green-900 relative z-20">
            <div className="flex flex-row sm:flex-col justify-around">
                <a href="/" className="text-white cursor-pointer">Home</a>
                <a href="/menu" className="text-white cursor-pointer">Menu</a>
                <a href="/about" className="text-white cursor-pointer">About us</a>
            </div>
            <div className="flex flex-col mt-8 sm:mt-0 justify-center text-white">
                <p>3112 W Broadway, Vancouver, BC V6K 2H3</p>
                <p>(604) 730-9700</p>
                <p>Canada</p>
            </div>
        </div>
    )
}

export default Footer;