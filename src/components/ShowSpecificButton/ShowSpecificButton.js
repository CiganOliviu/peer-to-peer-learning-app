import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { componentsClassesMapping } from "../../helpers/classesMapping";

function ShowSpecificButton({ classObject, classObjectColor }) {

    return (
        <div className={ componentsClassesMapping.DepartmentClass }>
            <FontAwesomeIcon style={{ color: classObjectColor , fontSize: '19px', }} key='Circle' icon={ faCircle } /> { classObject }
        </div>
    )
}

export default ShowSpecificButton;