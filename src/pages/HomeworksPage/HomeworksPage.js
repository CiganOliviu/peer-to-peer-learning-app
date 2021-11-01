import React, {useEffect, useRef, useState} from 'react'
import { getUserInfoParse } from "../../utils/localStorage";
import {
    useCustomFetchInformaticsGroups, useCustomFetchInformaticsHomework, useCustomFetchMathematicsGroups,
    useCustomFetchMathematicsHomework, useCustomFetchRomanianGroups, useCustomFetchRomanianHomework
} from "../../utils/apiCalls";
import getClientGroup from '../../utils/getClientGroup';
import RenderHomeworks from "../../components/RenderHomeworks/RenderHomeworks";
import HalfHeroCard from "../../components/HalfHeroCard/HalfHeroCard";
import homeworks from './Images/homeworks.jpeg'

import './Homeworks.css'
import { Redirect } from "react-router-dom";


function HomeworksPage() {

    const userInfo = getUserInfoParse();

    const [informaticsGroups, setInformaticsGroups] = useState([]);
    const { serverErrorInformaticsGroups, apiDataInformaticsGroups } = useCustomFetchInformaticsGroups();

    const [mathematicsGroups, setMathematicsGroups] = useState([]);
    const { serverErrorMathematicsGroups, apiDataMathematicsGroups } = useCustomFetchMathematicsGroups();

    const [romanianGroups, setRomanianGroups] = useState([]);
    const { serverErrorRomanianGroups, apiDataRomanianGroups } = useCustomFetchRomanianGroups();

    const [userHomeworkInformatics, setUserHomeworkInformatics] = useState([]);
    const { serverErrorInformaticsHomework, apiDataInformaticsHomework } = useCustomFetchInformaticsHomework();

    const [userHomeworkMathematics, setUserHomeworkMathematics] = useState([]);
    const { serverErrorMathematicsHomework, apiDataMathematicsHomework } = useCustomFetchMathematicsHomework();

    const [userHomeworkRomanian, setUserHomeworkRomanian] = useState([]);
    const { serverErrorRomanianHomework, apiDataRomanianHomework } = useCustomFetchRomanianHomework();

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
        if (apiDataInformaticsHomework)
            setUserHomeworkInformatics(apiDataInformaticsHomework);
    }, [ apiDataInformaticsHomework ])

    useEffect(() => {
        if (apiDataMathematicsHomework)
            setUserHomeworkMathematics(apiDataMathematicsHomework);
    }, [ apiDataMathematicsHomework ])

    useEffect(() => {
        if (apiDataRomanianHomework)
            setUserHomeworkRomanian(apiDataRomanianHomework);
    }, [ apiDataRomanianHomework ])


    useEffect(() => {

        function serverErrors() {
            return serverErrorInformaticsGroups ||
                serverErrorMathematicsGroups ||
                serverErrorRomanianGroups ||
                serverErrorInformaticsHomework ||
                serverErrorMathematicsHomework ||
                serverErrorRomanianHomework;
        }

        if (serverErrors()) throw new Error("Fetch Error");

    }, [serverErrorInformaticsGroups,
             serverErrorMathematicsGroups,
             serverErrorRomanianGroups,
             serverErrorInformaticsHomework,
             serverErrorMathematicsHomework,
             serverErrorRomanianHomework,
            ])

    if (!userInfo)
        return <Redirect to="/login"/>

    getClientGroup(informaticsGroups, userInformaticsGroup, userInfo);
    getClientGroup(mathematicsGroups, userMathematicsGroup, userInfo);
    getClientGroup(romanianGroups, userRomanianGroup, userInfo);


    return (
        <div>
            <HalfHeroCard imageUrl = { homeworks } />
            <div className="Homeworks">
                <h1>{ userInfo.user.first_name }, Aici sunt listate temele tale!</h1>

                <RenderHomeworks data = { userHomeworkInformatics } userGroup = { userInformaticsGroup }
                                 classObject = { "Informatica" } />
                <RenderHomeworks data = { userHomeworkMathematics } userGroup = { userMathematicsGroup }
                                 classObject = { "Matematica" } />
                <RenderHomeworks data = { userHomeworkRomanian } userGroup = { userRomanianGroup }
                                 classObject = { "Romana" }/>

                <div className="SpaceForPhone"/>
            </div>
        </div>
    )
}

export default HomeworksPage;