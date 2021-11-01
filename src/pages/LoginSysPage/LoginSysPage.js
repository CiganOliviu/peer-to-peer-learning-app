import React, { useState } from 'react'
import { useHistory, Redirect } from "react-router-dom";
import { asyncHandleLogin } from "../../utils/apiCalls";
import { getUserInfoParse, isUserDataValid, LOCAL_STORAGE_KEYS } from "../../utils/localStorage";

import './LoginSysPage.css'


function LoginSysPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const userInfo = getUserInfoParse();

    let history = useHistory();

    function handleLogin() {

        if (username === '' || password === '')
            setErrorMessage("Unable to process empty fields");

        if (username !== '' && password !== '') {
            asyncHandleLogin(username, password).then((apiData) => {

                if (isUserDataValid(apiData)) {
                    localStorage.setItem(LOCAL_STORAGE_KEYS.userInfo, JSON.stringify(apiData));

                    if (Object.keys(apiData.user).length !== 0)
                        history.push('/');
                } else
                    setErrorMessage(apiData.non_field_errors)

            })
        }
    }

    function handleAsGuest() {

        history.push('/');
    }

    if (userInfo) return <Redirect to="/" />

    return (
        <div className="LoginSys">
            <div className="Form">
                <h1>Login</h1>
                <div className="Padding"/>

                <input type="text" placeholder="username" onChange = { event => setUsername(event.target.value) } />
                <div className="Padding"/>

                <input type="password" placeholder="password" onChange = { event => setPassword(event.target.value) } />
                <div className="Padding"/>

                <div className="Padding"/>

                {errorMessage && <div className="Error"><b>{errorMessage}</b></div>}
                <br/>

                <div className="flex">
                    <button type="submit" className="Active" onClick = { handleLogin }>Login</button>
                    <button type="submit" className="BorderedButton" onClick = { handleAsGuest }>Go as Guest</button>
                </div>
            </div>
        </div>
    )
}

export default LoginSysPage;