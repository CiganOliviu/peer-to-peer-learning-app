import React, { useRef } from "react";
import { getUserInfoParse } from "../../helpers/localStorage";
import ShowSpecificButton from "../ShowSpecificButton/ShowSpecificButton";
import './RenderHomeworks.css';
import { componentsClassesMapping } from "../../helpers/classesMapping";

function SetValidHomework({ homework, classObject }) {
    return (
        <div className={ componentsClassesMapping.HomeworkClass } >
            <div className={ componentsClassesMapping.HomeworkBorderClass } />
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

    const hasUserHomework = useRef(false);
    const hasTeacherHomework = useRef(false);

    const isHomeworkValid = (homework) => {
        return (hasUserHomework.current || hasTeacherHomework.current) && (!homework?.dated);
    };

    return (
        data?.map((homework) => {
            homework?.groups.forEach((group) => {

                hasTeacherHomework.current = (homework?.teacher?.email === userInfo?.user?.email);
                hasUserHomework.current = (group?.name === userGroup?.current);
            })

            return isHomeworkValid(homework) ?
                <SetValidHomework homework = { homework } classObject = { classObject } /> : <></>
        })
    )
}

export default RenderHomeworks;