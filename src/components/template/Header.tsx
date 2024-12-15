import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { HEADER_HEIGHT_CLASS } from '@/constants/theme.constant';
import type { ReactNode } from 'react';
import type { CommonProps } from '@/@types/common';

interface HeaderProps extends CommonProps {
    headerStart?: ReactNode;
    headerEnd?: ReactNode;
    headerMiddle?: ReactNode;
    container?: boolean;
}

const Header = (props: HeaderProps) => {
    const { headerStart, headerEnd, headerMiddle, className, container } = props;
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={classNames('header fixed w-full z-10 transition-all duration-300', {className: isScrolled}, { 'bg-transparent': !isScrolled })}>
            <div
                className={classNames(
                    'header-wrapper',
                    HEADER_HEIGHT_CLASS,
                    container && 'container mx-auto',
                    { 'bg-opacity-100': isScrolled } // Change this as needed to match your dark/light mode settings
                )}
            >
                <div className="header-action header-action-start">
                    {headerStart}
                </div>
                {headerMiddle && (
                    <div className="header-action header-action-middle">
                        {headerMiddle}
                    </div>
                )}
                <div className="header-action header-action-end">
                    {headerEnd}
                </div>
            </div>
        </header>
    );
};

export default Header;
