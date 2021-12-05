import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function SetStaticNavigationItemsDesktop({ userInfo }) {

    const location = useLocation();

    const activeUserMenu = [
        { label: 'Homeworks', route: '/homeworks' },
        { label: 'Docx', route: '/docx' },
        { label: 'Schedule', route: '/schedule' },
        { label: 'Contact', route: '/contact' },
    ]

    const inactiveUserMenu = [
        { label: 'Docx', route: '/docx' },
        { label: 'Teachers', route: '/our-teachers' },
        { label: 'Contact', route: '/contact' },
    ]

    const staticItems = userInfo ? activeUserMenu : inactiveUserMenu;

    return staticItems.map((item) => {

        const classNameActive = location.pathname === item?.route ? "Item ActiveMenuItem PhoneHidden" : "Item PhoneHidden";

        return <li key={ item?.label } className={ classNameActive }><Link to={ item?.route}> { item?.label } </Link></li>
    })
}


export default SetStaticNavigationItemsDesktop;