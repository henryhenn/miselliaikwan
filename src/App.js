import React from 'react'
import Hero from './components/Hero';
import About from './components/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AlbumsSingles from './components/AlbumsSingles';
import Gallery from './components/Gallery';

export default function App() {
  window.onscroll = function (){
        const hero_text = document.querySelector("#hero-text");
        const hero_more = document.querySelector("#hero-more");
        const about = document.querySelector("#about");
        const about_image = document.querySelector("#about-image");
        const hero_number = document.querySelector("#hero-number");
        const about_offset = about.offsetTop;
        const about_text_right = document.querySelector("#about-text-right");
        const albums = document.querySelector("#albums");
        const album_offset = albums.offsetTop;
        const album = document.querySelector("#album");
        const gallery = document.querySelector("#gallery");
        const gallery_offset = gallery.offsetTop;
        const photos = document.querySelector("#photos");
        const navbar = document.querySelector("#navbar");
        const about_heading = document.querySelector("#about-heading");
        const hero_more_offset = hero_more.offsetTop;

        if(window.pageYOffset >= about_offset){
            navbar.classList.add("navbar-shadow");
        } else {
            navbar.classList.remove("navbar-shadow");
        }

        if(window.pageYOffset){
            hero_text.classList.remove('hero-slide-in');
            hero_more.classList.remove('hero-more-slide-in'); 
            hero_number.classList.add("hero-number-slide-in");
        }

        if(window.pageYOffset >= about_offset){
          about_text_right.classList.remove('about-slide-in-right');
        }
        
        if(window.pageYOffset >= hero_more_offset){
          about_heading.classList.remove('about-heading-slide-in');
          about_image.classList.remove("about-image-slide-in");
        }

        if(window.pageYOffset >= album_offset){
            album.classList.remove('album-slide-in');
        }

        if(window.pageYOffset >= gallery_offset){
            photos.classList.remove('gallery-slide-in');
        }
    } 
  return (
    <div className="App">
      <Navbar id="navbar" />
      <Hero id="home" />
      <About id="about" />
      <Gallery id="gallery" />
      <AlbumsSingles id="albums" />
      <Footer />
    </div>
  );
}
