import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { useRef } from "react";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },
    loop: true,
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    }
}

const teamMembers = [
    {
        name: 'Abhishek Jain',
        profession: 'Engineer',
        imgSrc: '/assets/img/team/member1.png',
    },
    {
        name: 'Ishan Purohit',
        profession: 'Developer',
        imgSrc: '/assets/img/team/member2.png',
    },
    {
        name: 'Rudra Prajapati',
        profession: 'Developer',
        imgSrc: '/assets/img/team/member3.png',
    },
    {
        name: 'Bhavin Prajapati',
        profession: 'Designer',
        imgSrc: '/assets/img/team/member4.png',
    },
    {
        name: 'Dyutideepta Banerjree',
        profession: 'Designer',
        imgSrc: '/assets/img/team/member5.png',
    },
    {
        name: 'Ayush Kumawat',
        profession: 'Designer',
        imgSrc: '/assets/img/team/member6.png',
    }
];

export default function TeamSlider2() {

    return (
        <>
              <Swiper
                {...swiperOptions}
            
                className="thm-swiper__slider swiper-container"
            >
               
                    {/*Start Team One Single */}
                {teamMembers.map((member, index) => (
                <SwiperSlide key={index} className="swiper-slide">
                    <div className="team-one__single">
                        <div className="team-one__single-img">
                            <div className="inner">
                                <img src={member.imgSrc} alt={member.name} className="w-[440px] h-[415px] object-cover"/>
                                <div className="team-one__single-icon">
                                    <ul className="social-links clearfix">
                                        <li className="share">
                                            <a href="#"><span className="icon-share"><IoShareSocialSharp/></span></a>
                                            <ul className="social-links-inner">
                                                <li><a className="fb" href="#"><i className="icon-facebook-1"><FaInstagram/></i></a></li>
                                                <li><a className="tw" href="#"><i className="icon-letter-v"><FaFacebookF/></i></a></li>
                                                <li><a className="ins" href="#"><i className="icon-letter-x"><FaLinkedinIn/></i></a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="team-one__single-content">
                            <h3><a href="/team-details">{member.name}</a></h3>
                            <p>{member.profession}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
          
        </Swiper>


        </>
    )
}
