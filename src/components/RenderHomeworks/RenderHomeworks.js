import React from "react";
import { getUserInfoParse } from "../../utils/localStorage";
import ShowSpecificButton from "../ShowSpecificButton/ShowSpecificButton";

import './RenderHomeworks.css'


function RenderHomeworks({ data, userGroup, classObject }) {

    const userInfo = getUserInfoParse();

    let hasUserHomework = false;
    let hasTeacherHomework = false;

    return (
        data.map((item) => {
            item?.groups.forEach((group) => {

                hasTeacherHomework = item?.teacher?.email === userInfo?.user?.email;

                hasUserHomework = group?.name === userGroup?.current;
            })
            if ((hasUserHomework || hasTeacherHomework) && (!item?.dated))
                return (
                    <div className="Homework">
                        <div className="HomeworkBorder"/>
                        <h2>{ item?.title }</h2>
                        <div>&nbsp;</div>
                        <p>{ item?.tips === "None" ? "Nu sunt indicatii la aceasta tema" : item?.tips }</p>
                        <div>&nbsp;</div>
                        <p>{ item?.optional === true ? "Tema este optionala" : "Tema este obligatorie"}</p>
                        <div>&nbsp;</div>
                        <p><b>Deadline</b>: { item?.deadline_date } { item?.deadline_hour }</p>
                        <p><b>Postat la </b>: { item?.posted_on }</p>
                        <div>&nbsp;</div>
                        <p>{ classObject === 'Informatica' ?  <ShowSpecificButton classObject = { classObject } classObjectColor = { "#008cff" } /> : ''}</p>
                        <p>{ classObject === 'Matematica' ? <ShowSpecificButton classObject = { classObject } classObjectColor = { "#edb200" } /> : ''}</p>
                        <p>{ classObject === 'Romana' ? <ShowSpecificButton classObject = { classObject } classObjectColor = { "#f52516" } /> : ''}</p>
                    </div>
                )
            else
                return (
                    <></>
                )
        })
    )
}

export default RenderHomeworks;