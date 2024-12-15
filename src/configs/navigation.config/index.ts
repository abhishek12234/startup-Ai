import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_ITEM,
    NAV_ITEM_TYPE_COLLAPSE
} from '@/constants/navigation.constant'
import type { MenuItem } from '@/@types/navigation'
import { APP_PREFIX_PATH } from '@/constants/route.constant'

const navigationConfig:MenuItem[] = [
        {
            label: 'Home',
            path: `${APP_PREFIX_PATH}/home`,

        },
        {
            label: 'About',
            path: `${APP_PREFIX_PATH}/about`
        },
        {
            label: 'Courses',
            path:`${APP_PREFIX_PATH}/all_courses`,
            subMenu:[{
                label:"All Courses",
                path: `${APP_PREFIX_PATH}/all_courses`
            },{
                label:"My Courses",
                path: `${APP_PREFIX_PATH}/my_courses`,
                checkAuthentication:true

            }

            ]
            
        },

        {
            label: 'Blog',
            subMenu: []
        },
        {
            label: 'Contact',
            path: '/contact'
        }
    ];

export default navigationConfig
