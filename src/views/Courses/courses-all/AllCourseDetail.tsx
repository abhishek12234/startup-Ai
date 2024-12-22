import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAppSelector, useAppDispatch, getCourseDetail, resetError, addPurchasedCourseData, setDialogBox } from '@/store'
import { Dialog, Button } from '@/components/ui'
import { APP_PREFIX_PATH } from '@/constants/route.constant'
import CourseDetail from '../components/CourseDetail'
import useAuth from '@/utils/hooks/useAuth'

const AllCourseDetail = () => {
    const { courseId }: any = useParams<{ courseId: string }>()
    const { authenticated } = useAuth()
    const navigate = useNavigate()

    const dispatch = useAppDispatch()
    const courseDetail = useAppSelector((state) => state.courses.courseDetail)
    const error = useAppSelector((state) => state.courses.error)
    const dialogBox = useAppSelector((state) => state.courses.dialog)

    // Fetch course details and handle errors
    useEffect(() => {
        console.log(courseId)
        if (error) {
            dispatch(resetError())
            navigate(`${APP_PREFIX_PATH}/all_courses`, { replace: true })
        }else if (!error && courseId!==courseDetail?.uid ) {
            dispatch(getCourseDetail(courseId))
        } 
    }, [])

  
    const joinCourse = () => dispatch(addPurchasedCourseData(courseId))

    const handleDialogClose = (path: string) => {
        dispatch(setDialogBox(false))
        navigate(`${APP_PREFIX_PATH}/${path}`, { replace: true })
    }

    return (
        <>
            <CourseDetail
                courseDetail={courseDetail}
                isPurchased={false}
                joinCourse={joinCourse}
            />
            {dialogBox && (
                <Dialog isOpen closable={false}>
                    <h5 className="mb-4">Dialog Title</h5>
                    <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in some
                        form, by injected humour, or randomised words which don't
                        look even slightly believable.
                    </p>
                    <div className="text-right mt-6">
                        <Button
                            variant="solid"
                            onClick={() => handleDialogClose('my_courses')}
                        >
                            My Courses
                        </Button>
                    </div>
                </Dialog>
            )}
        </>
    )
}

export default AllCourseDetail
