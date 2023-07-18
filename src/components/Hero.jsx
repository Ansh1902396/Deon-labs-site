const Hero = () => {
    return (
        <main
            id="hero"
            className="flex flex-col items-center z-10 bg-black pb-44 relative pt-32">
            <p className="text-white bg-clip-text text-transparent text-center font-tektur text-5xl md:text-6xl lg:text-8xl font-bold pb-20px mt-[120px]">
                Web3 Ecosystem
                <br /> Enabler
            </p>
            <div className="flex flex-col items-center flex-shrink-0 pt-20px pb-20px">
                <p className="text-white text-center font-poppins text-xl font-normal leading-normal opacity-60 ltr:ms-[500px]  md:text-2xl">
                    Deon Labs is your In-house Web3 Ecosystem builder driving
                    paradigm <br /> shift into Web3 Ecosystems.
                </p>
            </div>
            <a href="https://calendly.com/vinaystwt/30min" target="_blank">
                <button className="bg-[#FF306E] text-white p-3 px-5  items-baseline align-middle  rounded-lg font-semibold">
                    <h1 className=" opacity-100">Build Web3 ecosystem</h1>
                </button>
            </a>
            <div className="absolute w-full h-full hero-bg" />
        </main>
    );
};
export default Hero;

//bg-gradient-to-r from-red-500 to-yellow-300

