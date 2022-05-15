import React from 'react'
import Misellia_1 from '../images/misellia/misel_6.jpg';
import Misellia_5 from '../images/misellia/misel_5.jpg';
import Misellia_26 from '../images/misellia/misel_26.jpg';
import Misellia_27 from '../images/misellia/misel_27.jpg';
import Misellia_28 from '../images/misellia/misel_28.jpg';

export default function About(props) {
  return (
    <div id={props.id} className="2xl:px-28 xl:px-28 lg:px-20 md:px-32 sm:px-8 pb-[70px] 2xl:pt-[100px] xl:pt-[100px] lg:pt-[100px] md:pt-[80px] sm:pt-[80px] text-stone-800 mt-16 overflow-hidden">
        <h3 className="xl:text-6xl lg:text-6xl md:text-5xl sm:text-4xl font-extrabold text-center leading-10 cursor-default about-heading-slide-in ease-in-out duration-[1s] hover:-translate-y-4" id="about-heading">Happy Birthday, Misell!</h3>
        <span className="block mx-auto lg:w-[200px] sm:w-[130px] h-[3px] rounded-full mt-4 bg-amber-700"></span>
        <div className="flex flex-wrap lg:mt-24 sm:mt-14 self-center">
            <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 sm:w-full">
                <div className="relative sm:mb-16 md:mb-14 about-image-slide-in ease-in-out duration-[2s]" id="about-image">
                    <img src={ Misellia_1 } className="2xl:l-0 xl:ml-0 lg:ml-0 md:mx-auto sm:mx-auto 2xl:w-[340px] xl:w-[340px] lg:w-[320px] md:w-[300px] sm:w-[280px] sm:hover:w-[300px] md:hover:w-[320px] lg:hover:w-[340px] xl:hover:w-[360px] 2xl:hover:w-[360px] ease-in-out duration-500 block rounded-md xl:mt-0 lg:mt-0 md:mt-10 sm:mt-4" alt="Misellia Ikwan" />
                    <h1 className="sm:text-[10rem] lg:text-[12rem] absolute bottom-0 sm:translate-y-[100px] lg:translate-y-[130px] sm:translate-x-[180px] text-transparent bg-clip-text bg-gradient-to-br from-white to-amber-800 pointer-events-none">18</h1>
                </div>
            </div>
            <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 sm:w-full p-10 bg-gradient-to-br text-white rounded-lg flex items-center from-yellow-600 to-amber-700  overflow-hidden">
                <p className="text-lg indent-8 ease-in-out duration-[2s] overflow-hidden about-slide-in-right" id="about-text-right">
                    <i>Happy 18<sup>th</sup> birthday, Misell! Wishing you all the best, especially for your career as a musician and may your birthday be filled with happiness, joy, and blessings. Always be happy because you will never be as young as you are today. Enjoy your day, princess!</i>
                </p>
            </div>
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 hover:gap-10 group lg:mt-32 sm:mt-20">
            <img src={Misellia_5}  alt="Misellia Ikwan" className="w-[300px] group-hover:rounded-lg hover:-translate-y-4 ease-in-out duration-300" />
            <img src={Misellia_27} alt="Misellia Ikwan" className="w-[300px] group-hover:rounded-lg hover:-translate-y-4 ease-in-out duration-300" />
            <img src={Misellia_26} alt="Misellia Ikwan" className="w-[300px] group-hover:rounded-lg hover:-translate-y-4 ease-in-out duration-300" />
            <img src={Misellia_28} alt="Misellia Ikwan" className="w-[300px] group-hover:rounded-lg hover:-translate-y-4 ease-in-out duration-300" />
        </div>
    </div>
  )
}