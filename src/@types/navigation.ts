interface SubMenuItem {
    label: string;
    path: string;
    checkAuthentication?:Boolean
}

export interface MenuItem {
    label: string;
    path?: string; // href is optional for menu items with submenus
    subMenu?: SubMenuItem[]; // subMenu is optional
    
}