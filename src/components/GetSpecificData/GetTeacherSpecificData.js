import React from 'react'
import { apiBaseURL } from "../../backendApi/baseBackendUrl";
import './SpecificDataCalls.css'
import { componentsClassesMapping } from "../../helpers/classesMapping";

function GetTeacherSpecificData({ teacher }) {

    const teacherDescription = teacher?.description ?? '';
    teacherDescription.replace(/(?:\r\n|\r|\n)/g, '<br />');

    return (
        <div className={ componentsClassesMapping.TeacherDetailsClass }>
            <img src={`${apiBaseURL}${ teacher?.profile}`} alt={`${teacher?.first_name} 
            ${teacher?.last_name}`} />

            <div>&nbsp;</div>
            <div className="Border"/>
            <div>&nbsp;</div>

            <div className={ componentsClassesMapping.CellClass }>
                <h2>{ teacher?.last_name } { teacher?.first_name }</h2>
                <div>&nbsp;</div>
                <p className={ componentsClassesMapping.ShineMessageClass }><b>Varsta</b></p>
                <p>{ teacher?.age }</p>
            </div>
            <div className={ componentsClassesMapping.CellClass }>
                <p className={ componentsClassesMapping.ShineMessageClass }><b>Email</b></p>
                <p>{ teacher?.email }</p>
            </div>
            <div className={ componentsClassesMapping.CellClass }>
                <p className={ componentsClassesMapping.ShineMessageClass }><b>Phone</b></p>
                <p>Phone: { teacher?.phone_number }</p>
            </div>
            <div className={ componentsClassesMapping.CellClass }>
                <p className={ componentsClassesMapping.ShineMessageClass }><b>Description</b></p>
                {
                    teacherDescription.split('\n').map(function(item, key) {
                        return (
                            <span key={key}>
                                <p>{ item }</p>
                                <br/>
                        </span>
                        )
                    })
                }
            </div>
            <div className={ componentsClassesMapping.CellClass }>
                <p className={ componentsClassesMapping.ShineMessageClass }><b>Short description</b></p>
                <p>{ teacher?.one_prop_description }</p>
            </div>
            <div className={ componentsClassesMapping.CellClass }>
                <p className={ componentsClassesMapping.ShineMessageClass }><b>Education</b></p>
                <p>{ teacher?.faculty?.university?.name }</p>
                <p>{ teacher?.faculty?.name }</p>
            </div>
            <div className={ componentsClassesMapping.CellClass }>
                <p className={ componentsClassesMapping.ShineMessageClass }><b>City</b></p>
                <p>{ teacher?.city?.name }</p>
            </div>
            <div className={ componentsClassesMapping.CellClass }>
                <p className={ componentsClassesMapping.ShineMessageClass }><b>Domain Expertise</b></p>
                {
                    teacher?.domain_expertise?.map((domain) => {
                        return (
                            <div>
                                <p>{ domain?.domain }</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default GetTeacherSpecificData;