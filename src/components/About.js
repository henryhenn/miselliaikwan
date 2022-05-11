import React from 'react'
import Misellia_1 from '../images/misellia/misel_6.jpg';
import Misellia_9 from '../images/misellia/misel_9.jpg';

export default function About(props) {
  return (
    <div id={props.id} className="2xl:px-28 xl:px-28 lg:px-20 md:px-32 sm:px-8 pb-[100px] 2xl:pt-[100px] xl:pt-[100px] lg:pt-[100px] md:pt-[80px] sm:pt-[80px] text-stone-800 mt-16 overflow-hidden">
        <h3 className="xl:text-6xl lg:text-6xl md:text-5xl sm:text-4xl font-extrabold text-center leading-10 cursor-default about-heading-slide-in ease-in-out duration-[1s] hover:-translate-y-4" id="about-heading">Happy Birthday, Misell!</h3>
        <span className="block mx-auto lg:w-[200px] sm:w-[130px] h-[3px] rounded-full my-10 bg-amber-700"></span>
        <div className="flex flex-wrap lg:mt-24 sm:mt-14 self-center">
            <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 sm:w-full">
                <div className="relative sm:mb-20 md:mb-14">
                    <img src={ Misellia_1 } className="2xl:l-0 xl:ml-0 lg:ml-0 md:mx-auto sm:mx-auto 2xl:w-[340px] xl:w-[340px] lg:w-[320px] md:w-[300px] sm:w-[280px] sm:hover:w-[300px] md:hover:w-[320px] lg:hover:w-[340px] xl:hover:w-[360px] 2xl:hover:w-[360px] ease-in-out duration-500 block rounded-md xl:mt-0 lg:mt-0 md:mt-10 sm:mt-10" alt="Misellia Ikwan" />
                    <h1 className="sm:text-[10rem] lg:text-[12rem] absolute bottom-0 sm:translate-y-[100px] lg:translate-y-[130px] sm:translate-x-[180px] text-transparent bg-clip-text bg-gradient-to-br from-white to-amber-800">18</h1>
                </div>
            </div>
            <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 sm:w-full text-stone-700">
                <p className="indent-8 ease-in-out duration-[2s] overflow-hidden about-slide-in-right" id="about-text-right">
                    Misellia Ikwan, also <i>well-known</i> as Misell, is a musician, <i>YouTuber</i>, and songwriter born in May 18<sup>th</sup>, 2004 at Surabaya, East Java. Her first content was a singing clip in 15 seconds uploaded to Instagram when she was 9 years old, exact when she was grade 4<sup>th</sup> junior school. At December 10<sup>th</sup> 2013, Misell decided to join YouTube and upload her first music cover clip. YouTubers like Boyce Avenue, MusicNeverSleeps, and Joseph Vincent motivate her a lot to make singing video. From here, she thought she could share her works also to let many people knew if she also could sing. Then, Misell start to attract many public attention when a music community on Instagram re-post her works. Many positive response were given due to her capability to sing at her very young age. 
                </p>
            </div>
        </div>
        <div className="flex flex-wrap mt-10 self-center">
            <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full">
                <p className="ease-in-out duration-[2s] overflow-hidden text-stone-700 indent-8 about-slide-in-left" id="about-text-left">
                    Misell was a student at St. Louis 1 Senior High School. Because of her school's strict rules and busy of making content, she decided to take homeschooling to equalize her music career and also her education. She has a dream to be a music producer. Sophisticated in singing many music genres, she had many collaboration with other music content creator like ECLAT, indomusicgram, UN1TY, SurabayaBoys, and more. Besides covering music, Misell frequently upload many content to her YouTube channel like travelling vlog, challenge, and many more. Misell also has many collaboration with famous brand like Grab, GoWell cereal, and education startup Ruangguru.
                </p>
            </div>
            <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full">
                <div className="relative sm:mb-20 md:mb-14">
                    <img src={Misellia_9} className="2xl:mr-8 xl:mr-8 lg:mr-8 md:mx-auto sm:mx-auto 2xl:w-[340px] xl:w-[340px] lg:w-[320px] md:w-[300px] sm:w-[280px] 2xl:hover:w-[360px] xl:hover:w-[360px] lg:hover:w-[340px] md:hover:w-[320px] sm:hover:w-[300px] ease-in-out duration-500 block rounded-md xl:mt-0 lg:mt-0 md:mt-10 sm:mt-10" alt="Misellia Ikwan" />
                    <div className="absolute sm:py-[170px] md:py-[180px] lg:py-[180px] xl:py-[205px] 2xl:py-[205px] 2xl:px-[160px] sm:px-[140px] md:px-[150px] lg:px-[160px] xl:px-[170px] bottom-0 translate-y-[20px] 2xl:translate-x-[230px] xl:translate-x-[180px] lg:translate-x-[100px] md:translate-x-[240px] sm:translate-x-[50px] -z-20 rounded-md bg-gradient-to-br from-gray-400 to-gray-800"></div>
                </div>
            </div>
        </div>
    </div>
  )
}
