import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import reducer, {
    useAppSelector,
    getCoursesData,
    useAppDispatch,
    getCourseDetail,
    findCourseById,
    addPurchasedCourseData,
    getPurchasedCourseData,
    setDialogBox

} from '@/store'
import { Dialog } from '@/components/ui'
import {Button} from '@/components/ui'

import { useNavigate } from 'react-router-dom'
import { APP_PREFIX_PATH } from '@/constants/route.constant'
import CourseDetail from './components/CourseDetail'
import { apiGetCourseDetail} from '@/services/CoursesServices'
import useAuth from '@/utils/hooks/useAuth'
import { useSelector } from 'react-redux'


const AllCourseDetail = () => {
    const { authenticated } = useAuth()
    const { courseId }: any = useParams<{ courseId: string }>()
    const dispatch = useAppDispatch()
    const navigate = useNavigate() // For navigation
    const [courseDetail, setCourseDetail] = useState({})
    const [isPurchased,setIsPurchased]= useState(false)
    const [loading, setLoading] = useState(true)
    const purchaseCoursesData=useAppSelector((state)=>state.courses.purchasesCoursesData)
    const dialogBox=useAppSelector((state)=>state.courses.dialog)
    
    useEffect(()=>{
       if (authenticated && purchaseCoursesData && purchaseCoursesData.some((item:any) => item.uid === courseId)){
        setIsPurchased(true)
        console.log("is purchased")
       }

    },[purchaseCoursesData])

    useEffect(() => {
        if (authenticated && purchaseCoursesData && purchaseCoursesData.length==0){
            fetchPurchaseCourseData()
           
        }
    }, [authenticated])

    const fetchPurchaseCourseData=()=>{
            dispatch(getPurchasedCourseData())
        }

    const fetchData = async () => {
        if (courseId) {
            try {
                setLoading(true);
                const response:any = await apiGetCourseDetail(courseId);
                console.log(response, "this is response");
                if (response) {
                    setCourseDetail(response.data);
                }
            } catch (error:any) {
                if (error.response) {
                  
                    const errorMessage = error.response.data?.detail || "An unknown error occurred.";
                    navigate(`${APP_PREFIX_PATH}/home`)
                    console.error("Error Detail:", errorMessage);

                } else {
                    // Log general errors (network issues, etc.)
                    console.error("An error occurred:", error.message);
                }
            } finally {
                setLoading(false);
            }
        }
    };
    
    
    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const joinCourse=()=>{
        dispatch(addPurchasedCourseData(courseId))
    }
    

    const onDialogCloseAllCourses = () => {

        
        dispatch(setDialogBox(false))
        navigate(`${APP_PREFIX_PATH}/all_courses`,{replace:true})
    }
    const onDialogCloseMyCourses = () => {
        
        navigate(`${APP_PREFIX_PATH}/my_courses`,{replace:true})
        dispatch(setDialogBox(false))
    }


    

    return (
        <>
        <CourseDetail courseDetail={courseDetail} isPurchased={isPurchased} joinCourse={joinCourse}/>
        <Dialog isOpen={dialogBox} closable={false}>
                <h5 className="mb-4">Dialog Title</h5>
                <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which dont
                    look even slightly believable.
                </p>
                <div className="text-right mt-6">
                    
                    <Button variant="solid" onClick={onDialogCloseMyCourses}>
                        My Courses
                    </Button>
                </div>
            </Dialog>
        </>
    )
}
export default AllCourseDetail
