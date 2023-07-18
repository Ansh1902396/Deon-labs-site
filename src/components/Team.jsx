const companies = [
    "./kleros.png",
    "./BanklessDAO.png",
    "./TheDappList.png",
    "./RouterProtocol.png",
    "./SuperteamDAO.png",
    "./gitopia.png",
    "./gari.png",
    

    //-----

    // "Hashed Emergent",
    // "Xinfin Network",
    // "Zcash",
];

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
        <div
            id="team"
            className="flex flex-col justify-center items-center w-full bg-black md:pb-28 space-y-20">
            <div className="md:space-y-10">
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-center font-inter  md:text-6xl lg:text-5xl  md:mt-[120px] md:tracking-[0.1em] text-2xl font-medium">
                    BUILT BY A TEAM FROM
                </h1>
                <p className="text-white text-center font-poppins md:text-2xl  font-normal leading-normal opacity-60  md:px-8">
                    We have assembled a team of web3 avengers from some of the{" "}
                    <br /> leading web3 companies to build your
                    dream web3 company.
                </p>
            </div>

            <div className="md:px-11">
                <ul className="flex flex-wrap md:space-x-24 md:p-0 justify-center">
                    {companies.map((company, idx) => (
                        <div
                            key={`${company}#${idx}`}
                            className="md:m-5 md:w-[6rem] w-14 m-4 flex">
                            <img
                                src={company}
                                alt=""
                                className="object-contain"
                                onMouseEnter={onMouseIn}
                                onMouseLeave={onMoueOut}
                            />
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default Companies;

