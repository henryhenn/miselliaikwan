import React from 'react'
import Heading from './Heading';
import Misel_11 from '../images/misellia/misel_11.jpg';
import Misel_12 from '../images/misellia/misel_12.jpg';
import Misel_23 from '../images/misellia/misel_23.jpg';
import Misel_7 from '../images/misellia/misel_7.jpg';
import Misel_22 from '../images/misellia/misel_22.jpg';
import Misel_13 from '../images/misellia/misel_13.jpg';
import Misel_20 from '../images/misellia/misel_20.jpg';
import Misel_24 from '../images/misellia/misel_24.jpg';
import Misel_17 from '../images/misellia/misel_17.jpg';
import Misel_4 from '../images/misellia/misel_4.jpg';
import Misel_15 from '../images/misellia/misel_15.jpg';
import Misel_16 from '../images/misellia/misel_16.jpg';

export default function Gallery(props) {
  return (
      <div id={props.id} className="lg:px-28 sm:px-10 pt-28 pb-32 text-stone-800 overflow-hidden">
        <Heading heading="Gallery" />
        <span className="block mx-auto lg:w-[100px] sm:w-[70px] h-[3px] rounded-full my-2 bg-amber-700 mt-3"></span>
        <div className="flex gap-10 justify-between flex-wrap mt-16 self-center gallery-slide-in duration-[1.5s] ease-in-out" id="photos">
          <div className="gallery-card">
            <img src={Misel_11} className="lg:w-[265px] rounded-md" id="1" alt="Misellia Ikwan" />
          </div>
          <div className="gallery-card ">
            <img src={Misel_17} className="lg:w-[250px] rounded-md" id="2" alt="Misellia Ikwan" />
          </div>
          <div className="gallery-card flex items-center">
            <img src={Misel_23} className="lg:w-[250px] rounded-md" id="3" alt="Misellia Ikwan" />
          </div>
          <div className="gallery-card">
            <img src={Misel_22} className="lg:w-[265px] rounded-md" id="4" alt="Misellia Ikwan" />
          </div>
          <div className="gallery-card">
            <img src={Misel_12} className="lg:w-[250px] rounded-md" id="5" alt="Misellia Ikwan" />
          </div>
          <div className="gallery-card">
            <img src={Misel_13} className="lg:w-[250px] rounded-md" id="6" alt="Misellia Ikwan" />
          </div>
          <div className="gallery-card">
            <img src={Misel_20} className="lg:w-[265px] rounded-md" id="7" alt="Misellia Ikwan" />
          </div>
          <div className="gallery-card">
            <img src={Misel_24} className="lg:w-[263px] rounded-md" id="8" alt="Misellia Ikwan" />
          </div>
          <div className="gallery-card">
            <img src={Misel_7} className="lg:w-[250px] rounded-md" id="9" alt="Misellia Ikwan" />
          </div>
          <div className="gallery-card">
            <img src={Misel_4} className="lg:w-[265px] rounded-md" id="10" alt="Misellia Ikwan" />
          </div>
          <div className="gallery-card">
            <img src={Misel_16} className="lg:w-[265px] rounded-md" id="11" alt="Misellia Ikwan" />
          </div>
          <div className="gallery-card">
            <img src={Misel_15} className="lg:w-[250px] rounded-md" id="12" alt="Misellia Ikwan" />
          </div>
        </div>
      </div>
  )
}
