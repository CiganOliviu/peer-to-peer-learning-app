import React, {useEffect, useRef, useState} from 'react'
import { getUserInfoParse } from "../../helpers/localStorage";
import {
    useCustomFetchHomeworkCard,
    useCustomFetchInformaticsGroups, useCustomFetchInformaticsHomework, useCustomFetchMathematicsGroups,
    useCustomFetchMathematicsHomework, useCustomFetchRomanianGroups, useCustomFetchRomanianHomework
} from "../../backendApi/apiCalls";
import getClientGroup from '../../helpers/getClientGroup';
import RenderHomeworks from "../../components/RenderHomeworks/RenderHomeworks";
import HalfHeroCard from "../../components/HalfHeroCard/HalfHeroCard";
import { Redirect } from "react-router-dom";
import './Homeworks.css'
import {appClassesMapping, pagesClassesMapping} from "../../helpers/classesMapping";

function HomeworksPage() {

    const userInfo = getUserInfoParse();

    const [homeworkCard, setHomeworkCard] = useState(null);
    const { serverErrorHomeworkCard, apiDataHomeworkCard } = useCustomFetchHomeworkCard();

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
        if (apiDataHomeworkCard)
            setHomeworkCard(apiDataHomeworkCard[Math.floor(Math.random() * apiDataHomeworkCard?.length)]);
    }, [ apiDataHomeworkCard ])

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

        const serverErrors = () => {
            return serverErrorHomeworkCard ||
                serverErrorInformaticsGroups ||
                serverErrorMathematicsGroups ||
                serverErrorRomanianGroups ||
                serverErrorInformaticsHomework ||
                serverErrorMathematicsHomework ||
                serverErrorRomanianHomework;
        }

        if (serverErrors()) throw new Error("Fetch Error");

    }, [serverErrorHomeworkCard,
        serverErrorInformaticsGroups,
        serverErrorMathematicsGroups,
        serverErrorRomanianGroups,
        serverErrorInformaticsHomework,
        serverErrorMathematicsHomework,
        serverErrorRomanianHomework
        ])

    if (!userInfo)
        return <Redirect to="/login" />

    getClientGroup(informaticsGroups, userInformaticsGroup, userInfo);
    getClientGroup(mathematicsGroups, userMathematicsGroup, userInfo);
    getClientGroup(romanianGroups, userRomanianGroup, userInfo);

    return (
        <div>
            <HalfHeroCard imageUrl = { homeworkCard?.image } />
            <div className={ pagesClassesMapping.HomeworksPageClass }>
                <h1>{ userInfo.user.first_name }, Aici sunt listate temele tale!</h1>
                    <RenderHomeworks data = { userHomeworkInformatics } userGroup = { userInformaticsGroup }
                                     classObject = { "Informatica" } />
                    <RenderHomeworks data = { userHomeworkMathematics } userGroup = { userMathematicsGroup }
                                     classObject = { "Matematica" } />
                    <RenderHomeworks data = { userHomeworkRomanian } userGroup = { userRomanianGroup }
                                     classObject = { "Romana" }/>

                <div className={ appClassesMapping.SpaceForPhoneClass }/>
            </div>
        </div>
    )
}

export default HomeworksPage;