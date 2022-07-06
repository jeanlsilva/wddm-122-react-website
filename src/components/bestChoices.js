import americano from "../assets/images/americano.png";
import cappuccino from "../assets/images/cappuccino.png";
import macchiatto from "../assets/images/macchiatto.png";

function BestChoices() {
    return (
        <section id="3" className="md:h-screen py-8 md:py-0 flex flex-col bg-choices bg-cover justify-center px-12 md:px-24">
            <div className="relative z-20">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-green-900">This is our top 3</h2>
                <div className="flex flex-col md:flex-row justify-around">
                    <div className="flex flex-col items-center justify-center opacity-50 hover:opacity-100 transition-all duration-500">
                        <h3 className="2xl font-bold">Americano</h3>
                        <div className="h-72 flex items-center">
                            <img src={americano} alt="item-1" className="w-96" />
                        </div>
                        <p>Lorem ipsum dolor amet</p>
                    </div>
                    <div className="flex flex-col items-center justify-center opacity-50 hover:opacity-100 transition-all duration-500">
                        <h3 className="2xl font-bold">Cappuccino</h3>
                        <div className="h-72 flex items-center">
                            <img src={cappuccino} alt="item-2" className="w-96" />
                        </div>
                        <p>Lorem ipsum dolor amet</p>
                    </div>
                    <div className="flex flex-col items-center justify-center opacity-50 hover:opacity-100 transition-all duration-500">
                        <h3 className="2xl font-bold">Macchiatto</h3>
                        <div className="h-72 flex items-center">
                            <img src={macchiatto} alt="item-3" className="w-96" />
                        </div>
                        <p>Lorem ipsum dolor amet</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BestChoices;