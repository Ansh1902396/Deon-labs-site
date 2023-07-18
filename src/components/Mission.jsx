const Mission = () => {
    return (
        <div
            id="mission"
            className="flex flex-col items-center pt-[100px] md:pb-[200px] flex-shrink-0  relative">
            {/* <img src="./decor-2.png" alt=""  className="w-full absolute -z-1"/> */}
            <p className="text-white bg-clip-text text-transparent text-center font-tektur text-5xl px-9 md:text-8xl font-bold pb-20px z-10">
                United by Web3
                <br /> Ecosystem
            </p>
            <div className="flex flex-col items-center  flex-shrink-0 pt-20px pb-20px">
                <p className="text-white text-center font-[Inter] text-xl md:text-2xl font-normal leading-normal opacity-60 ">
                We aim to empower web3 brands with exceptional ecosystems.
Deon has got you covered, whether it's on-ground events,<br /> hackathons, product marketing, or brand expansion.
                </p>
            </div>
        </div>
    );
};
export default Mission;

//bg-gradient-to-r from-red-500 to-yellow-300

