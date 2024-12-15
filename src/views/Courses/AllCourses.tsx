import React, { useState, useEffect,useCallback } from 'react'
import reducer, {
    useAppSelector,
    getCoursesData,
    useAppDispatch,
    getCourseDetail,
} from '@/store'
import { injectReducer } from '@/store'
import CourseListing from './components/CourseListing'

// injectReducer("course_all",reducer)
const AllCourses = () => {
    const dispatch = useAppDispatch()
    const coursesdata = useAppSelector((state) => state.courses.coursesData)

    useEffect(() => {
        console.log(coursesdata, 'all courses is there')
    }, [coursesdata]) 

    const fetchData =() => {
        if (coursesdata && coursesdata.length==0){
        dispatch(getCoursesData());
        }
      };
    
      
    useEffect(() => {
        fetchData();
      }, []); 
    
    return (
        <CourseListing coursesdata={coursesdata} isPurchased={false}/>
    )
}

export default AllCourses
