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
import useDirection from '@/utils/hooks/useDirection'
import useLocale from '@/utils/hooks/useLocale'
import useAuth from '@/utils/hooks/useAuth'

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
    const courseLoading=useAppSelector((state)=>state.courses.loading)
    

    useDirection()
    useLocale()


    const AppLayout = useMemo(() => {
       return layouts[layoutType]
    }, [layoutType])

    return (
        <Suspense fallback={ 
             <div className="fixed inset-0 flex items-center justify-center bg-white z-[99999]">
                    <Loading loading={true} />
             </div>}>

             <Loading loading={courseLoading} className="fixed inset-0 flex items-center justify-center bg-white z-[99999]" />
             <AppLayout />
             
        </Suspense>
    );
    
}

export default Layout
