import React, { useState, useEffect, useRef } from 'react'
import MessageBox from './components/MessageBox'
import AudioVisualizer from './components/AudioVisualizer'
import MarkdownDisplay from './components/MarkdownDisplay'
import { FaChevronLeft } from 'react-icons/fa'
import { FaArrowRotateLeft } from 'react-icons/fa6'
import 'regenerator-runtime/runtime'
import MessageInput from './components/MessageInput'
import useResponsive from '@/utils/hooks/useResponsive'
const TeachingPage = () => {
    const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null)
    const { larger, smaller, windowWidth } = useResponsive()
    const [chatMessages, setChatMessages] = useState<string[]>([])
    const [activeMobileVisual,setMobileVisual]=useState<boolean | undefined>(false)
    const [dotAnimation,setDotAnimation]=useState<any>(false)
    console.log(smaller)
    
    const md_content = `# Notable Exoplanetary Systems
## Introduction

Exoplanetary systems, which consist of planets orbiting stars beyond our Sun, have garnered significant attention from astronomers and the general public due to their remarkable diversity and potential to support life. The discovery of the first exoplanet in 1995 marked the beginning of a new era in astronomy, and since then, thousands of these celestial bodies have been identified, showcasing complex and unique characteristics.

![Image relevant to early exoplanet discovery](https://github.com/user-attachments/assets/de087b29-ea76-46d1-8690-20681615e18f)

## TRAPPIST-1 System
The TRAPPIST-1 system is a fascinating exoplanetary system that has garnered significant attention in recent years. Located in the habitable zone of its star, at least three of the planets in this system are considered potential candidates for hosting liquid water and, by extension, life.

### Key Features of the TRAPPIST-1 System
The TRAPPIST-1 system is set to be an important target for observation with the James Webb Space Telescope, which will enable researchers to gain a deeper understanding of these distant worlds. A team of Canadian astronomers will be utilizing the Canadian-made Near-Infrared Imager and Slitless Spectrograph (NIRISS) instrument to study the atmospheres of TRAPPIST-1 d, f, and g.

![Artist's concept of star TRAPPIST-1 and its seven exoplanets](https://github.com/user-attachments/assets/588ad340-7830-4332-9aa6-81e8f4b71172)

## HR 8799 System
The HR 8799 system is a notable example of an exoplanetary system. It features a star, HR 8799, and its four orbiting exoplanets. To gain a deeper understanding of this system, you can watch the following video:`
   
    return (
        <>
            <div className="teaching-page-container relative">
                <div className="teaching-page-content">
                    <div className="markdown-content-container prose prose-base markdown-content max-w-[100%]">
                        <div className="course-title-container">
                            <div className="course-sub-title">
                                <h5>
                                    <span>Chapter One:</span> Types Of Exoplanets
                                </h5>
                               
                                
                            </div>
                            <i className="chevron-icon">
                                <FaChevronLeft />
                            </i>
                        </div>
                        <div className="reset-icon">
                            <i>
                                <FaArrowRotateLeft />
                            </i>
                        </div>

                        <MarkdownDisplay mdContent={md_content} />
                        
                    </div>

                    {!smaller.sm?(
                    <div className="course-side-container">
                        <AudioVisualizer dotAnimation={dotAnimation} audioElement={audioElement} initialHeight={[15,15,15,15]} intensity={50} />

                        <MessageBox setDotAnimation={setDotAnimation} setAudioElement={setAudioElement}/>
                    </div>):(
                    <>
                    <MessageInput setDotAnimation={setDotAnimation} setAudioElement={setAudioElement} activeMobileVisual={activeMobileVisual} setMobileVisual={setMobileVisual}/>
                    <div className={`mobile-visulization-conatiner w-full ${activeMobileVisual?"active-mobile-visulization-conatiner":""}`} >
                    <AudioVisualizer dotAnimation={dotAnimation} activeMobileVisual={activeMobileVisual} initialHeight={[13,13,13,13]} audioElement={audioElement} intensity={30}/>
                    </div>
                    </>
                    )}
                </div>
                
              
            </div>
        </>
    )
}
export default TeachingPage
