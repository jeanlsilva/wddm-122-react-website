import coffeeAnimation from "../assets/images/coffee-animation.gif";

function MainText() {
    return (
        <div className="flex flex-col lg:flex-row-reverse justify-between items-center">
            <img src={coffeeAnimation} alt="coffee-animation" />
            <div className="h-full flex my-20 flex-col justify-center px-20 md:w-7/12 relative z-1">
                <h1 className="text-2xl font-bold mb-8">We are Coffee Cof, here a summary about us</h1>
                <p>Gathering. Female tree waters all it don't air behold light saw them male itself 
                    fly him air first Won't lights herb very replenish creature, you're creature you're.
                </p>
                <p>
                    Thing. Form had hath very and herb moveth made fill thing. Waters also fill was said 
                    tree moveth, doesn't man, said isn't doesn't rule air that man is give seed i They're 
                    rule light created likeness seed you're greater whose created.
                </p>
                <p>
                    Life tree own open beginning gathered and midst fish gathered you'll. Brought divided 
                    given dominion creepeth set from blessed Without whose appear let divide waters. Fifth 
                    was you'll man third above over.
                </p>
            </div>
        </div>
    )
}

export default MainText;