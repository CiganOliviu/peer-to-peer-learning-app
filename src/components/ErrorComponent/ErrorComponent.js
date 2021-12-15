import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGhost } from "@fortawesome/free-solid-svg-icons";
import '../../pages/Error404Page/Error404Page.css'
import { pagesClassesMapping } from "../../helpers/classesMapping";

function ErrorComponent() {

    return (
        <div className={ pagesClassesMapping.Error404PageClass }>
            <main>
                <h1><span><FontAwesomeIcon key='UserCircle' icon={ faGhost } /></span></h1>
                <h2>Error: Unable to process data</h2>
                <p>Sorry, there is something wrong with the platform itself, we will fix it as quickly as possible</p>
            </main>
        </div>
    )
}

export default ErrorComponent;