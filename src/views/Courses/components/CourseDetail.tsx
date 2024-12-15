import React, { useState, useEffect } from 'react'
import Affix from '@/components/shared/Affix'
import { LuCalendarDays } from 'react-icons/lu'
import { FaRegClock } from 'react-icons/fa6'
import { HiOutlineUsers } from 'react-icons/hi'
import { GrCertificate } from 'react-icons/gr'
import { GrLanguage } from 'react-icons/gr'
import { MdOutlinePlayLesson } from 'react-icons/md'
import { IoIosStar } from 'react-icons/io'
import { HiOutlineUser } from 'react-icons/hi'
import Avatar from '@/components/ui/Avatar/Avatar'
import { FaArrowRightLong } from 'react-icons/fa6'
import { FaTwitter } from 'react-icons/fa6'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaLock } from 'react-icons/fa6'
import { IoPlayCircleOutline } from 'react-icons/io5'
import { FaRegStar } from 'react-icons/fa6'
import useAuth from '@/utils/hooks/useAuth'
import { useNavigate } from 'react-router-dom';
import { APP_PREFIX_PATH } from '@/constants/route.constant'

const CourseDetail = ({ courseDetail, isPurchased,joinCourse }: any) => {
    const { authenticated } = useAuth()
    const navigate = useNavigate();
    console.log(courseDetail)


    const [activeTab, setActiveTab] = useState('overview')
    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId)
    }

    const startLesson=(lessonId,courseId)=>{
        if (authenticated){
            console.log(lessonId,courseId)
            navigate(`${APP_PREFIX_PATH}/my_courses/course_detail/${courseId}/lesson/${lessonId}`)
        }else{
            navigate(`/sign-in`)
        }
    }

    const tabs = [
        { name: 'Overview', tab: 'overview' },
        ...(!isPurchased ? [{ name: 'Curriculum', tab: 'curriculum' }] : []),
       { name: 'Reviews', tab: 'reviews' },
    ]
    const socialLinks = [
        { href: '#', icon: <FaTwitter />, extraClass: '' },
        { href: '#', icon: <FaFacebookF />, extraClass: '' },
        { href: '#', icon: <FaLinkedinIn />, extraClass: '' },
        { href: '#', icon: <FaYoutube />, extraClass: '!text-[21px]' },
    ]
    const aboutCourseDetails = [
        {
            label: 'Duration',
            value: courseDetail?.duration,
            icon: <FaRegClock />,
        },
        {
            label: 'Lessons',
            value: courseDetail?.total_lessons,
            icon: <MdOutlinePlayLesson />,
        },
        {
            label: 'Students',
            value: courseDetail?.total_enrollments,
            icon: <HiOutlineUsers />,
        },
        {
            label: 'Certifications',
            value: 'Yes',
            icon: <GrCertificate />,
        },
        {
            label: 'Language',
            value: "eng",
            icon: <GrLanguage />,
        },
    ]

    const reviews = [
        {
            userImg: "/img/avatars/thumb-3.jpg",
            userName: "Ronald Richards",
            reviewDate: "February 10, 2024 at 2:37 pm",
            reviewText:
                "Aenean blandit justo ac rutrum hendrerit. Vivamus ultrices vulputate ante eget convallis. Donec id ex ut tellus blandit aliquet. Morbi varius",
        },
        {
            userImg: "/img/avatars/thumb-5.jpg",
            userName: "Eliza Nolan",
            reviewDate: "February 10, 2024 at 2:37 pm",
            reviewText:
                "Aenean blandit justo ac rutrum hendrerit. Vivamus ultrices vulputate ante eget convallis. Donec id ex ut tellus blandit aliquet. Morbi varius",
        },
    ];
    return (
        <div className="flex flex-col lg:flex-row  relative gap-[30px] p-5 lg:p-20   ">
            <div className="left-0 max-w-full grow ">
                <div>
                    <h4 className="font-bold text-[30px] lg:text-[27px] xs:text-[25px] xxs:text-[23px] text-[var(--thm-black)] mb-[23px]">
                        {courseDetail?.title}
                    </h4>

                    {/*  course meta */}
                    <div className="border-b border-[#E5E5E5] pb-[25px] flex lg:flex-nowrap flex-wrap items-center gap-[30px] lg:gap-[60px]  mb-[34px]">
                        {/*  single info */}
                        <div className="flex items-center gap-[10px] border-l border-[#CDCDCD] first:border-none pl-[10px] first:pl-0">
                            <div className="chat-message-box-avatar-container">
                                <Avatar
                                    size={45}
                                    shape="circle"
                                    src="/img/avatars/thumb-13.jpg"
                                    className="bg-slate-200 text-slate-400"
                                    icon={<HiOutlineUser />}
                                />
                            </div>
                            <div>
                                <h6 className="font-medium text-[var(--thm-black)] leading-[1.2]">
                                    Jane Cooper
                                </h6>
                                <span className="font-medium text-[14px] text-edgray leading-[1]">
                                    Teacher
                                </span>
                            </div>
                        </div>

                        {/*  single info */}
                        <div className="flex items-center gap-[10px] border-l border-[#CDCDCD] first:border-none pl-[10px] first:pl-0">
                            <div>
                                <h6 className="font-medium text-[var(--thm-black)] leading-[1.2]">
                                    Categories
                                </h6>
                                <span className="font-medium text-[14px] text-edgray leading-[1]">
                                    Online Teaching
                                </span>
                            </div>
                        </div>

                        {/*  single info */}
                        <div className="flex items-center gap-[10px] border-l border-[#CDCDCD] first:border-none pl-[10px] first:pl-0">
                            <div>
                                <h6 className="font-medium text-[var(--thm-black)] leading-[1.2]">
                                    Reviews
                                </h6>
                                <div className="flex gap-[5px] text-[var(--thm-primary)] text-[17px] mt-[4px]">
                                    {[...Array(5)].map((_, index) => (
                                        <i
                                            key={index}
                                            className="fa-solid fa-star"
                                        >
                                            <IoIosStar />
                                        </i>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  tabs container */}
                    <div>
                        {/*  tab navs  */}
                        <div className="ed-course-details-tab-navs border border-[#E5E5E5] p-[10px]  flex gap-[10px] *:h-[56px] sm:*:h-[46px]  *:flex-auto *:bg-[rgba(var(--thm-primary-rgb),0.1)] *:px-[20px] lg:*:px-[15px] *:font-semibold overflow-auto">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.tab}
                                    className={`tab-nav ${activeTab === tab.tab ? 'active' : ''}`}
                                    onClick={() => handleTabClick(tab.tab)}
                                    data-tab={tab.tab}
                                >
                                    {tab.name}
                                </button>
                            ))}
                        </div>

                        {/*  tabs */}
                        <div className="ed-course-details-tabs">
                            {/*  tab 01 */}
                            <div
                                id="overview"
                                className={`ed-tab duration-[400ms] ${activeTab === 'overview' ? 'active' : ''}`}
                            >
                                <div>
                                    <h4 className="font-semibold text-[30px] lg:text-[27px] xs:text-[25px] xxs:text-[23px] text-[var(--thm-black)] mt-[28px] mb-[15px]">
                                        Course Descriptions
                                    </h4>
                                    <div className="space-y-[10px]">
                                        <p className="text-edgray">
                                            {courseDetail?.description}
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-[30px] lg:text-[27px] xs:text-[25px] xxs:text-[23px] text-[var(--thm-black)] mt-[28px] mb-[15px]">
                                        Requirements for The Course
                                    </h4>
                                    <div className="space-y-[10px]">
                                        <p className="text-edgray">
                                            Nulla facilisi. Vestibulum tristique
                                            sem in eros eleifend imperdiet.
                                            Donec quis convallis neque. In id
                                            lacus pulvinar lacus, eget vulputate
                                            lectus. Ut viverra bibendum lorem,
                                            at tempus nibh mattis in. Sed a
                                            massa eget lacus consequat auctor.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/*  tab 02 */}
                            <div
                                id="curriculum"
                                className={`ed-tab duration-[400ms] ${activeTab === 'curriculum' ? 'active' : ''}`}
                            >
                                <div className="mb-[10px]">
                                    <h4 className="font-semibold text-[30px] lg:text-[27px] xs:text-[25px] xxs:text-[23px] text-[var(--thm-black)] mt-[28px] mb-[15px]">
                                        Course Curriculum
                                    </h4>
                                    <div className="space-y-[10px]">
                                        <p className="text-edgray">
                                            Consectetur adipisicing elit, sed do
                                            eiusmod tempor is incididunt ut
                                            labore et dolore of magna aliqua. Ut
                                            enim ad minim veniam, made of owl
                                            the quis nostrud exercitation
                                            ullamco laboris nisi ut aliquip ex
                                            ea dolor commodo consequat. Duis
                                            aute irure and dolor in
                                            reprehenderit.
                                        </p>
                                    </div>
                                </div>

                                {/*  curriculum #1 */}

                                <div className="mt-[32px]">
                                    <h5 className="font-bold text-[20px] text-[var(--thm-black)] mb-[16px]">
                                        Subjects/Courses
                                    </h5>

                                    <div className="space-y-[12px]">
                                        {/*  single curriculum */}
                                        {courseDetail?.course_lessons?.map(
                                            (lesson, index) => (
                                                <div
                                                    key={index}
                                                    className="px-[16px] py-[14px] flex flex-wrap gap-[10px] items-center justify-between bg-[rgba(var(--thm-primary-rgb),0.1)]"
                                                >
                                                    {/* Left */}
                                                    <div className="flex items-center gap-[10px]">
                                                        <span className="text-[20px] text-[var(--thm-primary)]">
                                                            <MdOutlinePlayLesson />
                                                        </span>
                                                        <span className="text-[var(--thm-black)]">
                                                            Lessons {index + 1}:{' '}
                                                            {lesson?.title ||
                                                                'Introduction'}
                                                        </span>
                                                    </div>

                                                    {/* Right */}
                                                    {index === 0 ? (
                                                        <div className="flex items-center gap-[10px]">
                                                            <span className="text-[var(--thm-primary)] text-[22px]">
                                                                <i onClick={()=>{startLesson(lesson.uid,courseDetail.uid)}}><IoPlayCircleOutline /></i>
                                                            </span>
                                                        </div>
                                                    ) : (
                                                        <div className="flex items-center gap-[10px]">
                                                            <span className="text-[var(--thm-gray)] text-[16px]">
                                                                <FaLock />
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>
                                            ),
                                        )}
                                    </div>
                                </div>

                                {/*  curriculum #2 */}
                            </div>


                            {/* tab 03  */}
                            <div
                                id="reviews"
                                className={`ed-tab duration-[400ms] ${activeTab === 'reviews' ? 'active' : ''}`}
                            >
                                <div className="ed-course-details-review mt-[40px]">
                                    <div className="review-overview flex xxs:flex-col gap-[22px] gap-y-[10px] items-center mb-[42px]">
                                        {/* <!-- average rating area --> */}
                                        <div className="average-rating-area text-center shrink-0">
                                            <h3 className="font-medium text-[50px] leading-[0.7] mb-[14px]">
                                                4.3
                                            </h3>
                                            <div className="flex gap-[5px] text-[var(--thm-primary)] text-[15px] mt-[4px] mb-[4px]">
                                                {[...Array(5)].map(
                                                    (_, index) => (
                                                        <i
                                                            key={index}
                                                            className="fa-solid fa-star"
                                                        >
                                                            <IoIosStar />
                                                        </i>
                                                    ),
                                                )}
                                            </div>
                                            <span className="rating-amount text-edgray text-[13px]">
                                                2.33K reviews
                                            </span>
                                        </div>

                                        {/* <!-- review-breakdown by each star  --> */}
                                        <div className="review-breakdown grow xxs:w-full">
                                            <ul className="individual-star-breakdown flex items-center gap-[15px]">
                                                <li className="star w-[11px] shrink-0 font-kanit text-edgray text-[16px]">
                                                    5
                                                </li>
                                                <li className="bar bg-[#E8EAED] max-w-full w-full h-[12px] rounded-full relative">
                                                    <div className="filled bg-[var(--thm-primary)] rounded-[18px] absolute top-0 left-0 h-full w-[80%]"></div>
                                                </li>
                                            </ul>
                                            <ul className="individual-star-breakdown flex items-center gap-[15px]">
                                                <li className="star w-[11px] shrink-0 font-kanit text-edgray text-[16px]">
                                                    4
                                                </li>
                                                <li className="bar bg-[#E8EAED] max-w-full w-full h-[12px] rounded-full relative">
                                                    <div className="filled bg-[var(--thm-primary)] rounded-[18px] absolute top-0 left-0 h-full w-[90%]"></div>
                                                </li>
                                            </ul>
                                            <ul className="individual-star-breakdown flex items-center gap-[15px]">
                                                <li className="star w-[11px] shrink-0 font-kanit text-edgray text-[16px]">
                                                    3
                                                </li>
                                                <li className="bar bg-[#E8EAED] max-w-full w-full h-[12px] rounded-full relative">
                                                    <div className="filled bg-[var(--thm-primary)] rounded-[18px] absolute top-0 left-0 h-full w-[40%]"></div>
                                                </li>
                                            </ul>
                                            <ul className="individual-star-breakdown flex items-center gap-[15px]">
                                                <li className="star w-[11px] shrink-0 font-kanit text-edgray text-[16px]">
                                                    2
                                                </li>
                                                <li className="bar bg-[#E8EAED] max-w-full w-full h-[12px] rounded-full relative">
                                                    <div className="filled bg-[var(--thm-primary)] rounded-[18px] absolute top-0 left-0 h-full w-[30%]"></div>
                                                </li>
                                            </ul>
                                            <ul className="individual-star-breakdown flex items-center gap-[15px]">
                                                <li className="star w-[11px] shrink-0 font-kanit text-edgray text-[16px]">
                                                    1
                                                </li>
                                                <li className="bar bg-[#E8EAED] max-w-full w-full h-[12px] rounded-full relative">
                                                    <div className="filled bg-[var(--thm-primary)] rounded-[18px] absolute top-0 left-0 h-full w-[5%]"></div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* <!-- reviews --> */}
                                    <h4 className="font-semibold text-[30px] lg:text-[27px] xs:text-[25px] xxs:text-[23px] mb-[28px]">
                                        Reviews
                                    </h4>
                                    <div className="user-reviews space-y-[30px]">
                                        {reviews.map((review, index) => (
                                            <div
                                                key={index}
                                                className="et-event-details-review flex xxs:flex-col items-start gap-[15px] pb-[30px] border-b border-[#e5e5e5] last:border-none last:pb-0"
                                            >
                                                {/* User Image */}
                                                <div className="user-img rounded-full overflow-hidden w-[60px] h-[60px] shrink-0">
                                                    <img
                                                        src={review.userImg}
                                                        alt="user"
                                                        className="object-cover w-full max-w-full max-h-full"
                                                    />
                                                </div>

                                                {/* Review Content */}
                                                <div>
                                                    <div className="flex items-center justify-between mb-[9px]">
                                                        <div className="user-info">
                                                            <h5 className="user-name font-semibold text-[18px] mb-[4px]">
                                                                {
                                                                    review.userName
                                                                }
                                                            </h5>
                                                            <h6 className="text-edgray">
                                                                {
                                                                    review.reviewDate
                                                                }
                                                            </h6>
                                                        </div>

                                                        <div className="flex gap-[5px] text-[var(--thm-primary)] text-[15px] mt-[4px] mb-[4px]">
                                                            {[...Array(5)].map(
                                                                (_, index) => (
                                                                    <i
                                                                        key={
                                                                            index
                                                                        }
                                                                        className="fa-solid fa-star"
                                                                    >
                                                                        <IoIosStar />
                                                                    </i>
                                                                ),
                                                            )}
                                                        </div>
                                                    </div>

                                                    <div className="review">
                                                        <p className="text-edgray leading-[1.8]">
                                                            {review.reviewText}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  Review Form BLOCK */}
                    <div className="mt-[50px]">
                        <h5 className="font-bold text-[22px] text-[var(--thm-black)] mb-[13px]">
                            Write a Review
                        </h5>
                        <div className="flex gap-[7px] text-[18px] text-[var(--thm-primary)] mb-[15px]">
                            {[...Array(5)].map((_, index) => (
                                <i key={index} className="fa-solid fa-star">
                                    <FaRegStar />
                                </i>
                            ))}
                        </div>

                        <form
                            action="#"
                            className="grid  grid-cols-2 sm:grid-cols-1 gap-[20px]  text-[16px]"
                        >
                            <div>
                                <label className="font-lato font-bold text-edblue block mb-[12px]">
                                    Your Name*
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="ed-course-review-name"
                                    placeholder="Your Name"
                                    className="border border-[#d8d8d8] h-[55px] px-[20px] xs:px-[15px]  w-full focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="font-lato font-bold text-edblue block mb-[12px]">
                                    Your Email*
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="ed-course-review-email"
                                    placeholder="Your Email"
                                    className="border border-[#d8d8d8] h-[55px] px-[20px] xs:px-[15px]  w-full focus:outline-none"
                                />
                            </div>
                            <div className="col-span-2 xxs:col-span-1">
                                <label className="font-lato font-bold text-edblue block mb-[12px]">
                                    Your Message*
                                </label>
                                <textarea
                                    name="message"
                                    id="ed-course-review-message"
                                    placeholder="Your Message"
                                    className="border border-[#d8d8d8] h-[145px] p-[20px]  w-full focus:outline-none"
                                ></textarea>
                            </div>
                            <div className="flex items-center bg-[var(--thm-primary)] h-[50px] w-[160px] px-[24px] text-[16px] font-semibold text-white hover:bg-[var(--thm-black)]">
                                <button type="submit" className="text-nowrap">
                                    Post Review{' '}
                                </button>
                                <span className="icon pl-2">
                                    <i className="fa-solid fa-arrow-right-long text-[19px]">
                                        <FaArrowRightLong />
                                    </i>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/*  right sidebar */}

            <div className="lg:!sticky top-[110px] right h-full   max-w-full sm:w-full lg:w-[350px]  shrink-0 space-y-[30px]">
                {/*  COURSE INFORMATION */}
                <div className="border border-[#e5e5e5] px-[25px]  py-[25px] ">
                    <h5 className="font-bold text-[24px] text-[var(--thm-black)] mb-[20px]">
                        {isPurchased ? 'Curriculum' : 'Course includes'}
                    </h5>
                    {isPurchased ? (
                        <div className="flex flex-col gap-2">
                            {courseDetail?.course_lessons?.map((lesson, index) => (
                                <div
                                    key={index}
                                    className="px-[16px] py-[14px] flex flex-wrap gap-[10px] items-center justify-between bg-[rgba(var(--thm-primary-rgb),0.1)]"
                                >
                                    {/* Left */}
                                    <div className="flex items-center gap-[10px]">
                                        <span className="text-[20px] text-[var(--thm-primary)]">
                                            <MdOutlinePlayLesson />
                                        </span>
                                        <span className="text-[var(--thm-black)]">
                                            Lesson {index + 1}:{' '}
                                            {lesson?.lesson_name ||
                                                'Introduction'}
                                        </span>
                                    </div>

                                    {/* Right */}
                                    
                                        <div className="flex items-center gap-[10px]">
                                            <span className="text-[var(--thm-primary)] text-[22px]">
                                                <i onClick={startLesson}><IoPlayCircleOutline /></i>
                                            </span>
                                        </div>
                                 
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div>
                            <ul className="mb-[20px]">
                                {aboutCourseDetails.map((detail, index) => (
                                    <li
                                        key={index}
                                        className="py-[15px] flex flex-wrap gap-[10px] items-center justify-between border-t border-[#e5e5e5] last:border-b"
                                    >
                                        <span className="flex items-center gap-[8px] font-bold text-[15px] text-[var(--thm-black)]">
                                            <span className="icon text-[20px] text-[var(--thm-primary)]">
                                                {detail.icon}
                                            </span>
                                            <span>{detail.label}:</span>
                                        </span>
                                        <span className="text-[15px] !text-[var(--thm-gray)]">
                                            {detail.value}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <div className="space-y-[10px]">
                              
                                <button
                                    onClick={joinCourse}
                                    className="ed-btn gap-[10px] !h-[56px]  w-full"
                                >
                                    Join this Course{' '}
                                    <span className="text-[18px]">
                                        <FaArrowRightLong />
                                    </span>
                                </button>
                            </div>

                            {/*  social links */}
                            <div className="flex gap-[28px] items-center justify-center mt-[22px]">
                                <h6 className="font-bold text-[16px] text-[var(--thm-black)]">
                                    Share:
                                </h6>
                                <div className="flex gap-x-[13px] text-[18px]">
                                    {socialLinks.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.href}
                                            className={`text-[#757277] hover:text-[var(--thm-primary)] ${link.extraClass}`}
                                        >
                                            <i>{link.icon}</i>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CourseDetail
