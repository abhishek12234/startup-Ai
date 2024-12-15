import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
import UserDropdown from "@/components/template/UserDropdown"
import useAuth from "@/utils/hooks/useAuth"
import { useNavigate } from "react-router-dom"
export default function Header3({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }:any) {
    const { authenticated } = useAuth()
    const navigate = useNavigate();
    return (
        <>
            {/* <header className="main-header header-style-three"> */}
            
            <header className={`main-header main-header-one style2 style3 ${scroll ? "" : ""}`}>
                <div className={`menu-area ${scroll ? "sticky-menu" : ""}`}>
                    {/* header-lower */}
                    <div className="auto-container">
                    <div className="menu-area__inner">
                        <div className="mobile-nav-toggler" onClick={handleMobileMenu}><i className="fas fa-bars"></i></div>
                        <div className="menu-wrap">
                            <nav className="menu-nav">
                                <div className="main-header-one__inner">
                                    <div className="main-header-one__left">
                                        <div className="logo-box">
                                            <a href="/"> <img src="/assets/img/resource/logo-2.png" alt=""/></a>
                                        </div>
                                    </div>

                                    <div className="main-header-one__middle">
                                            <div className="navbar-wrap main-menu">
                                                <Menu/>
                                            </div>
                                        </div>

                                    <div className="main-header-one__right">
                                            
                                    {authenticated?<UserDropdown/>:(<div className="flex gap-x-3">                        
                                            <a href="/sign-in" className="ed-btn  !px-2 !w-[80px] !h-[40px]   !text-[12px] !bg-transparent border border-[var(--thm-primary)] text-[var(--thm-primary)] hover:!bg-[var(--thm-primary)] hover:!text-white">Log In</a>
                                            <a onClick={()=>{navigate(`/sign-up`,{replace:true})}} className="ed-btn !px-2 !w-[80px] gap-[10px] !h-[40px] !text-[12px]">Sign Up</a>
                                            </div>)}
                                         
                                           
                                      </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                </div>
                <MobileMenu handleMobileMenu={handleMobileMenu} isSidebar={isSidebar} handleSidebar={handleSidebar} />
            </header>
            
        </>
    )
}
