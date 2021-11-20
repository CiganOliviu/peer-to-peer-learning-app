import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function SetStaticNavigationItemsDesktop({ userInfo }) {

    const location = useLocation();

    let staticItems;

    if (userInfo)
        staticItems = [
            {label: 'Homeworks', route: '/homeworks'},
            {label: 'Docx', route: '/docx'},
            {label: 'Schedule', route: '/schedule'},
        ]
    else
        staticItems = [
            {label: 'Docx', route: '/docx'},
            {label: 'Team', route: '/our-team'}
        ]

    return staticItems.map((item) => {

        const classNameActive = location.pathname === item?.route ? "Item ActiveMenuItem PhoneHidden" : "Item PhoneHidden";

        return <li key={ item?.label } className={ classNameActive }><Link to={ item?.route}> { item?.label } </Link></li>
    })
}


export default SetStaticNavigationItemsDesktop;