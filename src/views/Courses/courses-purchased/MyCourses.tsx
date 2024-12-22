import React,{useEffect} from 'react'
import NotFound from '../components/NotFound'
import reducer, {
  useAppSelector,
  getCoursesData,
  useAppDispatch,
  getCourseDetail,
  getPurchasedCourseData
} from '@/store'
import CourseListing from '../components/CourseListing'
const MyCourses = () => {
  const dispatch = useAppDispatch()
      const purchaseCoursesData = useAppSelector((state) => state.courses.purchasesCoursesData)
  
      useEffect(() => {
          console.log(purchaseCoursesData, 'all purchased courses is there')
      }, [purchaseCoursesData]) 
  
      const fetchData =() => {
          if (purchaseCoursesData && purchaseCoursesData.length==0){
          dispatch(getPurchasedCourseData());
          }
        };
      
        
        useEffect(() => {
          fetchData();
        }, []); 
        return (
          <>
            {purchaseCoursesData && purchaseCoursesData.length === 0 ? (
              <NotFound />
            ) : (
              <CourseListing coursesdata={purchaseCoursesData} isPurchased={true} />
            )}
          </>
        );
      };

export default MyCourses
