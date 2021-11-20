import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,
        faBook,
        faCalendarAlt,
        faScroll,
        faUserCog } from '@fortawesome/free-solid-svg-icons'


function SetStaticNavigationItemsPhone({ userInfo }) {

    const location = useLocation();

    let staticItems
    let menuIcons = []

    if (userInfo) {
        staticItems = [
            { label: 'Homeworks', route: '/homeworks' },
            { label: 'Home', route: '/'},
            { label: 'Docx', route: '/docx' },
            { label: 'Schedule', route: '/schedule' },
        ]

        menuIcons = [
            [ <FontAwesomeIcon key='Calendar' icon={ faCalendarAlt }/> ],
            [ <FontAwesomeIcon key='Home' icon={ faHome }/> ],
            [ <FontAwesomeIcon key='Book' icon={ faBook }/> ],
            [ <FontAwesomeIcon key='Envelope' icon={ faScroll }/> ],
        ]
    }
    else {
        staticItems = [
            { label: 'Home', route: '/'},
            { label: 'Docx', route: '/docx' },
            { label: 'Staff', route: '/our-team' },
        ]

        menuIcons = [
            [ <FontAwesomeIcon key='Home' icon={ faHome }/> ],
            [ <FontAwesomeIcon key='Book' icon={ faBook }/> ],
            [ <FontAwesomeIcon key='User' icon={ faUserCog } /> ],
        ]
    }

    return staticItems.map((item, index) => {
        const classNameActive = location.pathname === item?.route ? "Item ActiveMenuItem" : "Item";

        return <li key={ item?.label} className={ classNameActive }>
                    <Link to={ item?.route }> { menuIcons[index] } <br/> { item?.label } </Link>
                </li>
    })
}

export default SetStaticNavigationItemsPhone;