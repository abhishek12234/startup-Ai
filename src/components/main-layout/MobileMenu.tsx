import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import navigationConfig from "@/configs/navigation.config"; // Import your navigation configuration
import { FaFacebookF,FaTwitter,FaLinkedinIn,FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";




export default function MobileMenu({ isSidebar, handleMobileMenu, handleSidebar }: any) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 0,
    });

    const handleToggle = ({ key }: any) => {
        if (isActive.key === key && isActive.status) {
            setIsActive({
                status: false,
                key: 0,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };

    return (
        <>
            <div className="mobile-menu">
                <nav className="menu-box">
                    <div className="close-btn1" onClick={handleMobileMenu}><IoMdClose /></div>
                    <div className="nav-logo">
                        <a href="/"><img src="/assets/img/resource/logo-2.png" alt="Logo" /></a>
                    </div>
                    <div className="menu-outer">
                        <ul className="navigation clearfix">
                            {navigationConfig.map((item, index) => (
                                <li key={index} className={item.subMenu ? "menu-item-has-children" : ""}>
                                    <a href={item.path} onClick={handleMobileMenu}>{item.label}</a>

                                    {/* Render subMenu if available */}
                                    {item.subMenu && item.subMenu.length > 0 && (
                                        <>
                                            <ul style={{ display: `${isActive.key === index + 1 ? "block" : "none"}` }}>
                                                {item.subMenu.map((subItem, subIndex) => (
                                                    <li key={subIndex}>
                                                        <a href={subItem.path} onClick={handleMobileMenu}>{subItem.label}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className={isActive.key === index + 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle({ key: index + 1 })}>
                                                <span className="fa fa-angle-right" />
                                            </div>
                                        </>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="contact-info">
                        <div className="icon-box"><span className="icon-call"></span></div>
                        <p><a href="tel:123456789">(629) 555-0129</a></p>
                    </div>
                    <div className="social-links">
                        <ul className="clearfix list-wrap">
                            <li><a href="#"><i className="fab fa-facebook-f"> <FaFacebookF/></i></a></li>
                            <li><a href="#"><i className="fab fa-twitter"><FaTwitter/></i></a></li>
                            <li><a href="#"><i className="fab fa-instagram"><RiInstagramFill/></i></a></li>
                            <li><a href="#"><i className="fab fa-aedin-in"> <FaLinkedinIn/></i></a></li>
                            <li><a href="#"><i className="fab fa-youtube"><FaYoutube/></i></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="menu-backdrop" onClick={handleMobileMenu}></div>
            <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />
        </>
    );
}
