import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";


function SetUserSpecificMenuDropDown({userInfo, logOut}) {

    if (userInfo)
        return (
            <div className="DropdownContent">
                <p className="UserName">{ userInfo && userInfo?.user?.first_name }</p>
                <div className="DelimitationBorder"/>
                <Link to="/user">About me</Link>
                <Link to="/feedback">Feedback</Link>
                <Link to="/login" onClick={ logOut }><FontAwesomeIcon key='Logout' icon={ faSignOutAlt } /> logout</Link>
            </div>
        );
    else
        return (
            <div className="DropdownContent">
                <Link to="/login" onClick={ logOut }><FontAwesomeIcon key='Login' icon={ faSignInAlt } /> login</Link>
            </div>
        );
}

export default SetUserSpecificMenuDropDown;