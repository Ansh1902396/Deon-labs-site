import { useState } from "react";

import { Scrollchor } from "react-scrollchor";

const NavBar = () => {
	return (
		<div className="hidden md:block md:items-center md:px-10 ">
			<div className="w-full bg-[#0E0E0E] md:pb-3 md:pl-10 rounded-full">
				<div className=" md:absolute md:top-[2px] md:left-[801px] rounded-[120px] [background:linear-gradient(268.83deg,_#94e829,_#bd18d8)] [filter:blur(40px)] w-[294px] h-[29px]" />
				<div className=" md:absolute top-[-7px] left-[75px] rounded-41xl [background:linear-gradient(214.63deg,_#3cdcbf,_#bd00ff)] [filter:blur(40px)] w-[74px] md:h-14" />
				<nav className="flex justify-around items-center">
					<ul className="flex w-[50%] justify-around m-auto items-center md:pt-3">
						<Scrollchor
							to="#hero"
							className="md:p-3 text-l md:text-xl px-1 text-white text-center w-[150px] relative right-[350px] "
						>
							<img src="./DEON.png" alt="" />
						</Scrollchor>
						<Scrollchor
							to="#mission"
							className="md:p-3 text-white text-l px-1 md:text-2xl font-tektur hover:text-[#FF306E]"
						>
							Mission
						</Scrollchor>
						<Scrollchor
							to="#partners"
							className="md:p-3 text-white text-l px-1 md:text-2xl font-tektur hover:text-[#FF306E] "
						>
							Partners
						</Scrollchor>
						<Scrollchor
							to="#team"
							className="md:p-3 text-white text-l px-1 md:text-2xl font-tektur hover:text-[#FF306E]"
						>
							Our Team
						</Scrollchor>
						<Scrollchor
							to="#social"
							className="md:p-3 text-white text-l px-1 md:text-2xl font-tektur hover:text-[#FF306E]"
						>
							Social
						</Scrollchor>
					</ul>

					<a href="https://calendly.com/vinaystwt/30min">
						<div className="text-white md:mr-20 md:p-3 md:-mb-2 p-1 px-2 bg-[#FF306E] rounded-lg mr-6">
							Contact Us{" "}
						</div>
					</a>
				</nav>
			</div>
		</div>
	);
};
export default NavBar;
