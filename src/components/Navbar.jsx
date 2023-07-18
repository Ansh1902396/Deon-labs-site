import { useState } from "react";

import { Scrollchor } from "react-scrollchor";

const NavBar = () => {
    const [show, setShow] = useState(false);

    return (
        <div className="md:block w-full md:items-center md:px-10 fixed z-20 px-10">
            <div className="w-full bg-[#0E0E0E] md:pb-3 rounded-b-3xl">
                <div className="hidden md:block md:absolute md:top-[2px] md:left-[801px] rounded-[120px] [background:linear-gradient(268.83deg,_#94e829,_#bd18d8)] [filter:blur(40px)] w-[294px] h-[29px]" />
                <div className=" hidden md:block md:absolute top-[-7px] left-[75px] rounded-41xl [background:linear-gradient(214.63deg,_#3cdcbf,_#bd00ff)] [filter:blur(40px)] w-[74px] md:h-14" />
                <nav className="flex justify-around items-center mx-5">
                    <ul className="flex w-full justify-between items-center m-auto md:pt-3 max-md:my-2">
                        <div className="flex items-center space-x-7">
                            <img
                                src="/menu.svg"
                                className="w-10 h-10 md:hidden"
                                alt=""
                                onClick={() => {
                                    setShow(!show);
                                }}
                            />
                            <Scrollchor
                                to="#hero"
                                // className="md:p-3 px-1 py-3 mb-5 w-[100px] md:w-[150px] md:relative right-[350px] "
                                className="flex-none w-[100px] relative left-[90px] 2xl::w-[150px]">
                                <img src="./DEON.png" alt="" />
                            </Scrollchor>
                        </div>
                        <div className="md:flex flex-row grow justify-center hidden">
                            <Scrollchor
                                to="#mission"
                                className="hidden md:block md:p-3 text-white text-sm px-1 md:text-2xl font-tektur hover:text-[#FF306E]">
                                Mission
                            </Scrollchor>
                            <Scrollchor
                                to="#partners"
                                className=" hidden  md:p-3 md:block text-white text-sm text-l px-1 md:text-2xl font-tektur hover:text-[#FF306E] ">
                                Partners
                            </Scrollchor>
                            <Scrollchor
                                to="#team"
                                className=" hidden md:block md:p-3 text-white text-sm text-l px-1 md:text-2xl font-tektur hover:text-[#FF306E]">
                                Our Team
                            </Scrollchor>
                            <Scrollchor
                                to="#social"
                                className=" hidden md:block md:p-3 text-white text-sm px-1 md:text-2xl font-tektur hover:text-[#FF306E]">
                                Social
                            </Scrollchor>
                        </div>
                        {/* <a href="https://calendly.com/vinaystwt/30min" target="_blank">
                        <div className="flex-none text-white md:p-3 p-1 px-2 bg-[#FF306E] rounded-lg">
                            Contact Us{" "}
                        </div>
                        </a> */}
                    </ul>
                </nav>
                {/* Mobile Nav */}
                <div
                    className={`m-3 mx-5 pb-5 transition-all text-2xl  text-white ${
                        show
                            ? "flex flex-col gap-y-4 animate-fade-down animate-once animate-ease-in-out"
                            : "hidden"
                    }`}>
                    
                    <Scrollchor
                        to="#mission"
                        className="font-tektur hover:text-[#FF306E]">
                        Mission
                    </Scrollchor>
                    <Scrollchor
                        to="#partners"
                        className="font-tektur hover:text-[#FF306E] ">
                        Partners
                    </Scrollchor>
                    <Scrollchor
                        to="#team"
                        className="font-tektur hover:text-[#FF306E]">
                        Our Team
                    </Scrollchor>
                    <Scrollchor
                        to="#social"
                        className="font-tektur hover:text-[#FF306E]">
                        Social
                    </Scrollchor>
                </div>
            </div>
        </div>
    );
};
export default NavBar;

