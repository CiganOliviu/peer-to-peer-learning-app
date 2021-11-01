import React from "react";
import { getUserInfoParse } from "../../utils/localStorage";
import ShowSpecificButton from "../ShowSpecificButton/ShowSpecificButton";

import './RenderSchedules.css'


function RenderSchedules({ data, userGroup, classObject }) {

    const userInfo = getUserInfoParse();

    let hasUserSchedule = false;
    let hasTeacherSchedule = false;

    return (
        data.map((item) => {

            hasTeacherSchedule = item?.teacher?.email === userInfo?.user?.email;

            hasUserSchedule = item?.group?.name === userGroup?.current;

            if ((hasUserSchedule || hasTeacherSchedule) && (!item?.dated))
                return (
                    <div className="Schedule">
                        <div className="ScheduleBorder"/>
                        <h2>{ item?.course_title }</h2>
                        <div>&nbsp;</div>
                        <p>Data { item?.deadline_date }</p>
                        <p>Ora de intalnire { item?.deadline_hour }</p>
                        <div>&nbsp;</div>
                        <p>Postat la { item?.posted_on }</p>
                        <div>&nbsp;</div>
                        <p>{ classObject === 'Schedule Informatica' ?  <ShowSpecificButton classObject = { classObject } classObjectColor = { "#008cff" } /> : ''}</p>
                        <p>{ classObject === 'Schedule Matematica' ? <ShowSpecificButton classObject = { classObject } classObjectColor = { "#edb200" } /> : ''}</p>
                        <p>{ classObject === 'Schedule Romana' ? <ShowSpecificButton classObject = { classObject } classObjectColor = { "#f52516" } /> : ''}</p>
                    </div>
                )
            else
                return (
                    <></>
                )
        })
    )
}

export default RenderSchedules;