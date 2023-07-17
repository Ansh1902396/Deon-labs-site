import NavBar from "./Navbar";

const companies = [
    "./polygon.png",
    "./solana.png",
    "./flow.png",
    "./amazon.svg",
    

    //-----
   
    
    // "Hashed Emergent",
    // "Xinfin Network",
    // "Zcash",
];

const partners = [
    "./ipfs.png",
    "./shardeum.png",
    "./google.png",
    "./5ire.svg",
    
]

const organizations = [
    "./filcoin.png",
    "./binance.png",
    "./chainlink.png",
    "./aurora.png",
    
]
const friends = [
    "./topl.png", 
    "./Hashed_Emergent.jpg",
]
const Companies = () => {
    const onMouseIn = (e) => {
        const cursor = document.querySelector("#cursor").firstChild;
        cursor.innerHTML = `<div class="cursor-text">${
            e.target.src.split("/").pop().split(".")[0]
        }</div>`;
    };

    const onMoueOut = () => {
        const cursor = document.querySelector("#cursor").firstChild;
        cursor.innerText = "";
    };

    return (
        <div id="partners" className="flex flex-col justify-center items-center w-[100vw] bg-black pb-28 md:space-y-24">

            <div className="md:space-y-10">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-center font-inter text-5xl md:text-6xl lg:text-5xl  pb-20px mt-[120px] tracking-[0.1em] font-medium ">OUR PARTNERS</h1>
            <p className="text-white text-center font-poppins text-2xl font-normal leading-normal opacity-60 md:px-3  ">
            We contributed to building a revolutionary ecosystem for some of the leading <br /> blockchains, Defi, GameFi, and Infrastructure projects. 
                </p>
            </div>
            <div className="md:space-y-10">
            <div className="flex md:space-x-48">
                    
                    {companies.map((company, idx) => (
                        <div
                            key={`${company}#${idx}`}
                            className="md:m-5 w-10  md:w-28 flex">
                            <img
                                src={company}
                                alt=""
                                className="object-contain "
                                onMouseEnter={onMouseIn}
                                onMouseLeave={onMoueOut}
                            />
                        </div>
                    ))}
                </div>

                <div className="flex md:space-x-48">
                    
                    {partners.map((partner, idx) => (
                        <div
                            key={`${partner}#${idx}`}
                            className="md:m-5 w-10 md:w-28 flex">
                            <img
                                src={partner}
                                alt=""
                                className="object-contain"
                                onMouseEnter={onMouseIn}
                                onMouseLeave={onMoueOut}
                            />
                        </div>
                    ))}
                </div>

                <div className="flex md:space-x-48">
                    
                    {organizations.map((organization, idx) => (
                        <div
                            key={`${organization}#${idx}`}
                            className="md:m-5 w-10 md:w-28 flex">
                            <img
                                src={organization}
                                alt=""
                                className="object-contain"
                                onMouseEnter={onMouseIn}
                                onMouseLeave={onMoueOut}
                            />
                        </div>
                    ))}
                </div>
                <div className="flex md:space-x-48">
                    
                    {friends.map((friend, idx) => (
                        <div
                            key={`${friend}#${idx}`}
                            className="md:m-5 w-14 md:w-28 flex">
                            <img
                                src={friend}
                                alt=""
                                className="object-contain"
                                onMouseEnter={onMouseIn}
                                onMouseLeave={onMoueOut}
                            />
                        </div>
                    ))}
                </div>
            </div>
                
        </div>
    );
};
export default Companies;
