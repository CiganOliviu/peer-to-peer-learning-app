import React, { useState } from 'react';
import { useHistory, Redirect } from "react-router-dom";
import { asyncHandleLogin } from "../../backendApi/apiCalls";
import { getUserInfoParse, isUserDataValid, LOCAL_STORAGE_KEYS } from "../../helpers/localStorage";
import { appClassesMapping, pagesClassesMapping } from "../../helpers/classesMapping";
import './LoginSysPage.css';

function LoginSysPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const userInfo = getUserInfoParse();

    let history = useHistory();

    const isDataInvalid = () => {
        return username === '' || password === '';
    };

    const isDataValid = () => {
        return username !== '' && password !== '';
    };

    const handleLogin = () => {

        if (isDataInvalid()) setErrorMessage("Unable to process empty fields");

        if (isDataValid()) {
            asyncHandleLogin(username, password).then((apiData) => {

                if (isUserDataValid(apiData)) {
                    localStorage.setItem(LOCAL_STORAGE_KEYS.userInfo, JSON.stringify(apiData));

                    if (Object.keys(apiData.user).length !== 0)
                        history.push('/');
                } else
                    setErrorMessage(apiData.non_field_errors)

            })
        }
    };

    const handleAsGuest = () => {

        history.push('/');
    };

    if (userInfo) return <Redirect to="/" />

    return (
        <div className={ pagesClassesMapping.LoginSysPageClass }>
            <div className={ appClassesMapping.FormClass }>
                <h1>Login</h1>
                <div className={ appClassesMapping.PaddingClass }/>

                <input type="text" placeholder="username" onChange = { event => setUsername(event.target.value) } />
                <div className={ appClassesMapping.PaddingClass }/>

                <input type="password" placeholder="password" onChange = { event => setPassword(event.target.value) } />
                <div className={ appClassesMapping.PaddingClass }/>

                <div className={ appClassesMapping.PaddingClass }/>

                { errorMessage && <div className="Error"><b>{errorMessage}</b></div> }
                <br/>

                <div className="flex">
                    <button type="submit" className={ appClassesMapping.ActiveClass } onClick = { handleLogin }>Login</button>
                    <button type="submit" className={ appClassesMapping.BorderedButtonClass } onClick = { handleAsGuest }>Go as Guest</button>
                </div>
            </div>
        </div>
    )
}

export default LoginSysPage;