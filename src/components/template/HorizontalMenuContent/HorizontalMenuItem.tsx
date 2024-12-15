import { useLocation } from 'react-router-dom';
import navigationIcon from '@/configs/navigation-icon.config';
import MenuItem from '@/components/ui/MenuItem';
import HorizontalMenuNavLink from './HorizontalMenuNavLink';
import { useTranslation } from 'react-i18next';
import type { NavMode } from '@/@types/theme';

export type HorizontalMenuItemProps = {
    nav: {
        key: string;
        title: string;
        translateKey: string;
        icon: string;
        path: string;
        isExternalLink?: boolean;
        type:string
    };
    isLink?: boolean;
    manuVariant: NavMode;

};

const HorizontalMenuItem = ({ nav, isLink, manuVariant }: HorizontalMenuItemProps) => {
    const { title, translateKey, icon, path, isExternalLink,type,key } = nav;
    const { t } = useTranslation();
    const location = useLocation(); // Get current location

    const itemTitle = t(translateKey, title);

    const renderIcon = icon && <span className="text-2xl">{navigationIcon[icon]}</span>;

    // Check if the current path matches the nav item path to set active state
    const isActive = location.pathname === path;
   

    return (
        <>
            {path && isLink ? (
                
                <HorizontalMenuNavLink path={path} isExternalLink={isExternalLink}>
                    <MenuItem variant={manuVariant} isActive={isActive} type={type}  key={key}>
                        <span className="flex items-center ">
                            {renderIcon}
                            {itemTitle}
                        </span>
                    </MenuItem>
                </HorizontalMenuNavLink>
            ) : (
                <MenuItem variant={manuVariant} isActive={isActive} type={type}  key={key}>
                    <span className="flex items-center">
                        {renderIcon}
                        <span>{itemTitle}</span>
                    </span>
                </MenuItem>
            )}
        </>
    );
};

export default HorizontalMenuItem;
