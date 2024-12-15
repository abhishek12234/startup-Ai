import { FaPaperPlane } from "react-icons/fa";
export default function Footer1() {
    return (
        <>
            {/*Start Footer One */}
            <footer className="footer-one" data-scroll-section>
                <div className="shape1">
                <img className="float-bob-y" src="assets/img/shape/footer-v1-shape1.png" alt=""/>
                </div>
                {/*Start Footer Main */}
                <div className="footer-main">
                    <div className="container mx-auto px-10">
                    <div className="flex flex-col md:flex-row justify-between">
                           
                            {/*Start Single Footer Widget */}
                            <div className="wow fadeInUp" data-wow-delay=".1s">
                                <div className="single-footer-widget footer-widget__about">
                                    <div className="logo-box">
                                        <div><img src="/assets/img/resource/logo-1.png" alt="" /></div>
                                    </div>
                                    <div className="footer-widget__about-inner">
                                        <div className="text-box">
                                            <p>Address 301 Princes Street, Ei class <br />
                                                Mahall Damietta Egypt-104 </p>
                                        </div>
                                        <div className="number-box">
                                            <a>+1 343 5335 3545</a>
                                        </div>
                                        <div className="footer-social-link">
                                            <a>tw</a>
                                            <a>in</a>
                                            <a>db</a>
                                            <a>ig</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*End Single Footer Widget */}

                            {/*Start Single Footer Widget */}
                            <div className="wow fadeInUp" data-wow-delay=".2s">
                                <div className="single-footer-widget footer-widget__links">
                                    <div className="title">
                                        <h2 className="text-lg font-bold">Navigation</h2>
                                    </div>
                                    <div className="footer-widget__links-box">
                                        <ul >
                                            <li><a>Home</a></li>
                                            <li><a>About Us</a></li>
                                            <li><a>Services</a></li>
                                            <li><a>Contact Us</a></li>
                                            <li><a>Our Blog</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/*End Single Footer Widget */}

                            {/*Start Single Footer Widget */}
                            <div className="wow fadeInUp" data-wow-delay=".3s">
                                <div className="single-footer-widget footer-widget__links quick-link">
                                    <div className="title">
                                        <h2>Quick Link</h2>
                                    </div>
                                    <div className="footer-widget__links-box">
                                        <ul >
                                            <li><a>Help</a></li>
                                            <li><a>Support</a></li>
                                            <li><a>Clients</a></li>
                                            <li><a>Shop</a></li>
                                            <li><a>Portfolio</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/*End Single Footer Widget */}

                            {/*Start Single Footer Widget */}
                            <div className="wow fadeInUp" data-wow-delay=".4s">
                                <div className="single-footer-widget footer-widget__newsletter">
                                    <div className="title">
                                        <h2 >Newsletter</h2>
                                    </div>
                                    <div className="footer-widget__newsletter-box">
                                        <div className="footer-widget__newsletter-text">
                                            <p>Subscribe our newsletter to get the <br />
                                                latest news & updates</p>
                                        </div>
                                        <form className="footer-widget__newsletter-form">
                                            <div className="input-box">
                                                <input type="email" placeholder="email@example.com" name="email" />
                                                <button type="submit" className="footer-widget__newsletter-form-btn">
                                                    <i className="icon-telegram"><FaPaperPlane/></i>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            {/*End Single Footer Widget */}
                        </div>
                    </div>
                </div>
                {/*End Footer Main */}

                {/*Start Footer Bottom */}
                <div className="footer-bottom">
                    <div className="container mx-auto">
                        <div className="footer-bottom__inner">
                            <div className="footer-bottom__text text-center">
                                
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Footer Bottom */}
            </footer>
            {/*End Footer One */}
        </>
    );
}
