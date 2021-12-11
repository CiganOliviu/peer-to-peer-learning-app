import React, { useState } from "react";
import { getUserInfoParse } from "../../helpers/localStorage";
import ShowSpecificButton from "../ShowSpecificButton/ShowSpecificButton";
import './RenderSchedules.css'

function SetValidSchedule({ schedule, classObject }) {

    return (
        <div className="Schedule">
            <div className="ScheduleBorder"/>
            <h2>{ schedule?.course_title }</h2>
            <div>&nbsp;</div>
            <p>Data { schedule?.deadline_date }</p>
            <p>Ora de intalnire { schedule?.deadline_hour }</p>
            <div>&nbsp;</div>
            <p>Postat la { schedule?.posted_on }</p>
            <div>&nbsp;</div>
            <p>{ classObject === 'Schedule Informatica' ?  <ShowSpecificButton classObject = { classObject } classObjectColor = { "#008cff" } /> : '' }</p>
            <p>{ classObject === 'Schedule Matematica' ? <ShowSpecificButton classObject = { classObject } classObjectColor = { "#edb200" } /> : '' }</p>
            <p>{ classObject === 'Schedule Romana' ? <ShowSpecificButton classObject = { classObject } classObjectColor = { "#f52516" } /> : '' }</p>
        </div>
    )
}

function RenderSchedules({ data, userGroup, classObject }) {

    const userInfo = getUserInfoParse();

    const [hasUserSchedule, setHasUserSchedule] = useState(false);
    const [hasTeacherSchedule, setHasTeacherSchedule] = useState(false);

    const isScheduleValid = (hasUserSchedule, hasTeacherSchedule, schedule) => {
        return (hasUserSchedule || hasTeacherSchedule) && (!schedule?.dated);
    };

    return (
        data.map((schedule) => {

            setHasTeacherSchedule(schedule?.teacher?.email === userInfo?.user?.email);
            setHasUserSchedule(schedule?.group?.name === userGroup?.current);

            return isScheduleValid(hasUserSchedule, hasTeacherSchedule, schedule) ?
                <SetValidSchedule schedule={ schedule } classObject={ classObject } /> : <></>
        })
    )
}

export default RenderSchedules;