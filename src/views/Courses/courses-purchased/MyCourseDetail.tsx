import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { APP_PREFIX_PATH } from '@/constants/route.constant'
import { useAppSelector,useAppDispatch,getPurchasedCourseDetail,resetError } from '@/store'
import { apiGetPurchasedCourseDetail } from '@/services/CoursesServices'
import Loading from '@/components/shared/Loading'
import CourseDetail from '../components/CourseDetail'
import useAuth from '@/utils/hooks/useAuth'
const MyCourseDetail = () => {
  const { courseId }: any = useParams<{ courseId: string }>()

  const navigate = useNavigate()
  const purchaseCourseDetail=useAppSelector((state)=>state.courses.purchasedCourseDetail)
  const error=useAppSelector((state)=>state.courses.error)
  const dispatch=useAppDispatch()
 
  useEffect(() => {
        if (error) {
            dispatch(resetError())
            navigate(`${APP_PREFIX_PATH}/all_courses`, { replace: true })
        }else if (!error && courseId!==purchaseCourseDetail?.uid  ) {
            dispatch(getPurchasedCourseDetail(courseId))
        } 
    }, [])

    
    
  return (
    <>
    
    <CourseDetail courseDetail={purchaseCourseDetail} isPurchased={true}/>
    </>
  )
}

export default MyCourseDetail
