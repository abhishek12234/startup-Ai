import Avatar from '@/components/ui/Avatar'
import Dropdown from '@/components/ui/Dropdown'
import withHeaderItem from '@/utils/hoc/withHeaderItem'
import useAuth from '@/utils/hooks/useAuth'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { HiOutlineLogout, HiOutlineUser, HiOutlineCog } from 'react-icons/hi'
import type { CommonProps } from '@/@types/common'
import { FiActivity } from 'react-icons/fi'


type DropdownList = {
    label: string
    path: string
    icon: JSX.Element
}


const dropdownItemList: DropdownList[] = [
    {
        label: 'Profile',
        path: '/app/account/settings/profile',
        icon: <HiOutlineUser />,
    },
    {
        label: 'Account Setting',
        path: '/app/account/settings/profile',
        icon: <HiOutlineCog />,
    },
    {
        label: 'Activity Log',
        path: '/app/account/activity-log',
        icon: <FiActivity />,
    },
]
const _UserDropdown = ({ className }: CommonProps) => {

    const { signOut } = useAuth()

    const UserAvatar = (
        <div className={classNames(className, 'flex items-center gap-1  border-[var(--thm-primary)] border-[2px] p-[3px]')}>
            <Avatar size={38} shape="circle"   src="/img/avatars/thumb-11.jpg" className="bg-slate-200 text-slate-400" icon={<HiOutlineUser />} />
        </div>
    )

    return (
        <div>
            <Dropdown
                menuStyle={{ minWidth: 240, marginTop:"5px" }}
                renderTitle={UserAvatar}
                placement="bottom-end"
            >
                <Dropdown.Item variant="header">
                    <div className="py-2 px-3 flex items-center gap-2">
                        <Avatar src="/img/avatars/thumb-11.jpg" shape="circle" icon={<HiOutlineUser />} />
                        <div>
                            <div className="font-bold text-gray-900 dark:text-gray-100">
                                User01
                            </div>
                            <div className="text-xs">user01@mail.com</div>
                        </div>
                    </div>
                </Dropdown.Item>
                <Dropdown.Item variant="divider" />
                {dropdownItemList.map((item) => (
                    <Dropdown.Item
                        key={item.label}
                        eventKey={item.label}
                        className="mb-1 px-0"
                    >
                        <Link 
                            className="flex h-6 w-full px-2" 
                            to={item.path}
                        >
                            <span className="flex gap-2 items-center w-full">
                                <span className="text-xl opacity-50">
                                    {item.icon}
                                </span>
                                <span>{item.label}</span>
                            </span>
                        </Link>
                    </Dropdown.Item>
                ))}
                {/* <Dropdown.Item variant="divider" /> */}
                <Dropdown.Item
                    eventKey="Sign Out"
                    className="gap-2"
                    onClick={signOut}
                >
                    <span className="text-xl opacity-50">
                        <HiOutlineLogout />
                    </span>
                    <span>Sign Out</span>
                </Dropdown.Item>
            </Dropdown>
        </div>
    )
}

const UserDropdown = withHeaderItem(_UserDropdown)

export default UserDropdown
