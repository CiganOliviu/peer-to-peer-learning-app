import React, { useEffect, useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import {
    useCustomFetchInformaticsGroups,
    useCustomFetchMathematicsGroups,
    useCustomFetchRomanianGroups,
    useCustomFetchClient, useCustomFetchTeacher, useCustomFetchTeacherExpectations, useCustomFetchStudentExpectations,
} from '../../backendApi/apiCalls';
import { getUserInfoParse } from "../../helpers/localStorage";
import RenderClientGroup from "../../components/RenderClientGroup/RenderClientGroup";
import GetClientSpecificData from "../../components/GetClientSpecificData/GetClientSpecificData";
import GetTeacherSpecificData from "../../components/GetSpecificData/GetTeacherSpecificData";
import GetLinksForTeacher from "../../components/GetLinksForTeacher/GetLinksForTeacher";
import DisplayExpectations from "../../components/DisplayExpectations/DisplayExpectations";
import './UserPage.css';
import { pagesClassesMapping } from "../../helpers/classesMapping";

function UserPage() {

    const userInfo = getUserInfoParse();

    const [userGroupInformatics, setUserGroupInformatics] = useState([]);
    const { serverErrorInformaticsGroups, apiDataInformaticsGroups } = useCustomFetchInformaticsGroups();

    const [userGroupMathematics, setUserGroupMathematics] = useState([]);
    const { serverErrorMathematicsGroups, apiDataMathematicsGroups } = useCustomFetchMathematicsGroups();

    const [userGroupRomanian, setUserGroupRomanian] = useState([]);
    const { serverErrorRomanianGroups, apiDataRomanianGroups } = useCustomFetchRomanianGroups();

    const [clientDetails, setClientDetails] = useState([]);
    const { serverErrorClient, apiDataClient } = useCustomFetchClient();

    const [teacherDetails, setTeacherDetails] = useState([]);
    const { serverErrorTeacher, apiDataTeacher } = useCustomFetchTeacher();

    const [teacherExpectations, setTeacherExpectations] = useState([]);
    const { serverErrorTeacherExpectations, apiDataTeacherExpectations } = useCustomFetchTeacherExpectations();

    const [studentExpectations, setStudentExpectations] = useState([]);
    const { serverErrorStudentExpectations, apiDataStudentExpectations } = useCustomFetchStudentExpectations();

    useEffect(() => {
        if (apiDataInformaticsGroups) setUserGroupInformatics(apiDataInformaticsGroups);

    }, [ apiDataInformaticsGroups ])

    useEffect(() => {
        if (apiDataMathematicsGroups) setUserGroupMathematics(apiDataMathematicsGroups);

    }, [ apiDataMathematicsGroups ])

    useEffect(() => {
        if (apiDataRomanianGroups) setUserGroupRomanian(apiDataRomanianGroups)

    }, [ apiDataRomanianGroups ])

    useEffect(() => {
        if (apiDataClient) setClientDetails(apiDataClient);

    }, [ apiDataClient ])

    useEffect(() => {
        if (apiDataTeacher) setTeacherDetails(apiDataTeacher);

    }, [ apiDataTeacher ])

    useEffect(() => {
        if (apiDataTeacherExpectations) setTeacherExpectations(apiDataTeacherExpectations);

    }, [ apiDataTeacherExpectations ]);

    useEffect(() => {
        if (apiDataStudentExpectations) setStudentExpectations(apiDataStudentExpectations);

    }, [ apiDataStudentExpectations ]);

    useEffect(() => {

        const serverErrors = () => {

            return serverErrorInformaticsGroups ||
                serverErrorMathematicsGroups ||
                serverErrorRomanianGroups ||
                serverErrorClient ||
                serverErrorTeacher ||
                serverErrorTeacherExpectations ||
                serverErrorStudentExpectations;
        }

        if (serverErrors()) throw new Error("Fetch Error");

    }, [serverErrorInformaticsGroups,
             serverErrorMathematicsGroups,
             serverErrorRomanianGroups,
             serverErrorClient,
             serverErrorTeacher,
             serverErrorTeacherExpectations,
             serverErrorStudentExpectations,
            ])

    if (!userInfo)
        return <Redirect to="/login"/>

    let index = 0;

    return (
        <div className={ pagesClassesMapping.UserPageClass } >
            <div className="FlexContainer">
                <div className="FlexChild">
                    {
                        clientDetails.map((data) => {
                            return (
                                <div>
                                    { userInfo.user.email === data.email ? <GetClientSpecificData clientInfo = { data } /> : ""}
                                </div>
                            )
                        })
                    }

                    <div>&nbsp;</div>

                    <RenderClientGroup userInfo = { userInfo } clientGroup = { userGroupInformatics } className = { "Informatica " } />
                    <RenderClientGroup userInfo = { userInfo } clientGroup = { userGroupMathematics } className = { "Matematica " } />
                    <RenderClientGroup userInfo = { userInfo } clientGroup = { userGroupRomanian } className = { "Romana " } />

                    <div>&nbsp;</div>
                    {
                        teacherDetails.map((data) => {
                            return (
                                <div>
                                    { userInfo.user.email === data.email ? <GetTeacherSpecificData teacher = { data } /> : "" }
                                </div>
                            )
                        })
                    }
                    <div>&nbsp;</div>
                    <div className="Cell">
                        <Link to="/feedback" className="ShineMessageLink"><b>Leave a feedback, your opinion matters!</b></Link>
                    </div>
                    <div className="BreathingSpaceSmall" />
                    <div className="Border"/>
                </div>
                <div className="FlexChild">
                    {
                        teacherDetails.map((data) => {
                            return (
                                <div>
                                    { userInfo.user.email === data.email ? <GetLinksForTeacher teacher = { data } /> : "" }
                                </div>
                            )
                        })
                    }
                    <div>&nbsp;</div>
                    <h1 style={{ padding: '2%', }}>Your Goals</h1>
                    {
                        teacherExpectations?.map((data) => {

                            index = userInfo.user.email === data.teacher.email && data.done === false ? index += 1 : index;

                            return (
                                <div>
                                    { userInfo.user.email === data.teacher.email && data.done === false ? <DisplayExpectations index = { index } data={ data } /> : <></> }
                                </div>
                            );
                        })
                    }
                    {
                        studentExpectations?.map((data) => {

                            index = userInfo.user.email === data.student.email && data.done === false ? index += 1 : index;

                            return (
                                <div>
                                    { userInfo.user.email === data.student.email && data.done === false ? <DisplayExpectations index = { index } data={ data } /> : <></> }
                                </div>
                            );
                        })
                    }
                </div>
            </div>

            <div className="SpaceForPhone"/>
        </div>
    )
}

export default UserPage;