import React, { useState, useEffect, useCallback } from 'react'
import reducer, {
    useAppSelector,
    getCoursesData,
    useAppDispatch,
    getPurchasedCourseData,
    resetError,
} from '@/store'

import CourseListing from '../components/CourseListing'
import useAuth from '@/utils/hooks/useAuth'

const AllCourses = () => {
    const dispatch = useAppDispatch()
    const coursesdata = useAppSelector((state) => state.courses.coursesData)
    const purchaseCoursesData = useAppSelector((state) => state.courses.purchasesCoursesData)
    useEffect(() => {
              console.log(purchaseCoursesData, 'all purchased courses is there')
          }, [purchaseCoursesData]) 

    const fetchData = () => {
        if (purchaseCoursesData && purchaseCoursesData.length === 0) {
            dispatch(getPurchasedCourseData())
        }
        if (coursesdata && coursesdata.length === 0) {
            dispatch(getCoursesData())
        }
        
        
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <CourseListing coursesdata={coursesdata} isPurchased={false} />
        </>
    )
}

export default AllCourses
