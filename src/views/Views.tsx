import { Suspense } from 'react'
import Loading from '@/components/shared/Loading'
import { publicRoutes,protectedRoutes,authRouts} from '@/configs/routes.config'
import appConfig from '@/configs/app.config'
import PageContainer from '@/components/template/PageContainer'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAppSelector } from '@/store'
import ProtectedRoute from '@/components/route/ProtectedRoute'
import AuthRoute from '@/components/route/PublicRoute'
import AuthorityGuard from '@/components/route/AuthorityGuard'
import AppRoute from '@/components/route/AppRoute'
import type { LayoutType } from '@/@types/theme'


interface ViewsProps {
    pageContainerType?: 'default' | 'gutterless' | 'contained'
    layout?: LayoutType
}

type AllRoutesProps = ViewsProps

const { authenticatedEntryPath } = appConfig

const AllRoutes = (props: AllRoutesProps) => {
    const userAuthority = useAppSelector((state) => state.auth.user.authority)

    return (
        <Routes>
            <Route path="/">
                <Route
                    path="/"
                    element={<Navigate replace to={authenticatedEntryPath} />}
                />
                {protectedRoutes.map((route, index) => (
                    
                    <Route
                        key={route.key + index}
                        path={route.path}
                        element={
                            <>
                            <ProtectedRoute />
                            <AuthorityGuard
                                userAuthority={userAuthority}
                                authority={route.authority}
                            >
                                
                                    <AppRoute
                                        routeKey={route.key}
                                        component={route.component}
                                        {...route.meta}
                                    />
                              
                            </AuthorityGuard>
                            </>
                        }
                    />
                ))}
            <Route path="*" element={<Navigate replace to="/" />} />
               
            </Route>
            <Route path="/" >
                <Route
                        path="/"
                        element={<Navigate replace to={authenticatedEntryPath} />}
                    />
                {publicRoutes.map((route,index) => (
                    <Route
                        key={route.key+index}
                        path={route.path}
                        element={
                            <AppRoute
                                routeKey={route.key}
                                component={route.component}
                                {...route.meta}
                            />
                        }
                    />
                ))}
                
                
            </Route>
            <Route path="/" element={<AuthRoute/>}>
                <Route
                        path="/"
                        element={<Navigate replace to={authenticatedEntryPath} />}
                    />
                {authRouts.map((route,index) => (
                    <Route
                        key={route.key+index}
                        path={route.path}
                        element={
                            <AppRoute
                                routeKey={route.key}
                                component={route.component}
                                {...route.meta}
                            />
                        }
                    />
                ))}
         
                
            </Route>
 
        </Routes>
    )
}

const Views = (props: ViewsProps) => {
    return (
        <Suspense fallback={<Loading loading={true} />}>
            <AllRoutes {...props} />
        </Suspense>
    )
}

export default Views
