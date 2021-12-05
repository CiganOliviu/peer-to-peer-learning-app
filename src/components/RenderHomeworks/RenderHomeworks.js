import React, { useState } from "react";
import { getUserInfoParse } from "../../utils/localStorage";
import ShowSpecificButton from "../ShowSpecificButton/ShowSpecificButton";
import './RenderHomeworks.css'

function SetValidHomework({ homework, classObject }) {
    return (
        <div className="Homework">
            <div className="HomeworkBorder"/>
            <h2>{ homework?.title }</h2>
            <div>&nbsp;</div>
            <p>{ homework?.tips === "None" ? "Nu sunt indicatii la aceasta tema" : homework?.tips }</p>
            <div>&nbsp;</div>
            <p>{ homework?.optional === true ? "Tema este optionala" : "Tema este obligatorie"}</p>
            <div>&nbsp;</div>
            <p><b>Deadline</b>: { homework?.deadline_date } { homework?.deadline_hour }</p>
            <p><b>Postat la </b>: { homework?.posted_on }</p>
            <div>&nbsp;</div>
            <p>{ classObject === 'Informatica' ?  <ShowSpecificButton classObject = { classObject } classObjectColor = { "#008cff" } /> : '' }</p>
            <p>{ classObject === 'Matematica' ? <ShowSpecificButton classObject = { classObject } classObjectColor = { "#edb200" } /> : '' }</p>
            <p>{ classObject === 'Romana' ? <ShowSpecificButton classObject = { classObject } classObjectColor = { "#f52516" } /> : '' }</p>
        </div>
    )
}

function RenderHomeworks({ data, userGroup, classObject }) {

    const userInfo = getUserInfoParse();

    const [hasUserHomework, setHasUserHomework] = useState(false);
    const [hasTeacherHomework, setHasTeacherHomework] = useState(false);

    const isHomeworkValid = (hasUserHomework, hasTeacherHomework, homework) => {
        return (hasUserHomework || hasTeacherHomework) && (!homework?.dated);
    };

    return (
        data.map((homework) => {
            homework?.groups.forEach((group) => {

                setHasTeacherHomework(homework?.teacher?.email === userInfo?.user?.email);
                setHasUserHomework(group?.name === userGroup?.current);
            })

            return isHomeworkValid(hasUserHomework, hasTeacherHomework, homework) ?
                <SetValidHomework item = { homework } classObject = { classObject } /> : <></>
        })
    )
}

export default RenderHomeworks;