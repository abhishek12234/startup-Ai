import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import navigationConfig from '@/configs/navigation.config';
import useAuth from '@/utils/hooks/useAuth';

export default function Menu() {
    const location = useLocation();
    const { authenticated } = useAuth();

    return (
        <ul className="navigation">
            {navigationConfig.map((item, index) => {
                // Filter submenu items based on authentication
                const filteredSubMenu: any = item.subMenu?.filter(
                    (subItem) => !subItem.checkAuthentication || authenticated,
                );

                // Check if the current menu item or its subitems are active
                const isActive = location.pathname === item.path;
                const hasActiveSubItem = filteredSubMenu?.some(
                    (subItem) => location.pathname === subItem.path,
                );

                // Determine the CSS class for the list item
                const liClassName =
                    isActive || hasActiveSubItem
                        ? 'active menu-item-has-children'
                        : filteredSubMenu?.length
                        ? 'menu-item-has-children'
                        : '';

                // If only one submenu item exists, link directly to it
                if (filteredSubMenu?.length === 1) {
                    const singleSubItem = filteredSubMenu[0];
                    return (
                        <li
                            key={index}
                            className={
                                location.pathname === singleSubItem.path
                                    ? 'active'
                                    : ''
                            }
                        >
                            <Link to={singleSubItem.path || '#'}>{item.label}</Link>
                        </li>
                    );
                }

                // Render the menu item
                return (
                    <li key={index} className={liClassName}>
                        {/* Render label with or without link based on submenu */}
                        {filteredSubMenu?.length ? (
                            <Link to="#">{item.label}</Link>
                        ) : (
                            <Link to={item.path || '#'}>{item.label}</Link>
                        )}

                        {/* Render submenu if there are multiple submenu items */}
                        {filteredSubMenu?.length > 1 && (
                            <ul className="sub-menu">
                                {filteredSubMenu.map((subItem, subIndex) => (
                                    <li
                                        key={subIndex}
                                        className={
                                            location.pathname === subItem.path
                                                ? 'active'
                                                : ''
                                        }
                                    >
                                        <Link to={subItem.path || '#'}>
                                            {subItem.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                );
            })}
        </ul>
    );
}
