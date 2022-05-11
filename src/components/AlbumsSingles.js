import React from 'react'
import Heading from './Heading';
import HatiDanLogika from '../images/albums/hati dan logika.jpeg';
import SelaluAdaHarapan from '../images/albums/selalu ada harapan.jpeg';
import AkhirTakBahagia from '../images/albums/akhir tak bahagia.jpeg';
import CintaSegitiga from '../images/albums/cinta segitiga.jpeg';
import IsiHati from '../images/albums/isi hati.jpeg';
import MusicLinks from './MusicLinks';

export default function AlbumsSingles(props) {
  return (
    <div id={props.id} className="2xl:px-28 xl:px-28 lg:px-20 md:px-32 sm:px-8 pb-24 pt-[120px] text-slate-100 bg-gradient-to-tr from-stone-700 to-stone-900 overflow-hidden" style={{ fontFamily: "Inter" }}>
        <Heading heading="Singles & EPs" />
        <span className="block mx-auto lg:w-[200px] sm:w-[120px] h-[3px] rounded-full bg-amber-700 mt-6"></span>
        <div className="flex flex-wrap mt-16 self-center justify-between album-slide-in text-white ease-in-out duration-[2s]" id="album">
          <div className="p-5 group 2xl:mx-0 xl:mx-0 lg:mx-0 md:mx-auto sm:mx-auto">
              <img src={HatiDanLogika} alt="Hati dan Logika" className="album-cover" />
              <span className="block mt-4 text-center font-semibold group-hover:-translate-y-3 ease-in-out duration-300">Hati Dan Logika | 2021</span>
              <MusicLinks spotify="https://open.spotify.com/album/29EMsuf8aRlusErZzNDrpY?si=Srj0DctaQf6cgrj930SQsg" applemusic="https://music.apple.com/id/album/hati-dan-logika/1596639068?i=1596639070" youtube="https://www.youtube.com/watch?v=q6UmNTwr8L8" />
          </div>
          <div className="p-5 group 2xl:mx-0 xl:mx-0 lg:mx-0 md:mx-auto sm:mx-auto">
              <img src={SelaluAdaHarapan} alt="Hati dan Logika" className="album-cover" />
              <span className="block mt-4 text-center font-semibold group-hover:-translate-y-3 ease-in-out duration-300">Selalu Ada Harapan | 2021</span>
              <MusicLinks spotify="https://open.spotify.com/album/6VEwbrvXprHosw1cWWRZYP?si=br0aj3ItSvyti9nXdstBQQ" youtube="https://www.youtube.com/watch?v=U2MLVdTBejs" />
          </div>
          <div className="p-5 group 2xl:mx-0 xl:mx-0 lg:mx-0 md:mx-auto sm:mx-auto">
              <img src={AkhirTakBahagia} alt="Hati dan Logika" className="album-cover" />
              <span className="block mt-4 text-center font-semibold group-hover:-translate-y-3 ease-in-out duration-300">Akhir Tak Bahagia | 2021</span>
              <MusicLinks spotify="https://open.spotify.com/album/7zv0LcKjGlAUiTXQJzqhSY?si=rs40CihWQSG-k1ApxHHE2w" applemusic="https://music.apple.com/id/album/akhir-tak-bahagia-single/1555612961" youtube="https://www.youtube.com/watch?v=vs-gfy3Pv1c" />
          </div>
          <div className="2xl:flex xl:flex lg:flex md:flex mx-auto sm:block">
            <div className="p-5 group 2xl:mx-0 xl:mx-0 lg:mx-0 md:mx-auto sm:mx-auto">
                <img src={CintaSegitiga} alt="Hati dan Logika" className="album-cover" />
                <span className="block mt-4 text-center font-semibold group-hover:-translate-y-3 ease-in-out duration-300">Cinta Segitiga | 2020</span>
                <MusicLinks spotify="https://open.spotify.com/album/5WJ1E2T7SO7huQwUVnVlKJ?si=EuFe3eOmQlez-FHqvApMWA" applemusic="https://music.apple.com/id/album/cinta-segitiga-single/1533477530" youtube="https://www.youtube.com/watch?v=T3fiPTE0LSo" />
            </div>
            <div className="p-5 group 2xl:mx-0 xl:mx-0 lg:mx-0 md:mx-auto sm:mx-auto">
                <img src={IsiHati} alt="Hati dan Logika" className="album-cover" />
                <span className="block mt-4 text-center font-semibold group-hover:-translate-y-3 ease-in-out duration-300">Isi Hati | 2020</span>
                <MusicLinks spotify="https://open.spotify.com/album/1kNYsUQ9HwARr91ck3KBUR?si=FAOgBiDzTXqFxSagtEeu7Q" applemusic="https://music.apple.com/id/album/isi-hati-single/1530963721" youtube="https://www.youtube.com/watch?v=Vjh2W8ALKno" />
            </div>
          </div>
        </div>
    </div>
  )
}
