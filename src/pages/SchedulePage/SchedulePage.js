import React, {useEffect, useRef, useState} from 'react'
import { getUserInfoParse } from "../../utils/localStorage";
import {
    useCustomFetchInformaticsGroups,
    useCustomFetchInformaticsSchedule,
    useCustomFetchMathematicsGroups,
    useCustomFetchMathematicsSchedule,
    useCustomFetchRomanianGroups, useCustomFetchRomanianSchedule
} from "../../utils/apiCalls";

import getClientGroup from "../../utils/getClientGroup";
import RenderSchedules from "../../components/RenderSchedules/RenderSchedules";
import HalfHeroCard from "../../components/HalfHeroCard/HalfHeroCard";
import schedule from './Images/schedule.jpeg'
import { Redirect } from "react-router-dom";
import './Schedule.css'

function SchedulePage() {

    const userInfo = getUserInfoParse();

    const [informaticsGroups, setInformaticsGroups] = useState([]);
    const { serverErrorInformaticsGroups, apiDataInformaticsGroups } = useCustomFetchInformaticsGroups();

    const [mathematicsGroups, setMathematicsGroups] = useState([]);
    const { serverErrorMathematicsGroups, apiDataMathematicsGroups } = useCustomFetchMathematicsGroups();

    const [romanianGroups, setRomanianGroups] = useState([]);
    const { serverErrorRomanianGroups, apiDataRomanianGroups } = useCustomFetchRomanianGroups();

    const [userScheduleInformatics, setUserScheduleInformatics] = useState([]);
    const { serverErrorInformaticsSchedule, apiDataInformaticsSchedule } = useCustomFetchInformaticsSchedule();

    const [userScheduleMathematics, setUserScheduleMathematics] = useState([])
    const { serverErrorMathematicsSchedule, apiDataMathematicsSchedule } = useCustomFetchMathematicsSchedule();

    const [userScheduleRomanian, setUserScheduleRomanian] = useState([]);
    const { serverErrorRomanianSchedule, apiDataRomanianSchedule } = useCustomFetchRomanianSchedule();

    const userInformaticsGroup = useRef("");
    const userMathematicsGroup = useRef("");
    const userRomanianGroup = useRef("");

    useEffect(() => {
        if (apiDataInformaticsGroups)
            setInformaticsGroups(apiDataInformaticsGroups);
    }, [ apiDataInformaticsGroups ])

    useEffect(() => {
        if (apiDataMathematicsGroups)
            setMathematicsGroups(apiDataMathematicsGroups);
    }, [ apiDataMathematicsGroups ])

    useEffect(() => {
        if (apiDataRomanianGroups)
            setRomanianGroups(apiDataRomanianGroups)
    }, [ apiDataRomanianGroups ])

    useEffect(() => {
        if (apiDataInformaticsSchedule)
            setUserScheduleInformatics(apiDataInformaticsSchedule);
    }, [ apiDataInformaticsSchedule ])

    useEffect(() => {
        if (apiDataMathematicsSchedule)
            setUserScheduleMathematics(apiDataMathematicsSchedule);
    }, [ apiDataMathematicsSchedule ])

    useEffect(() => {
        if (apiDataRomanianSchedule)
            setUserScheduleRomanian(apiDataRomanianSchedule);
    }, [ apiDataRomanianSchedule ])

    useEffect(() => {

        const serverErrors = () => {
            return serverErrorInformaticsGroups ||
                serverErrorMathematicsGroups ||
                serverErrorRomanianGroups ||
                serverErrorInformaticsSchedule ||
                serverErrorMathematicsSchedule ||
                serverErrorRomanianSchedule;
        }

        if (serverErrors()) throw new Error("Fetch Error");

    }, [serverErrorInformaticsGroups,
             serverErrorMathematicsGroups,
             serverErrorRomanianGroups,
             serverErrorInformaticsSchedule,
             serverErrorMathematicsSchedule,
             serverErrorRomanianSchedule,
            ])

    if (!userInfo)
        return <Redirect to="/login"/>

    getClientGroup(informaticsGroups, userInformaticsGroup, userInfo);
    getClientGroup(mathematicsGroups, userMathematicsGroup, userInfo);
    getClientGroup(romanianGroups, userRomanianGroup, userInfo)

    return (
        <div>
            <HalfHeroCard imageUrl = { schedule }/>
            <div className="Schedules">
                <h1>Schedule</h1>
                <RenderSchedules data = { userScheduleInformatics } userGroup = { userInformaticsGroup }
                                 classObject = { "Schedule Informatica" } />

                <RenderSchedules data = { userScheduleMathematics } userGroup= { userMathematicsGroup }
                                 classObject = { "Schedule Matematica" } />

                <RenderSchedules data = { userScheduleRomanian } userGroup = { userRomanianGroup }
                                 classObject = { "Schedule Romana" }/>
            </div>
            <div className="SpaceForPhone"/>
        </div>
    )
}

export default SchedulePage;