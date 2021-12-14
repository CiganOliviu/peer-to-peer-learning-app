import React, { useEffect, useState } from 'react';
import { useCustomFetchFeedbackGet, useCustomFetchTeacherDetail } from "../../backendApi/apiCalls";
import { useParams } from "react-router-dom";
import RenderUserFeedback from "../../components/RenderUserFeedback/RenderUserFeedback";
import GetTeacherSpecificData from "../../components/GetSpecificData/GetTeacherSpecificData";
import { appClassesMapping, pagesClassesMapping } from "../../helpers/classesMapping";

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

        const serverError = () => {

            return (serverErrorTeacherDetail || serverErrorFeedbackGet);
        }

        if (serverError()) throw new Error('Fetch Error');

    }, [serverErrorTeacherDetail,
             serverErrorFeedbackGet]);

    return (
        <div className={ pagesClassesMapping.TeacherDetailsPageClass }>
            <div className={ appClassesMapping.FlexContainerClass }>
                <div className="FlexChild">
                    <div className={ appClassesMapping.MediumPaddingClass } />
                    <GetTeacherSpecificData teacher = { teacher } />
                </div>
                <div className="FlexChild">
                    <h2 className="ShineMessage">Feedback</h2>
                    <div>&nbsp;</div>
                    <RenderUserFeedback teacherFeedback = { teacherFeedback } teacher = { teacher }/>
                </div>
            </div>

            <div className={ appClassesMapping.SpaceForPhoneClass }/>
        </div>
    )
}

export default TeachersDetailPage;