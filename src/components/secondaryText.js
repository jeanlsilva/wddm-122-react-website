import aboutImg from "../assets/images/about-photo.jpg";

function SecondaryText() {
    return (
        <div className="flex flex-col md:flex-row justify-between relative px-20 mb-20 z-1">
            <img src={aboutImg} alt="about" className="w-full md:w-1/3 lg:w-1/4" />
            <div className="h-full flex flex-col justify-center w-full md:w-7/12">
                <h1 className="text-2xl font-bold mb-8 mt-8 md:mt-0">When all of this began...</h1>
                <p>
                    Divide. A saying beginning moveth spirit. Beginning moved evening creeping him night. 
                    For behold, had fill forth may air Land living rule, evening. Form lesser thing 
                    gathering second own isn't itself sixth creature fish.
                </p>
                <p>
                    Set won't can't evening. Creepeth won't they're brought dominion i. She'd. Is 
                    gathering dominion moveth were creepeth abundantly won't, winged gathering form 
                    Gathered. Male own you'll let. Every subdue creature.
                </p>
                <p>
                    Male they're was land wherein brought female third. Fruit saw thing land which meat 
                    unto you're isn't us, fish after fill brought multiply seed kind for herb behold all 
                    behold gathering gathering form years years. Dry.
                </p>
            </div>
        </div>
    );
}

export default SecondaryText;
