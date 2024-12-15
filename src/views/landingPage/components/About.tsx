import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'
import { FaPlay } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
const About = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            {/* Start About Two */}
            <section className="about-two">
                <div className="container mx-auto px-4">
                    <div className="row flex flex-wrap ">
                        {/* Start About Two Img */}
                        <div className="w-full xl:w-1/2 ">
                            <div className="about-two__img">
                                <div
                                    className="about-two__img1 wow animated fadeInLeft"
                                    data-wow-delay="200ms"
                                    data-wow-duration="1500ms"
                                >
                                    <div className="inner">
                                        <img
                                            className="w-[550px] h-auto"
                                            src="/assets/img/about/space_background.jpg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div
                                    className="about-two__img2 wow animated fadeInRight bg-[url('/assets/img/about/space_video.png')] bg-cover bg-center"
                                    data-wow-delay="200ms"
                                    data-wow-duration="1500ms"
                                >
                                    
                                    <div className="about-two__video-btn">
                                        <a
                                            onClick={() => setOpen(true)}
                                            className="about-two__icon video-popup cursor-pointer"
                                        >
                                            <span className="icon-play-button-1"><FaPlay/></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End About Two Img */}

                        {/* Start About Two Content */}
                        <div className="w-full xl:w-1/2 ">
                            <div className="about-two__content">
                                <div className="sec-title">
                                    <div className="sub-title">
                                        <h5>KNOW ABOUT XAFRAN</h5>
                                    </div>
                                    <h2>
                                        We Take Care of <br /> Everything for
                                        Your Goals
                                    </h2>
                                </div>

                                <div className="about-two__content-text">
                                    <p>
                                        Nullam eu nibh vitae est tempor molestie
                                        id sed ex. Quisque dignissim maximus
                                        ipsum, sed rutrum metus tincidunt et.
                                        Sed eget tincidunt ipsum. Eget tincidunt
                                    </p>
                                </div>

                                <div className="about-two__content-list">
                                    <ul>
                                        <li>
                                            <p>
                                                <span className="icon-verified"><FaCheckCircle/></span>{' '}
                                                Feasibility Studies
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <span className="icon-verified"><FaCheckCircle/></span>{' '}
                                                Conceptual Design
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <span className="icon-verified"><FaCheckCircle/></span>{' '}
                                                Custom design & feature
                                            </p>
                                        </li>
                                    </ul>
                                </div>

                                <div className="about-two__content-bottom flex flex-wrap items-center justify-between">
                                    <div className="author-box flex items-center">
                                        <div className="img-box">
                                            <img
                                                src="assets/img/about/about-v2-img3.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="signature">
                                            <img
                                                src="assets/img/about/signature-1.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>

                                    <div className="btn-box">
                                        <div className="thm-btn mr-[0px] mt-[15px] md:mr-[30px] md:mt-[0px]">
                                            <span className="txt">
                                                Discover More
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End About Two Content */}
                    </div>
                </div>
            </section>
            {/* End About Two */}

            <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="vfhzo499OeA"
                onClose={() => setOpen(false)}
            />
        </>
    )
}

export default About
