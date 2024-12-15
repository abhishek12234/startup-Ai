import React from 'react'
import { MdWavingHand } from "react-icons/md";
const TeacherAbout = () => {
    return (
        <section className="feauture-three overflow-hidden">
            <div className="container  px-8">
                <div className="flex flex-wrap flex-row-reverse items-center">
                    {/*Start Feauture Three Img */}
                    <div
                        className="w-full xl:w-2/5 wow animated fadeInRight"
                        data-wow-delay="0.7s"
                    >
                        <div className="feauture-three__img bg-[url('/assets/img/resource/teacher_background.png')] bg-cover relative">
                            <div className="feauture-three__teacher relative flex justify-center ">
                                <img
                                    className="h-[330px] w-fit border-[3px] border-[var(--thm-primary)]  shadow-[0_15px_25px_rgba(0,0,0,0.6)] z-20 "
                                    src="/assets/img/new_ai_teacher.jpg"
                                    alt=""
                                    
                                />
                            </div>
                        </div>
                    </div>

                    <div className="w-full xl:w-3/5 wow animated fadeInLeft" data-wow-delay="0.2s">
                        <div className="feauture-three__content">
                            <div className="sec-title">
                                <div className="sub-title">
                                    <h5 className="text-sm">
                                        OUR AI TEACHER 
                                    </h5>
                                </div>
                                <h2 className="text-4xl">
                                    He will Guide  You<br />
                                    Through the Wonders of Space
                                </h2>
                            </div>

                            <div className="text-box">
                                <p>
                                    Arki features minimal and stylish design.
                                    The theme is well crafted for all the modern
                                    architect and interior design website. With
                                    Arki, it makes your website look even more
                                    attractive and impressive to
                                </p>
                            </div>
                            <div className="btn-box">
                                <a className="thm-btn rounded-[5px]" href="#">
                                    <span className='txt'>Say hello </span>
                                    <span className='ml-2 text-[17px] text-yellow-300 txt'><MdWavingHand/></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/*End Feauture Three Content */}
                </div>
            </div>
        </section>
    )
}

export default TeacherAbout
