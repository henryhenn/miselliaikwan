import React from 'react';

export default function Navbar(props){
    function dropdown(){
        const hamburger = document.querySelector("#hamburger");
        const navmenu = document.querySelector("#nav-menu");
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle("hamburger-active");
            navmenu.classList.toggle("hidden");
        });
    }

    return(
        <div id={props.id} className="bg-gradient-to-l from-stone-800 to-amber-900 top-0 w-full items-center z-[999] fixed">
            <div className="lg:px-20 md:px-28 sm:px-4 lg:py-0 md:py-6">
                <div className="flex items-center justify-between">
                    <div className="px-4 block">
                        <a href="#home" className="font-bold block 2xl:text-2xl xl:text-2xl lg:text-2xl sm:text-lg 2xl:py-0 xl:py-0 md:py-0 sm:py-4">Misellia Ikwan</a>
                    </div>
                    <div className="flex items-center px-4">
                        <button id="hamburger" onClick={dropdown} class="block absolute sm:right-8 md:right-32 group lg:hidden">
                            <span className="dropdown-button transition duration-300 origin-top-right"></span>
                            <span className="dropdown-button transition duration-300"></span>
                            <span className="dropdown-button transition duration-300 origin-bottom-right"></span>
                        </button>
                        <nav id="nav-menu" className="hidden absolute p-5 text-stone-700 bg-white shadow-lg rounded-md max-w-[200px] w-full md:right-32 sm:right-8 top-[65px] z-[9999] lg:block lg:static lg:bg-transparent lg:max-w-full lg:text-white lg:shadow-none lg:rounded-none">
                            <ul className="block lg:flex">
                                <li className="group">
                                    <a href="#home" className="flex py-2 px-2 group-hover:text-amber-600 ease-in-out duration-300 items-center"><i className="fa-solid fa-house-chimney-window"></i>&nbsp; Home</a>
                                </li>
                                <li className="group">
                                    <a href="#about" className="flex py-2 px-2 group-hover:text-amber-600 ease-in-out duration-300 items-center"><i class="fa-solid fa-circle-info"></i>&nbsp; About</a>
                                </li>
                                <li className="group">
                                    <a href="#albums" className="flex py-2 px-2 group-hover:text-amber-600 ease-in-out duration-300 items-center"><i class="fa-solid fa-music"></i>&nbsp; Singles & EPs</a>
                                </li>
                                <li className="group">
                                    <a href="#gallery" className="flex py-2 px-2 group-hover:text-amber-600 ease-in-out duration-300 items-center"><i class="fa-solid fa-film"></i>&nbsp; Gallery</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}