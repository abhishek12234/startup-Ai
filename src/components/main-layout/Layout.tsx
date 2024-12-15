
import { useEffect, useState, useRef } from "react"
import BackToTop from '@/components/elements/BackToTop'
import DataBg from "../elements/DataBg"
import Breadcrumb from './Breadcrumb'
import Sidebar from "./Sidebar"
import Footer1 from './footer/Footer1'
import WOW from 'wow.js';


declare global {
  interface Window {
    wow: any;
  }
}


import Header1 from "./header/Header1"
import Header2 from './header/Header2'
import Header3 from "./header/Header3"
import Header4 from "./header/Header4"


export default function Layout({ headerStyle, footerStyle, headTitle, breadcrumbTitle, children, wrapperCls }:any) {
    const [scroll, setScroll] = useState(false)


    
    const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu)
        !isMobileMenu ? document.body.classList.add("mobile-menu-visible") : document.body.classList.remove("mobile-menu-visible")
    }

    
    const [isPopup, setPopup] = useState(false)
    const handlePopup = () => setPopup(!isPopup)

    
    const [isSidebar, setSidebar] = useState(false)
    const handleSidebar = () => setSidebar(!isSidebar)
    useEffect(() => {
        const wow = new WOW({
            live: false
        });
    
        setTimeout(() => {
            wow.init();
        }, 100);
    
        window.wow = wow;
    
        const handleScroll = () => {
            const scrollCheck = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        };
    
        document.addEventListener("scroll", handleScroll);
    
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, [scroll]);

    return (
        <>
            <DataBg />
            
            <div className={`body-dark-bg `} id="#top" >
                
                {headerStyle == 1 ? <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} /> : null}
                {headerStyle == 2 ? <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} /> : null}
                {headerStyle == 3 ? <Header3 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} /> : null}
                {headerStyle == 4 ? <Header4 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} /> : null}
 


                <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />
              

                {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
                

                {children}
              

                
                {footerStyle == 1 ? < Footer1 /> : null}
                
            </div>
            <BackToTop scroll={scroll} />
        </>
    )
}
