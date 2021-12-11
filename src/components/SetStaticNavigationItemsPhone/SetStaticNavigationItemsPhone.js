import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHome,
    faBook,
    faCalendarAlt,
    faScroll,
    faUserCog, faPhone
} from '@fortawesome/free-solid-svg-icons'
import { routesMapping } from "../../helpers/routesMapping";

function SetStaticNavigationItemsPhone({ userInfo }) {

    const location = useLocation();
    const activeUserStaticMenu = [
        { label: 'Homeworks', route: routesMapping.HomeworksRoute },
        { label: 'Home', route: routesMapping.HomeRoute },
        { label: 'Schedule', route: routesMapping.ScheduleRoute },
    ]

    const inactiveUserStaticMenu = [
        { label: 'Home', route: routesMapping.HomeRoute },
        { label: 'Teachers', route: routesMapping.OurTeachersRoute },
        { label: 'Contact', route: routesMapping.ContactRoute },
    ]

    const activeUserStaticMenuIcons = [
        [ <FontAwesomeIcon key='Calendar' icon={ faCalendarAlt }/> ],
        [ <FontAwesomeIcon key='Home' icon={ faHome }/> ],
        [ <FontAwesomeIcon key='Book' icon={ faBook }/> ],
        [ <FontAwesomeIcon key='Envelope' icon={ faScroll }/> ],
    ]

    const inactiveUserStaticMenuIcons = [
        [ <FontAwesomeIcon key='Home' icon={ faHome }/> ],
        [ <FontAwesomeIcon key='Book' icon={ faBook }/> ],
        [ <FontAwesomeIcon key='User' icon={ faUserCog } /> ],
        [ <FontAwesomeIcon key='User' icon={ faPhone } /> ],
    ]

    const staticItems = userInfo ? activeUserStaticMenu : inactiveUserStaticMenu;
    const menuIcons = userInfo ? activeUserStaticMenuIcons : inactiveUserStaticMenuIcons;

    return staticItems.map((item, index) => {
        const classNameActive = location.pathname === item?.route ? "Item ActiveMenuItem" : "Item";

        return <li key={ item?.label} className={ classNameActive }>
                    <Link to={ item?.route }> { menuIcons[index] } <br/> { item?.label } </Link>
                </li>
    })
}

export default SetStaticNavigationItemsPhone;