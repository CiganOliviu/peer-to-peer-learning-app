import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHome,
    faBook,
    faCalendarAlt,
    faScroll,
    faUserCog, faPhone
} from '@fortawesome/free-solid-svg-icons'

function SetStaticNavigationItemsPhone({ userInfo }) {

    const location = useLocation();
    const activeUserStaticMenu = [
        { label: 'Homeworks', route: '/homeworks' },
        { label: 'Home', route: '/'},
        { label: 'Docx', route: '/docx' },
        { label: 'Schedule', route: '/schedule' },
    ]

    const inactiveUserStaticMenu = [
        { label: 'Home', route: '/'},
        { label: 'Docx', route: '/docx' },
        { label: 'Teachers', route: '/our-teachers' },
        { label: 'Contact', route: '/contact' },
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