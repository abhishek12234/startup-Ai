import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { APP_PREFIX_PATH } from '@/constants/route.constant'
import { apiGetPurchasedCourseDetail } from '@/services/CoursesServices'
import CourseDetail from './components/CourseDetail'
const MyCourseDetail = () => {
  const { courseId }: any = useParams<{ courseId: string }>()
  const navigate = useNavigate()
  const [courseDetail, setCourseDetail] = useState({})
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
          if (courseId) {
              try {
                  setLoading(true);
                  const response = await apiGetPurchasedCourseDetail<any>(courseId);
                  console.log(response, "this is response");
                  if (response) {
                      setCourseDetail(response.data.coursepurchase_course);
                  }
              } catch (error:any) {
                  if (error.response) {
                    
                      const errorMessage = error.response.data?.detail || "An unknown error occurred.";
                      navigate(`${APP_PREFIX_PATH}/home`)
                      console.error("Error Detail:", errorMessage);
      
                     // Replace with a user-friendly display mechanism
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
            
      }, [])
  return (
    <CourseDetail courseDetail={courseDetail} isPurchased={true}/>
  )
}

export default MyCourseDetail
