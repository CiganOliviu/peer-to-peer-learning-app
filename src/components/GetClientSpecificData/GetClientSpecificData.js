import React from "react";
import { componentsClassesMapping } from "../../helpers/classesMapping";

function GetClientSpecificData({ clientInfo }) {
    return (
        <div className={ componentsClassesMapping.TeacherDetailsClass } >
            <div>&nbsp;</div>
            <div className={ componentsClassesMapping.CellClass }>
                <h2>{ clientInfo?.first_name } { clientInfo?.last_name }</h2>
            </div>
            <div>&nbsp;</div>
            <div className="Border"/>
            <div>&nbsp;</div>
            <div className={ componentsClassesMapping.CellClass } >
                <div>&nbsp;</div>
                <p className={ componentsClassesMapping.ShineMessageClass }><b>Email</b></p>
                <p>{ clientInfo?.email }</p>
            </div>
            <div className={ componentsClassesMapping.CellClass } >
                <div>&nbsp;</div>
                <p className={ componentsClassesMapping.ShineMessageClass }><b>Phone</b></p>
                <p>{ clientInfo?.phone_number }</p>
            </div>
            <div className={ componentsClassesMapping.CellClass } >
                <div>&nbsp;</div>
                <p className={ componentsClassesMapping.ShineMessageClass }><b>High School</b></p>
                <p>{ clientInfo?.high_school?.name }</p>
            </div>
            <div className={ componentsClassesMapping.CellClass } >
                <div>&nbsp;</div>
                <p className={ componentsClassesMapping.ShineMessageClass }><b>Profile</b></p>
                <p>{ clientInfo?.high_school_profile?.profile }</p>
            </div>
            <div className={ componentsClassesMapping.CellClass } >
                <div>&nbsp;</div>
                <p className={ componentsClassesMapping.ShineMessageClass }><b>City</b></p>
                <p>{ clientInfo?.city?.name }</p>
            </div>
        </div>
    )
}

export default GetClientSpecificData;
