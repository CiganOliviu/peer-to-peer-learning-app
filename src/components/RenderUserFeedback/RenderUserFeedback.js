import React from "react";
import { componentsClassesMapping } from "../../helpers/classesMapping";

function SetValidFeedback({ data }) {
    return (
        <div>
            <div className={ componentsClassesMapping.CellClass } style={{ textAlign: 'center', }}>
                <div>&nbsp;</div>
                <p><b>{ data?.title }</b></p>
                <p>{ data?.message }</p>
            </div>
            <div>&nbsp;</div>
            <div className="Border" />
        </div>
    )
}

function RenderUserFeedback({ teacherFeedback, teacher }) {

    const isValidTeacher = (data) => {
        return data?.targetTeacher === teacher?.id;
    };

    return (
        teacherFeedback.map((data) => {

            return isValidTeacher(data) ? <SetValidFeedback data = { data } /> : <></>;
        })
    )
}

export default RenderUserFeedback;