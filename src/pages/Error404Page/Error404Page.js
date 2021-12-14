import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost } from '@fortawesome/free-solid-svg-icons';
import { pagesClassesMapping } from "../../helpers/classesMapping";
import './Error404Page.css';

function Error404Page() {

    return (
        <div className={ pagesClassesMapping.Error404PageClass }>
            <main>
                <h1>4<span><FontAwesomeIcon key='UserCircle' icon={ faGhost } /></span>4</h1>
                <h2>Error: 404 page not found</h2>
                <p>Sorry, the page you're looking for cannot be accessed</p>
                <div>&nbsp;</div>
                <a href="/">Go home</a>
            </main>
        </div>
    )
}

export default Error404Page;