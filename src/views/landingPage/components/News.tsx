import { FaPlus } from "react-icons/fa6";
export default function News() {
    return (
        <>
            {/*Start Blog One */}
            <section className="blog-one style2">
                <div className="blog-two__bg" style={{ backgroundImage: 'url(/assets/img/background/blog-v2-bg.png)' }}></div>
                <div className="container px-6">
                    <div className="sec-title text-center">
                        <div className="sub-title">
                            <h5>OUR BLOG POST</h5>
                        </div>
                        <h2>Read Our Latest News</h2>
                    </div>
                    <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/*Start Blog One Single */}
                        <div className="wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="blog-one__single">
                                <div className="blog-one__single-img">
                                    <div className="inner">
                                        <img src="/assets/img/blog/blog-v2-img1.jpg" alt="" />
                                        <div className="overlay-icon">
                                            <a href="#"><span className="icon-plus"><FaPlus/></span></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-one__single-content">
                                    <ul className="meta-info">
                                        <li>
                                            <p><a href="#">Development</a></p>
                                        </li>
                                        <li>
                                            <p>02 July, 2023</p>
                                        </li>
                                    </ul>
                                    <h2><a href="/blog-details">Architecture is a Visual Art <br />
                                        the Buildings Speak For </a></h2>
                                    <div className="btn-box">
                                        <a href="/blog-details">READ MORE <span className="icon-plus"><FaPlus/></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End Blog One Single */}

                        {/*Start Blog One Single */}
                        <div className="wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1500ms">
                            <div className="blog-one__single">
                                <div className="blog-one__single-img">
                                    <div className="inner">
                                        <img src="/assets/img/blog/blog-v2-img2.jpg" alt="" />
                                        <div className="overlay-icon">
                                            <a href="#"><span className="icon-plus"><FaPlus/></span></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-one__single-content">
                                    <ul className="meta-info">
                                        <li>
                                            <p><a href="#">Development</a></p>
                                        </li>
                                        <li>
                                            <p>02 July, 2023</p>
                                        </li>
                                    </ul>
                                    <h2><a href="/blog-details">Architecture is a Visual Art <br />
                                        the Buildings Speak For </a></h2>
                                    <div className="btn-box">
                                        <a href="/blog-details">READ MORE <span className="icon-plus"><FaPlus/></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End Blog One Single */}

                        {/*Start Blog One Single */}
                        <div className="wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="blog-one__single">
                                <div className="blog-one__single-img">
                                    <div className="inner">
                                        <img src="/assets/img/blog/blog-v2-img3.jpg" alt="" />
                                        <div className="overlay-icon">
                                            <a href="#"><span className="icon-plus"><FaPlus/></span></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-one__single-content">
                                    <ul className="meta-info">
                                        <li>
                                            <p><a href="#">Development</a></p>
                                        </li>
                                        <li>
                                            <p>02 July, 2023</p>
                                        </li>
                                    </ul>
                                    <h2><a href="/blog-details">Architecture is a Visual Art <br />
                                        the Buildings Speak For </a></h2>
                                    <div className="btn-box">
                                        <a href="/blog-details">READ MORE <span className="icon-plus"><FaPlus/></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End Blog One Single */}
                    </div>

                </div>
            </section>
            {/*End Blog One */}

        </>
    )
}
