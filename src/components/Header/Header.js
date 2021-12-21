import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import SetStaticNavigationItemsDesktop from "../SetStaticNavigationItemsDesktop/SetStaticNavigationItemsDesktop";
import SetStaticNavigationItemsPhone from "../SetStaticNavigationItemsPhone/SetStaticNavigationItemsPhone";
import SetUserSpecificMenuDropDown from "../SetUserSpecificMenuDropdown/SetUserSpecificMenuDropDown";
import { getUserInfoParse, LOCAL_STORAGE_KEYS  } from "../../helpers/localStorage";
import { Link, useHistory } from "react-router-dom";
import Aos from "aos";
import './Header.css'
import {componentsClassesMapping} from "../../helpers/classesMapping";

function Header() {

    const [navbar, setNavBar] = useState(false);
    const userInfo = getUserInfoParse();

    let history = useHistory();

    const logOut = () => {

        localStorage.clear(LOCAL_STORAGE_KEYS.userInfo);

        history.push('/')
    }

    useEffect(() => {

        Aos.init({ duration: 500 });

        return () => {

        };
    })

    useEffect(() => {

        const changeBackground = () => {
            setNavBar(window.scrollY > 0);
        };

        window.addEventListener('scroll', changeBackground);

        return () => {
            window.removeEventListener('scroll', changeBackground);
        }
    })

    return (
        <div className={ componentsClassesMapping.NavigationClass }>
            <header>
                <ul className={ navbar ? componentsClassesMapping.NormalNavigationActiveClass :
                    componentsClassesMapping.NormalNavigationSimpleClass }>
                    <li className={ componentsClassesMapping.ItemActiveMenuClass }>
                        <Link to="/" className={ componentsClassesMapping.LogoClass }>PeerToPeer</Link>
                    </li>
                    <SetStaticNavigationItemsDesktop userInfo = { userInfo }/>
                    <div className={ componentsClassesMapping.ItemsRightAlignClass }>
                        <li className={ componentsClassesMapping.ItemClass }>
                            <div className={ componentsClassesMapping.DropdownClass }>
                                <Link to="#" className={ componentsClassesMapping.UserDropButtonClass }><FontAwesomeIcon key='UserCircle' icon={ faUserCircle } /></Link>
                                <div className={ componentsClassesMapping.DropdownContentClass }>
                                    <SetUserSpecificMenuDropDown userInfo={ userInfo } logOut = { logOut }/>
                                </div>
                            </div>
                        </li>
                    </div>
                </ul>
                <ul className={ componentsClassesMapping.PhoneNavigationClass }>
                    <SetStaticNavigationItemsPhone userInfo = { userInfo }/>
                </ul>
            </header>
        </div>
    )
}

export default Header;