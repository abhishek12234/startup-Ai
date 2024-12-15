import React from 'react'

import { HiOutlineUserGroup } from "react-icons/hi2";
import { PiBookOpenText } from "react-icons/pi";
import { PiGraduationCap } from "react-icons/pi";
const Features = () => {
  return (

        
        <div className="why-choose-us-one">
            <div className="w-full bg-[var(--thm-black)] relative">
            
            <img className="absolute bottom-0 left-0 w-[700px] h-auto" src="/featured_background.png" alt="" />
                <div className="row flex justify-end">
                <div className="overlay"></div>

                   
                    {/*Start Why Choose Us Content */}
                    <div className="w-[500px] mr-6 wow animated fadeInLeft" data-wow-delay="0.1s">
                    
                        <div className="why-choose-us-one__content my-11">
                            <ul>
                                <li>
                                    <div className="inner">
                                        <div className="icon-box">
                                            <span><HiOutlineUserGroup/></span>
                                        </div>
                                        <div className="content-box">
                                            <h2>AI Teaching</h2>
                                            <p>Through a unique coN construction and design discipl
                                                nes expertise Concor and delivers </p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="inner">
                                        <div className="icon-box">
                                            <span className="icon-bed"><PiBookOpenText/></span>
                                        </div>
                                        <div className="content-box">
                                            <h2>The Joy of Best Living</h2>
                                            <p>Through a unique coN construction and design discipl
                                                nes expertise Concor and delivers </p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="inner">
                                        <div className="icon-box">
                                            <span className="icon-targeted"><PiGraduationCap/></span>
                                        </div>
                                        <div className="content-box">
                                            <h2>Professional Planning</h2>
                                            <p>Through a unique coN construction and design discipl
                                                nes expertise Concor and delivers </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/*End Why Choose Us Content */}
                </div>
            </div>
        </div>

  )
}

export default Features
