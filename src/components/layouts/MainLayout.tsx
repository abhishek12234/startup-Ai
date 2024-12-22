import { useLocation} from 'react-router-dom'
import { useRef,useEffect ,useMemo} from 'react'
import View from '@/views'
import Layout from '../main-layout/Layout'
import { APP_PREFIX_PATH } from '@/constants/route.constant'
import AuthLayout from './AuthLayout'

import { injectReducer,useAppSelector } from '@/store'

import Loading from '@/components/shared/Loading'



const MainLayout = () => {
    const location = useLocation();
    const courseLoading=useAppSelector((state)=>state.courses.loading)

    const getLayoutSettings = (path:any) => {
        const dynamicLessonPathRegex = new RegExp(`${APP_PREFIX_PATH}/my_courses/course_detail/[^/]+/lesson/[^/]+`);
    
        if (path === `${APP_PREFIX_PATH}/home`) {
            return { headerStyle: 1, breadcrumbTitle: '', footerStyle: 1 };
        } else if (dynamicLessonPathRegex.test(path)) {
            return { headerStyle:null, breadcrumbTitle:null, footerStyle:null };
        } else {
            const lastSegment = path.split("/").pop();
            return {
                headerStyle: 3,
                breadcrumbTitle: lastSegment ? capitalize(lastSegment) : '',
                footerStyle: 1,
            };
        }
    };

    
    const capitalize = (str:any) => str.charAt(0).toUpperCase() + str.slice(1);

    
    const { headerStyle, breadcrumbTitle,footerStyle} = getLayoutSettings(location.pathname);
    


    return (
        (location.pathname ==`/sign-in` || location.pathname ==`/sign-up`)  ? (
            <AuthLayout />
        ) : (
            <Layout headerStyle={headerStyle} footerStyle={footerStyle} breadcrumbTitle={breadcrumbTitle}>
                <div className='outer-layout-container'>
                <View />
                </div>
            </Layout>
        )
    );
}

export default MainLayout;
