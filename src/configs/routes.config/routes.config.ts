import { lazy } from 'react'
import authRoute from './authRoute'
import type { Routes } from '@/@types/routes'
import { APP_PREFIX_PATH } from '@/constants/route.constant'

const commonRoutes = [
    {
        key: 'courses',
        path: `${APP_PREFIX_PATH}/all_courses`,
        component: lazy(() => import('@/views/Courses/AllCourses')),
        authority: [],
    },
    {
        key: 'course_detail',
        path: `${APP_PREFIX_PATH}/all_courses/course_detail/:courseId`,
        component: lazy(() => import('@/views/Courses/AllCourseDetail')),
        authority: [],
    },
    {
        key: 'home',
        path: `${APP_PREFIX_PATH}/home`,
        component: lazy(() => import('../../views/landingPage')),
        authority: [],
    },
    {
        key: 'about',
        path: `${APP_PREFIX_PATH}/about`,
        component: lazy(() => import('@/views/demo/CollapseMenuItemView1')),
        authority: [],
    },
    {
        key: 'appsAccount.settings',
        path: `${APP_PREFIX_PATH}/account/settings/:tab`,
        component: lazy(() => import('@/views/account/Settings')),
        authority: [],
        meta: {
            header: 'Settings',
            headerContainer: true,
        },
    },

]

export const authRouts: Routes = [...authRoute]
export const publicRoutes: Routes = [ ...commonRoutes]

export const protectedRoutes:Routes=[{
    key: 'my_courses',
    path: `${APP_PREFIX_PATH}/my_courses`,
    component: lazy(() => import('@/views/Courses/MyCourses')),
    authority: [],
    
    
},{
    key: 'lesson_teaching',
    path: `${APP_PREFIX_PATH}/my_courses/course_detail/:courseId/lesson/:lessonId`,
    component: lazy(() => import('@/views/teachingPage')),
    authority: [],
    
},{
    key: 'my_course_detail',
    path: `${APP_PREFIX_PATH}/my_courses/course_detail/:courseId`,
    component: lazy(() => import('@/views/Courses/MyCourseDetail')),
    authority: [],
    
},
]






