import React, {useEffect, useRef, useState} from 'react';
import { getUserInfoParse } from "../../helpers/localStorage";
import {
    useCustomFetchInformaticsGroups,
    useCustomFetchInformaticsSchedule,
    useCustomFetchMathematicsGroups,
    useCustomFetchMathematicsSchedule,
    useCustomFetchRomanianGroups, useCustomFetchRomanianSchedule, useCustomFetchScheduleCard
} from "../../backendApi/apiCalls";

import getClientGroup from "../../helpers/getClientGroup";
import RenderSchedules from "../../components/RenderSchedules/RenderSchedules";
import HalfHeroCard from "../../components/HalfHeroCard/HalfHeroCard";
import { Redirect } from "react-router-dom";
import './Schedule.css';
import { appClassesMapping, pagesClassesMapping } from "../../helpers/classesMapping";

function SchedulePage() {

    const userInfo = getUserInfoParse();

    const [scheduleCard, setScheduleCard] = useState(null);
    const { serverErrorScheduleCard, apiDataScheduleCard } = useCustomFetchScheduleCard();

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
        if (apiDataScheduleCard)
            setScheduleCard(apiDataScheduleCard[Math.floor(Math.random() * apiDataScheduleCard?.length)]);
    }, [apiDataScheduleCard])

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
            return serverErrorScheduleCard ||
                serverErrorInformaticsGroups ||
                serverErrorMathematicsGroups ||
                serverErrorRomanianGroups ||
                serverErrorInformaticsSchedule ||
                serverErrorMathematicsSchedule ||
                serverErrorRomanianSchedule;
        }

        if (serverErrors()) throw new Error("Fetch Error");

    }, [serverErrorScheduleCard,
             serverErrorInformaticsGroups,
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
            <HalfHeroCard imageUrl = { scheduleCard?.image }/>
            <div className={ pagesClassesMapping.SchedulesPageClass }>
                <h1>Schedule</h1>
                <RenderSchedules data = { userScheduleInformatics } userGroup = { userInformaticsGroup }
                                 classObject = { "Schedule Informatica" } />

                <RenderSchedules data = { userScheduleMathematics } userGroup= { userMathematicsGroup }
                                 classObject = { "Schedule Matematica" } />

                <RenderSchedules data = { userScheduleRomanian } userGroup = { userRomanianGroup }
                                 classObject = { "Schedule Romana" }/>
            </div>
            <div className={ appClassesMapping.SpaceForPhoneClass } />
        </div>
    )
}

export default SchedulePage;