import React, { useState, useEffect } from 'react'
import { IoIosStar } from 'react-icons/io'
import { Button } from '@/components/ui'
import { FaUser } from 'react-icons/fa'
import { IoDocumentTextSharp } from 'react-icons/io5'
import { FaClock } from 'react-icons/fa'
import { MdOutlineSearch } from 'react-icons/md'
import { APP_PREFIX_PATH } from '@/constants/route.constant'
import reducer, {
    useAppSelector,
    getCoursesData,
    useAppDispatch,
    getCourseDetail,
    findCourseById,
    addPurchasedCourseData,
    getPurchasedCourseData

} from '@/store'
import useAuth from '@/utils/hooks/useAuth'


const CourseListing = ({coursesdata}:any) => {
     const dispatch = useAppDispatch()
  const purchaseCoursesData=useAppSelector((state)=>state.courses.purchasesCoursesData)
  const { authenticated } = useAuth()
  useEffect(() => {
          if (authenticated && purchaseCoursesData && purchaseCoursesData.length==0){
              fetchPurchaseCourseData()
             
          }
      }, [authenticated])
      const isCoursePurchased = (courseId: string) => {
        return purchaseCoursesData.some(
          (item: any) => item.uid === courseId
        );
      };

  const fetchPurchaseCourseData=()=>{
              dispatch(getPurchasedCourseData())
          }
  console.log(coursesdata,"asfdjneoufbaskdjfh")
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
                                <form
                                    action="#"
                                    className="sidebar__search-form"
                                >
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
        const purchased = isCoursePurchased(course.uid); // Check if the course is purchased
        return (
            <div
                key={index}
                className="wow animated fadeInUp"
                data-wow-delay="0.1s"
            >
                <div className="course-page__single">
                    <div className="course-page__single-img">
                        <img
                            src={'/img/courses/course_img6.jpeg'}
                            alt={course.title || 'Course'}
                        />
                        <div className="text">Sale</div>
                    </div>
                    <div className="course-page__single-content">
                        <div className="text-box">
                            <h4>{course.title}</h4>
                        </div>
                        <div className="rating-box">
                            {[...Array(5)].map((_, starIndex) => (
                                <a href="#" key={starIndex}>
                                    <i className="icon-star">
                                        <IoIosStar />
                                    </i>
                                </a>
                            ))}
                            <p>(0)</p>
                        </div>
                        <div className="course-stats">
                            <div>
                                <i>
                                    <FaUser />
                                </i>
                                <span>
                                   
                                        {course.total_enrollments || 0}{' '}
                                    Students
                                </span>
                            </div>
                            <div>
                                <i>
                                    <IoDocumentTextSharp />
                                </i>
                                <span>
                                     {course.total_lessons || 0}{' '}
                                    Lessons
                                </span>
                            </div>
                            <div>
                                <i>
                                    <FaClock />
                                </i>
                                <span>
                                    {course.duration || 'N/A'}
                                </span>
                            </div>
                        </div>
                        <div className="btn-box">
                            <a
                                href={
                                    purchased
                                        ? `${APP_PREFIX_PATH}/my_courses/course_detail/${course.uid}`
                                        : `${APP_PREFIX_PATH}/all_courses/course_detail/${course.uid}`
                                }
                            >
                                {purchased ? 'Start Learning' : 'Enroll Now'}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    })}
</div>



                    <ul className="styled-pagination text-center mt-6 flex justify-center space-x-2">
                        <li>
                            <a href="#">1</a>
                        </li>
                        <li>
                            <a href="#">2</a>
                        </li>
                        <li>
                            <a href="#">3</a>
                        </li>
                        <li className="arrow next active">
                            <a href="#">
                                <span className="icon-left-arrow"></span>
                            </a>
                        </li>
                    </ul>
                </div>
                    
            </section>
            {/* End Shop Page */}
        </div>
  )
}

export default CourseListing
