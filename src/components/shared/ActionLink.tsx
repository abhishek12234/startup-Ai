import classNames from 'classnames'
import useThemeClass from '@/utils/hooks/useThemeClass'
import { Link } from 'react-router-dom'
import type { CommonProps } from '@/@types/common'
import type { ComponentPropsWithoutRef } from 'react'

interface ActionLink extends CommonProps, ComponentPropsWithoutRef<'a'> {
    themeColor?: boolean
    to?: string
    href?: string
    reloadDocument?: boolean
    replace?: boolean // Add replace prop
}

const ActionLink = (props: ActionLink) => {
    const {
        children,
        className,
        themeColor = true,
        to,
        reloadDocument,
        href = '',
        replace = false, // Destructure replace from props, default is false
        ...rest
    } = props

    const { textTheme } = useThemeClass()

    const classNameProps = {
        className: classNames(
            themeColor && textTheme,
            'hover:underline',
            className
        ),
    }

    return to ? (
        <Link
            to={to}
            reloadDocument={reloadDocument}
            replace={replace} // Pass replace to Link
            {...classNameProps}
            {...rest}
        >
            {children}
        </Link>
    ) : (
        <a href={href} {...classNameProps} {...rest}>
            {children}
        </a>
    )
}

export default ActionLink
