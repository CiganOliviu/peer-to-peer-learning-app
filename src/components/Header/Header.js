import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import SetStaticNavigationItemsDesktop from "../SetStaticNavigationItemsDesktop/SetStaticNavigationItemsDesktop";
import SetStaticNavigationItemsPhone from "../SetStaticNavigationItemsPhone/SetStaticNavigationItemsPhone";
import SetUserSpecificMenuDropDown from "../SetUserSpecificMenuDropdown/SetUserSpecificMenuDropDown";
import { getUserInfoParse, LOCAL_STORAGE_KEYS  } from "../../utils/localStorage";
import { Link, useHistory } from "react-router-dom";
import Aos from "aos";
import './Header.css'

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
        <div className="Navigation">
            <header>
                <ul className={ navbar ? "NormalNavigation Active" : "NormalNavigation Simple" }>
                    <li className="Item ActiveMenuItem"><Link to="/" className="Logo">PeerToPeer</Link></li>
                    <SetStaticNavigationItemsDesktop userInfo = { userInfo }/>
                    <div className="ItemsRightAlign">
                        <li className="Item">
                            <div className="Dropdown">
                                <Link to="#" className="User DropButton"><FontAwesomeIcon key='UserCircle' icon={ faUserCircle } /></Link>
                                <div className="DropdownContent">
                                    <SetUserSpecificMenuDropDown userInfo={ userInfo } logOut = { logOut }/>
                                </div>
                            </div>
                        </li>
                    </div>
                </ul>
                <ul className="PhoneNavigation">
                    <SetStaticNavigationItemsPhone userInfo = { userInfo }/>
                </ul>
            </header>
        </div>
    )
}

export default Header;