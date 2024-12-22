import React, { useEffect } from 'react'
import { IoIosStar } from 'react-icons/io'
import { FaUser } from 'react-icons/fa'
import { IoDocumentTextSharp } from 'react-icons/io5'
import { FaClock } from 'react-icons/fa'
import { MdOutlineSearch } from 'react-icons/md'
import { APP_PREFIX_PATH } from '@/constants/route.constant'
import { useAppSelector, useAppDispatch, getPurchasedCourseData } from '@/store'
import useAuth from '@/utils/hooks/useAuth'
import { Link } from 'react-router-dom'

const CourseListing = ({ coursesdata }: any) => {
    const dispatch = useAppDispatch()
    const purchaseCoursesData = useAppSelector((state) => state.courses.purchasesCoursesData)


    const isCoursePurchased = (courseId: string) => {
        return purchaseCoursesData.some((item: any) => item.uid === courseId)
    }

   

    return (
        <div>
            {/* Start Shop Page */}
            <section className="course-page">
                <div className="container">
                    <div className="course-page__top">
                        <div className="course-page__top-inner">
                            <div className="course-page__top-left">
                                <p>
                                    Showing {coursesdata?.length || 0} results
                                </p>
                            </div>
                            <div className="sidebar__single sidebar__search">
                                <form className="sidebar__search-form">
                                    <input
                                        type="search"
                                        placeholder="Keywords here...."
                                    />
                                    <button type="submit">
                                        <i className="fa fa-search text-[28px]">
                                            <MdOutlineSearch />
                                        </i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {coursesdata?.map((course, index) => {
                            const purchased = isCoursePurchased(course.uid)
                            return (
                                <div
                                    key={index}
                                    className="wow animated fadeInUp"
                                    data-wow-delay="0.1s"
                                >
                                    <div className="course-page__single">
                                        <div className="course-page__single-img">
                                            <img
                                                src={
                                                    '/img/courses/course_img6.jpeg'
                                                }
                                                alt={course.title || 'Course'}
                                            />
                                            <div className="text">Sale</div>
                                        </div>
                                        <div className="course-page__single-content">
                                            <div className="text-box">
                                                <h4>{course.title}</h4>
                                            </div>
                                            <div className="rating-box">
                                                {[...Array(5)].map(
                                                    (_, starIndex) => (
                                                        <Link
                                                            to="#"
                                                            key={starIndex}
                                                        >
                                                            <i className="icon-star">
                                                                <IoIosStar />
                                                            </i>
                                                        </Link>
                                                    ),
                                                )}
                                                <p>(0)</p>
                                            </div>
                                            <div className="course-stats">
                                                <div>
                                                    <i>
                                                        <FaUser />
                                                    </i>
                                                    <span>
                                                        {course.total_enrollments ||
                                                            0}{' '}
                                                        Students
                                                    </span>
                                                </div>
                                                <div>
                                                    <i>
                                                        <IoDocumentTextSharp />
                                                    </i>
                                                    <span>
                                                        {course.total_lessons ||
                                                            0}{' '}
                                                        Lessons
                                                    </span>
                                                </div>
                                                <div>
                                                    <i>
                                                        <FaClock />
                                                    </i>
                                                    <span>
                                                        {course.duration ||
                                                            'N/A'}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="btn-box">
                                                <Link
                                                    to={`${APP_PREFIX_PATH}/${purchased ? 'my_courses' : 'all_courses'}/course_detail/${course.uid}`}
                                                >
                                                    {purchased
                                                        ? 'Start Learning'
                                                        : 'Enroll Now'}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <ul className="styled-pagination text-center mt-6 flex justify-center space-x-2">
                        <li>
                            <Link to="#">1</Link>
                        </li>
                        <li>
                            <Link to="#">2</Link>
                        </li>
                        <li>
                            <Link to="#">3</Link>
                        </li>
                        <li className="arrow next active">
                            <Link to="#">
                                <span className="icon-left-arrow"></span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
            {/* End Shop Page */}
        </div>
    )
}

export default CourseListing
