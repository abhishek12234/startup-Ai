import { useMemo, lazy, Suspense, useRef,useEffect } from 'react'
import Loading from '@/components/shared/Loading'
import { useAppSelector } from '@/store'
import {
    LAYOUT_TYPE_CLASSIC,
    LAYOUT_TYPE_MODERN,
    LAYOUT_TYPE_SIMPLE,
    LAYOUT_TYPE_STACKED_SIDE,
    LAYOUT_TYPE_DECKED,
    LAYOUT_TYPE_BLANK,
    LAYOUT_TYPE_MAIN,
} from '@/constants/theme.constant'
import useAuth from '@/utils/hooks/useAuth'
import useDirection from '@/utils/hooks/useDirection'
import useLocale from '@/utils/hooks/useLocale'
import reducer,{useAppDispatch,getCoursesData,getPurchasedCourseData } from '@/store'
const layouts = {
    [LAYOUT_TYPE_CLASSIC]: lazy(() => import('./ClassicLayout')),
    [LAYOUT_TYPE_MODERN]: lazy(() => import('./ModernLayout')),
    [LAYOUT_TYPE_STACKED_SIDE]: lazy(() => import('./StackedSideLayout')),
    [LAYOUT_TYPE_SIMPLE]: lazy(() => import('./SimpleLayout')),
    [LAYOUT_TYPE_DECKED]: lazy(() => import('./DeckedLayout')),
    [LAYOUT_TYPE_BLANK]: lazy(() => import('./BlankLayout')),
    [LAYOUT_TYPE_MAIN]: lazy(() => import('./MainLayout')),
}

const Layout = () => {
    const layoutType = useAppSelector((state) => state.theme.layout.type)
    const { authenticated } = useAuth()
    const dispatch = useAppDispatch()
    useDirection()
    useLocale()

    const coursesdata = useAppSelector((state) => state.courses.coursesData)
    const purchasedCourses=useAppSelector((state)=> state.courses.purchasesCoursesData)
    useEffect(() => {
        if (coursesdata && coursesdata.length==0){
        fetchData()
        }
    }, [])
    useEffect(() => {
        console.log(purchasedCourses,"purasdkfjh")
    }, [purchasedCourses])

    
    useEffect(() => {
        if (authenticated && purchasedCourses && purchasedCourses.length==0){
            fetchPurchaseCourseData()
           
        }
    }, [authenticated])

    const fetchData = () => {
        dispatch(getCoursesData())
    }
    
    const fetchPurchaseCourseData=()=>{
        dispatch(getPurchasedCourseData())
    }

    // Move useRef inside the component
    const containerRef = useRef(null)

    const AppLayout = useMemo(() => {
       
            return layouts[layoutType]
     
    }, [layoutType, authenticated])

    return (
        <Suspense
            fallback={
                <div className="flex flex-auto flex-col h-[100vh]">
                    <Loading loading={true} />
                </div>
            }
        >
          
                    <AppLayout />
         
       
        </Suspense>
    )
}

export default Layout
