import cafe from "../assets/videos/cafe.mp4";

function Hero() {
    return (
        <section className="h-screen">
            <div className="w-full h-full absolute -top-12">
                <video autoPlay loop muted>
                    <source src={cafe} type="video/mp4" />
                </video>
            </div>
            <div className="h-full px-24 max-w-3xl flex flex-col justify-center relative z-20">
                <h2 className="text-xl my-2 text-green-900">
                    Maybe you've had already taken a good coffee some day... but trust me,
                </h2>
                <h1 className="text-6xl my-2 font-medium leading-normal text-green-900">
                    You had never taken a coffee like the one we do at 
                    <span className="font-bold"> Cofee Cof</span>
                </h1>
                <button 
                    className="my-2 text-left text-xl bg-white rounded-full p-3 text-center w-48 
                    hover:bg-green-900 hover:text-white transition-all duration-500 text-xl font-medium"
                >
                    Show me that
                </button>
            </div>
        </section>
    )
}

export default Hero;