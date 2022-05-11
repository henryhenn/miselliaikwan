import React from 'react';
import Misellia from '../images/misellia/misel_1.jpg';
import Heading from './Heading';

export default function Hero(props){
    return (
        <div id={props.id} className="2xl:px-28 xl:px-28 lg:px-20 md:px-32 sm:px-8 pb-36 lg:pb-40 pt-[130px] bg-gradient-to-br from-zinc-900 to-zinc-700 overflow-hidden">
            <div className="flex flex-wrap self-center">
                <div className="xl:w-1/2 lg:w-1/2 md:w-full sm:w-full">
                    <div className="relative z-50">
                        <img src={ Misellia } className="lg:mx-0 md:mx-auto sm:mx-auto w-[300px] hover:w-[320px] ease-in-out duration-1000 block rounded-md lg:mt-18 md:mt-10 lg:mb-0 md:mb-10 sm:mb-10" alt="Misellia Ikwan" />
                    </div>
                </div>
                <div className="xl:w-1/2 lg:w-1/2 md:w-full sm:w-full lg:mt-8">
                    <Heading heading="Misellia Ikwan" />
                    <span className="font-bold text-center 2xl:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-sm mt-4 block tracking-wide" style={{ fontFamily: "Inter" }}>Singer&nbsp; | &nbsp;Musician&nbsp; | &nbsp;Songwriter</span>
                    <p className="lg:mt-20 sm:mt-14 block text-left ease-in-out duration-[2.5s] text-slate-100 text-lg hero-slide-in" id="hero-text">
                        <span className="font-bold">Misellia Ikwan</span>, also known as Misellia, is an Indonesian musician, singer, and songwriter. She had the singing talent since she was young and start being a cover musician at her young age. Starting off with making a cover music content on Instagram within 15 seconds video. Untill her video was being reuploaded by a music community on Instagram and made her name to be famous.
                    </p>
                    <a href="#about" className="text-xl text-center block lg:hidden font-semibold xl:mt-4 lg:mt-4 md:mt-6 sm:mt-16 tracking-wide peer ease-in-out duration-1000" style={{ fontFamily: "Inter" }}>More About Misellia</a>
                    <span className="block mx-auto w-0 peer-hover:w-[130px] h-[3px] rounded-full my-2 bg-amber-700 ease-in-out duration-500"></span>
                </div>
            </div>
        </div>
    )
}