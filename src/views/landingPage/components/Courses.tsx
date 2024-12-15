export default function Courses() {
    return (
        <>
            {/*Start Project One */}
            <section className="project-one">
                <div className="container mx-auto px-4">
                    <div className="sec-title text-center">
                        <div className="sub-title">
                            <h5>OUR RECENT COURSES</h5>
                        </div>
                        <h2>
                            Courses We Designed <br />
                            Check Our Work
                        </h2>
                    </div>
                    <div className="grid gap-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-center">
                        {/*Start Project One Single */}
                        <div className="courses_card">
                            <img
                                className="courses_card__background "
                                src="/img/courses/course_img2.png"
                                alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                                
                            />
                            <div className="courses_card__content | flow">
                                <div className="courses_card__content--container | flow">
                                    <h2 className="courses_card__title">Colombia <span >Space</span></h2>
                                    <p className="courses_card__description">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Rerum in labore
                                        laudantium deserunt fugiat numquam.
                                    </p>
                                </div>
                                <button className="courses_card__button">Read more</button>
                            </div>
                        </div>
                        {/*End Project One Single */}

                        {/*Start Project One Single */}
                        <div className="courses_card">
                            <img
                                className="courses_card__background"
                                src="/img/courses/course_img3.png"
                                alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                            
                            />
                            <div className="courses_card__content | flow">
                                <div className="courses_card__content--container | flow">
                                    <h2 className="courses_card__title">Colombia <span >Space</span></h2>
                                    <p className="courses_card__description">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Rerum in labore
                                        laudantium deserunt fugiat numquam.
                                    </p>
                                </div>
                                <button className="courses_card__button">Read more</button>
                            </div>
                        </div>
                        {/*End Project One Single */}

                        {/*Start Project One Single */}
                        <div className="courses_card">
                            <img
                                className="courses_card__background "
                                src="/img/courses/course_img6.jpeg"
                                alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                                width="1920"
                                height="2193"
                            />
                            <div className="courses_card__content | flow">
                                <div className="courses_card__content--container | flow">
                                    <h2 className="courses_card__title">Colombia <span >Space</span></h2>
                                    <p className="courses_card__description">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Rerum in labore
                                        laudantium deserunt fugiat numquam.
                                    </p>
                                </div>
                                <button className="courses_card__button">Read more</button>
                            </div>
                        </div>
                        {/*End Project One Single */}

                        {/*Start Project One Single */}
                        <div className="courses_card">
                            <img
                                className="courses_card__background "
                                src="/img/courses/course_img5.png"
                                alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                                width="1920"
                                height="2193"
                            />
                            <div className="courses_card__content | flow">
                                <div className="courses_card__content--container | flow">
                                    <h2 className="courses_card__title">Colombia <span>Space</span></h2>
                                    <p  className="courses_card__description">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Rerum in labore
                                        laudantium deserunt fugiat numquam.
                                    </p>
                                </div>
                                <button className="courses_card__button">Read more</button>
                            </div>
                        </div>
                        {/*End Project One Single */}
                    </div>
                </div>
            </section>
            {/*End Project One */}
        </>
    )
}
