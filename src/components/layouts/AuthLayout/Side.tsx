import { cloneElement } from 'react'
import Avatar from '@/components/ui/Avatar'
import Logo from '@/components/template/Logo'
import { APP_NAME } from '@/constants/app.constant'
import type { CommonProps } from '@/@types/common'

interface SideProps extends CommonProps {
    content?: React.ReactNode
}

const Side = ({ children, content, ...rest }: SideProps) => {
    return (
<div className="grid lg:grid-cols-[500px_1fr_1fr] h-full">
    <div
        className="bg-no-repeat bg-cover flex-col justify-between hidden lg:flex"
        style={{
            backgroundImage: `url('/img/others/auth-side-bg.png')`,
        }}
    >
        {/* Your content here */}
    </div>
    <div className="col-span-2 flex flex-col justify-center flex-1 items-center bg-white dark:bg-gray-800">
        <div className="xl:min-w-[450px] px-8">
            <div className="mb-8">{content}</div>
            {children
                ? cloneElement(children as React.ReactElement, {
                      ...rest,
                  })
                : null}
        </div>
    </div>
</div>

    )
}

export default Side
