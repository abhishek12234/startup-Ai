import { forwardRef } from 'react'
import classNames from 'classnames'
import type { CommonProps, TypeAttributes } from '../@types/common'
import type { ElementType } from 'react'
import { useAppSelector } from '@/store'
import { injectReducer } from '@/store'
import reducer,{setScrollRefs} from "@/store/slices/scroll"
injectReducer("scroll",reducer)
export interface MenuItemProps extends CommonProps {
    asElement?: ElementType
    id?: string
    disabled?: boolean
    eventKey?: string
    isActive?: boolean
    menuItemHeight?: string | number
    onSelect?: (eventKey: string, e: MouseEvent) => void
    variant?: TypeAttributes.MenuVariant
    type:string
    key:string
}

const MenuItem = forwardRef<HTMLElement, MenuItemProps>((props, ref) => {
    const {
        asElement: Component = 'div',
        children,
        className,
        disabled,
        eventKey,
        isActive,
        type,
        key,
        menuItemHeight = 35,
        onSelect,
        style,
        variant = 'light',
        ...rest
    } = props

     

    const menuItemActiveClass = `menu-item-active`
    const menuItemHoverClass = `menu-item-hoverable`
    const disabledClass = 'menu-item-disabled'
    const menuItemClass = classNames(
        'menu-item',
        `menu-item-${variant}`,
        isActive && menuItemActiveClass,
        type=="item" && "menu-item-hoverable-main",
        disabled && disabledClass,
        type!="item" && !disabled && menuItemHoverClass,
        className
    )

    const hanldeOnClick = (e: MouseEvent) => {
        
        
        if (onSelect) {
            onSelect(eventKey as string, e)
            console.log(eventKey)
            
            
        }
    }

    return (
        <Component
            ref={ref}
            className={menuItemClass}
            style={{ height: `${menuItemHeight}px`, ...style }}
            onClick={hanldeOnClick}
            {...rest}
        >
            {children}
        </Component>
    )
})

MenuItem.displayName = 'BaseMenuItem'

export default MenuItem
