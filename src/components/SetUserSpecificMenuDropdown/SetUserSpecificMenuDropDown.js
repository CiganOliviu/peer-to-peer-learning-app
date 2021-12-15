import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { routesMapping } from "../../helpers/routesMapping";
import { componentsClassesMapping } from "../../helpers/classesMapping";

function SetActiveUserMenu({ userInfo, logOut }) {
    return (
        <div className={ componentsClassesMapping.DropdownContentClass }>
            <p className={ componentsClassesMapping.UserNameClass }>{ userInfo && userInfo?.user?.first_name }</p>
            <div className={ componentsClassesMapping.DelimitationBorderClass } />
            <Link to={ routesMapping.UserDetailsRoute }>About me</Link>
            <Link to={ routesMapping.FeedbackRoute }>Feedback</Link>
            <Link to={ routesMapping.OurTeamRoute }>PTP Team</Link>
            <Link to={ routesMapping.OurTeachersRoute }>PTP Teachers</Link>
            <Link to={ routesMapping.LoginRoute} onClick={ logOut }><FontAwesomeIcon key='Logout' icon={ faSignOutAlt } /> logout</Link>
        </div>
    );
}

function SetInactiveUserMenu({ logOut }) {
    return (
        <div className={ componentsClassesMapping.DropdownContentClass }>
            <Link to={ routesMapping.LoginRoute } onClick={ logOut }><FontAwesomeIcon key='Login' icon={ faSignInAlt } /> login</Link>
        </div>
    );
}

function SetUserSpecificMenuDropDown({ userInfo, logOut }) {

    return userInfo ? <SetActiveUserMenu userInfo={ userInfo } logOut={ logOut } /> :
        <SetInactiveUserMenu logOut={ logOut } />;
}

export default SetUserSpecificMenuDropDown;