import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import React from 'react';
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { FaPlay } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination1',
        clickable: true,
    },



}
const images=["/assets/img/slider/home_image.jpg","/assets/img/slider/home_image2.jpg","/assets/img/slider/home_image3.jpg"]

export default function Banner() {
    const [isOpen, setOpen] = useState(false)
  return (
    <>
    
    <section className="main-slider main-slider-one">
      <Swiper {...swiperOptions} className="banner-carousel owl-theme owl-carousel owl-nav-none owl-dots-none">   
        {images.map((ImageUrl)=>
        (               
        <SwiperSlide className="swiper-slide">
          <div className="image-layer" style={{backgroundImage: `url(${ImageUrl})`}}>
            </div>
            <div className="shape1"><img src="/assets/img/shape/slider-v1-shape1.png" alt=""/></div>
            <div className="container px-5 py-5">
                <div className="main-slider-one__single">
                    <div className="main-slider-one__content">
                        <div className="shape2 float-bob-x"><img src="/assets/img/shape/slider-v1-shape2.png"
                                alt=""/></div>
                        <div className='main-slider-one__content-container'>
                        <h3>Cosmic</h3>
                        <h2>Exploration</h2>
                        <div className="btn-box">
                            <div className="btn-one">
                                <a className="thm-btn" href="/contact">
                                    <span className="txt">Discover More</span>
                                </a>
                            </div>
                            <div className="btn-two">
                                <a onClick={() => setOpen(true)} className="video-popup" data-fancybox="video-1" data-caption="">
                                    <div className="main-slider-one__icon">
                                        <i ><FaPlay/></i>
                                        <span>Watch Our Videos</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        </div>
                        <div className='contact-info-footer'>

                        <div className="contact-info">
                            <ul>
                                <li>
                                    <div className="icon-box">
                                        <span> <IoLocationOutline/></span>
                                    </div>
                                    <div className="text-box">
                                        <p>465 NT Road. North West, England</p>
                                    </div>
                                </li>

                                <li>
                                    <div className="icon-box">
                                        <span><FaRegEnvelope/></span>
                                    </div>
                                    <div className="text-box">
                                        <p><a href="mailto:yourmail@email.com">needhelpxafran@gmail.cpm</a>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        ))
    }
        
        <div className="swiper-pagination1 swiper-pagination1-clickable swiper-pagination1-bullets" id="main-slider-one__pagination">
            <span className="swiper-pagination1-bullet swiper-pagination1-bullet-active"  role="button" aria-label="Go to slide 1"></span>
            <span className="swiper-pagination1-bullet" role="button" aria-label="Go to slide 2"></span>
            <span className="swiper-pagination1-bullet" role="button" aria-label="Go to slide 3"></span>
        </div>
      </Swiper>
    </section>
    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
    </>
  );
};

