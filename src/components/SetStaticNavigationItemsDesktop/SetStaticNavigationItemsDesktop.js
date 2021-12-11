import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { routesMapping } from "../../helpers/routesMapping";

function SetStaticNavigationItemsDesktop({ userInfo }) {

    const location = useLocation();

    const activeUserMenu = [
        { label: 'Homeworks', route: routesMapping.HomeworksRoute },
        { label: 'Schedule', route: routesMapping.ScheduleRoute },
        { label: 'Contact', route: routesMapping.ContactRoute },
    ]

    const inactiveUserMenu = [
        { label: 'Teachers', route: routesMapping.OurTeachersRoute },
        { label: 'Contact', route: routesMapping.ContactRoute },
    ]

    const staticItems = userInfo ? activeUserMenu : inactiveUserMenu;

    return staticItems.map((item) => {

        const classNameActive = location.pathname === item?.route ? "Item ActiveMenuItem PhoneHidden" : "Item PhoneHidden";

        return <li key={ item?.label } className={ classNameActive }><Link to={ item?.route}> { item?.label } </Link></li>
    })
}


export default SetStaticNavigationItemsDesktop;