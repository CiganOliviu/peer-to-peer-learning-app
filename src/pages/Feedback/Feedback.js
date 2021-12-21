import React, {useEffect, useState} from 'react'
import { asyncHandleFeedback, useCustomFetchTeacher } from "../../backendApi/apiCalls";
import { createBrowserHistory } from 'history';
import { getUserInfoParse } from "../../helpers/localStorage";
import {appClassesMapping, pagesClassesMapping} from "../../helpers/classesMapping";
import './Feedback.css';

function Feedback() {

    const userInfo = getUserInfoParse();

    let history = createBrowserHistory({ forceRefresh:true });

    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [targetTeacher, setTargetTeacher] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

    const [teacherDetails, setTeacherDetails] = useState([]);
    const { serverErrorTeacher, apiDataTeacher } = useCustomFetchTeacher();

    const isDataInvalid = () => {
        return title === '' || message === '' || targetTeacher === '';
    };

    const isDataValid = () => {
        return title !== '' || message !== '' || targetTeacher !== '';
    };

    const handleFeedback = () => {

        if (isDataInvalid())
            setErrorMessage("Unable to process empty fields");


        if (isDataValid()) {
            asyncHandleFeedback(title, message, targetTeacher).then(() => {

                setErrorMessage("");
                history.push('/');
                history.go('/')
            })
        }
    };

    useEffect(() => {

        if (apiDataTeacher) setTeacherDetails(apiDataTeacher);
    }, [apiDataTeacher]);

    useEffect(() => {

        if (serverErrorTeacher) throw new Error("Fetch error");
    }, [serverErrorTeacher]);

    function handleGoHomeButton() {

        history.push('/');
        history.go('/');
    }

    if (!userInfo)
        history.push('/login')

    return (
        <div className={ pagesClassesMapping.FeedbackSysPageClass }>
            <div className={ appClassesMapping.FormClass }>
                <h1>Feedback</h1>
                <div className={ appClassesMapping.PaddingClass }/>

                <input type="text" placeholder="Titlu" onChange = { event => setTitle(event?.target?.value) }/>
                <div className={ appClassesMapping.PaddingClass }/>

                <textarea rows="4" placeholder="Mesaj" onChange = { event => setMessage(event?.target?.value) }/>
                <div className={ appClassesMapping.PaddingClass }/>

                <div>&nbsp;</div>
                <select onChange = { event => setTargetTeacher(event?.target?.value) }>
                    <option value="">Select a teacher</option>
                    {
                        teacherDetails.map((data) => (
                            <option value={ data?.id }>{ data?.first_name } { data?.last_name }</option>
                        ))
                    }
                </select>

                <div className={ appClassesMapping.PaddingClass }/>

                { errorMessage && <div className="Error"><b>{ errorMessage }</b></div> }
                <br/>

                <div className="flex">
                    <button type="submit" className={ appClassesMapping.ActiveClass } onClick = { handleFeedback }>Send feedback</button>
                    <button type="submit" className={ appClassesMapping.BorderedButtonClass } onClick = { handleGoHomeButton }>Go Home</button>
                </div>
            </div>
        </div>
    )
}

export default Feedback;