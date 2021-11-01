import React, {useEffect, useState} from 'react'
import { useCustomFetchFeedbackGet, useCustomFetchTeacherDetail } from "../../utils/apiCalls";
import { useParams } from "react-router-dom";
import RenderUserFeedback from "../../components/RenderUserFeedback/RenderUserFeedback";
import GetTeacherSpecificData from "../../components/GetTeacherSpecificData/GetTeacherSpecificData";

function TeachersDetailPage() {

    const { id } = useParams();
    const [teacher, setTeacher] = useState([]);
    const [teacherFeedback, setTeacherFeedback] = useState([]);

    const { serverErrorTeacherDetail, apiDataTeacherDetail } = useCustomFetchTeacherDetail(id);
    const { serverErrorFeedbackGet, apiDataFeedbackGet } = useCustomFetchFeedbackGet();

    useEffect(() => {
        if (apiDataTeacherDetail) setTeacher(apiDataTeacherDetail);

    }, [ apiDataTeacherDetail ])

    useEffect(() => {
        if (apiDataFeedbackGet) setTeacherFeedback(apiDataFeedbackGet);

    }, [ apiDataFeedbackGet ])

    useEffect(() => {

        function serverError() {

            return (serverErrorTeacherDetail || serverErrorFeedbackGet);
        }

        if (serverError()) throw new Error('Fetch Error');

    }, [serverErrorTeacherDetail,
             serverErrorFeedbackGet]);

    return (
        <div className="TeacherDetails">
            <div className="FlexContainer">
                <div className="FlexChild">
                    <div className="MediumPadding"/>
                    <GetTeacherSpecificData teacher = { teacher } />
                </div>
                <div className="FlexChild">
                    <h2 className="ShineMessage">Feedback</h2>
                    <div>&nbsp;</div>
                    <RenderUserFeedback teacherFeedback = { teacherFeedback } teacher = { teacher }/>
                </div>
            </div>

            <div className="SpaceForPhone"/>
        </div>
    )
}

export default TeachersDetailPage;