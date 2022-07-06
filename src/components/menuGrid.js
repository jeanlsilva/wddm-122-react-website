import MenuItem from "./menuItem";
import coffeeImg1 from "../assets/images/coffee-img-1.jpg";
import coffeeImg2 from "../assets/images/coffee-img-2.jpg";
import coffeeImg3 from "../assets/images/coffee-img-3.jpg";
import coffeeImg4 from "../assets/images/coffee-img-4.jpg";
import coffeeImg5 from "../assets/images/coffee-img-5.jpg";
import coffeeImg6 from "../assets/images/coffee-img-6.jpg";
import coffeeImg7 from "../assets/images/coffee-img-7.jpg";
import coffeeImg8 from "../assets/images/coffee-img-8.jpg";

function MenuGrid() {
    return (
        <div className="flex flex-col justify-center p-20 relative z-1">
            <h1 className="text-3xl text-green-900 my-12">
                We have plenty of options, choose the one who best suits you
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 h-2/3">
                <MenuItem 
                    title="Americano" 
                    description="Lorem ipsum sit dolor amet" 
                    price={12}
                    img={coffeeImg1} 
                />
                <MenuItem 
                    title="Capuccino" 
                    description="Lorem ipsum sit dolor amet" 
                    price={17}
                    img={coffeeImg2}
                />
                <MenuItem 
                    title="Macchiatto" 
                    description="Lorem ipsum sit dolor amet" 
                    price={16}
                    img={coffeeImg3} 
                />
                <MenuItem 
                    title="Latte" 
                    description="Lorem ipsum sit dolor amet" 
                    price={18}
                    img={coffeeImg4} 
                />
                <MenuItem 
                    title="Decaf" 
                    description="Lorem ipsum sit dolor amet" 
                    price={17}
                    img={coffeeImg5} 
                />
                <MenuItem 
                    title="Café au lait" 
                    description="Lorem ipsum sit dolor amet" 
                    price={16}
                    img={coffeeImg6} 
                />
                <MenuItem 
                    title="Cortado" 
                    description="Lorem ipsum sit dolor amet" 
                    price={19}
                    img={coffeeImg7} 
                />
                <MenuItem 
                    title="Mocha" 
                    description="Lorem ipsum sit dolor amet" 
                    price={21}
                    img={coffeeImg8} 
                />
            </div>
        </div>
    )
}

export default MenuGrid;