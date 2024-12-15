import { IoShareSocialSharp } from "react-icons/io5";
import { FaInstagram, FaFacebookF, FaLinkedinIn} from "react-icons/fa";

export default function Team() {
    return (
        <>
            
            {/*Start Team Two */}
            <section className="team-two">
                <div className="containe">
                    <div className="sec-title text-center">
                        <div className="sub-title">
                            <h5>OUR TEAM MEMBER</h5>
                        </div>
                        <h2>Our Talented Team <br/>
                            Member Behind Xafran</h2>
                    </div>
                    <div className="row grid gap-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-center ">
                        {/*Start Team Two Single */}
                        <div className="wow fadeInUp" data-wow-delay=".3s">
                            <div className="team-two__single">
                                <div className="team-two__single-img">
                                    <div className="inner">
                                        <img src="/assets/img/team/team-v2-img1.jpg" alt=""/>
                                    </div>

                                    <div className="content-box">
                                        <h3><a href="/team-details">Saiful Islam</a></h3>
                                        <p>Developer</p>
                                    </div>
                                    <ul className="social-links clearfix">
                                        <li className="share"><a href="#"><span className="icon-share"><IoShareSocialSharp/></span></a>
                                            <ul className="social-links-inner">
                                                <li><a href="#"><i className="icon-aedin-big-logo"><FaLinkedinIn/></i></a></li>
                                                <li><a href="#"><i className="icon-instagram"><FaInstagram/></i></a>
                                                </li>
                                                <li><a href="#"><i className="icon-facebook"><FaFacebookF/></i></a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*End Team Two Single */}

                        {/*Start Team Two Single */}
                        <div className="wow fadeInDown" data-wow-delay=".3s">
                            <div className="team-two__single">
                                <div className="team-two__single-img">
                                    <div className="inner">
                                        <img src="/assets/img/team/team-v2-img2.jpg" alt=""/>
                                    </div>

                                    <div className="content-box">
                                        <h3><a href="/team-details">Janes Cooper</a></h3>
                                        <p>Designer</p>
                                    </div>
                                    <ul className="social-links clearfix">
                                        <li className="share"><a href="#"><span className="icon-share"><IoShareSocialSharp/></span></a>
                                            <ul className="social-links-inner">
                                                <li><a href="#"><i className="icon-aedin-big-logo"><FaLinkedinIn/></i></a></li>
                                                <li><a href="#"><i className="icon-instagram"><FaInstagram/></i></a>
                                                </li>
                                                <li><a href="#"><i className="icon-facebook"><FaFacebookF/></i></a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*End Team Two Single */}

                        {/*Start Team Two Single */}
                        <div className="wow fadeInUp" data-wow-delay=".3s">
                            <div className="team-two__single">
                                <div className="team-two__single-img">
                                    <div className="inner">
                                        <img src="/assets/img/team/team-v2-img3.jpg" alt=""/>
                                    </div>

                                    <div className="content-box">
                                        <h3><a href="/team-details">James Bond</a></h3>
                                        <p>Creator</p>
                                    </div>
                                    <ul className="social-links clearfix">
                                        <li className="share"><a href="#"><span className="icon-share"><IoShareSocialSharp/></span></a>
                                            <ul className="social-links-inner">
                                                <li><a href="#"><i className="icon-aedin-big-logo"><FaLinkedinIn/></i></a></li>
                                                <li><a href="#"><i className="icon-instagram"><FaInstagram/></i></a>
                                                </li>
                                                <li><a href="#"><i className="icon-facebook"><FaFacebookF/></i></a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*End Team Two Single */}

                        {/*Start Team Two Single */}
                        <div className="wow fadeInUp" data-wow-delay=".3s">
                            <div className="team-two__single">
                                <div className="team-two__single-img">
                                    <div className="inner">
                                        <img src="/assets/img/team/team-v2-img3.jpg" alt=""/>
                                    </div>

                                    <div className="content-box">
                                        <h3><a href="/team-details">James Bond</a></h3>
                                        <p>Creator</p>
                                    </div>
                                    <ul className="social-links clearfix">
                                        <li className="share"><a href="#"><span className="icon-share"><IoShareSocialSharp/></span></a>
                                            <ul className="social-links-inner">
                                                <li><a href="#"><i className="icon-aedin-big-logo"><FaLinkedinIn/></i></a></li>
                                                <li><a href="#"><i className="icon-instagram"><FaInstagram/></i></a>
                                                </li>
                                                <li><a href="#"><i className="icon-facebook"><FaFacebookF/></i></a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*End Team Two Single */}
                    </div>
                </div>
            </section>
            {/*End Team Two */}

        </>
    )
}
