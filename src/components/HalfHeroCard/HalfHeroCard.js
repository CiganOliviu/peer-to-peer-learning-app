import React from 'react'
import './HalfHeroCard.css'
import {componentsClassesMapping} from "../../helpers/classesMapping";
import { apiBaseURL } from "../../backendApi/baseBackendUrl";

function HalfHeroCard({ imageUrl }) {

    return (
        <div className={ componentsClassesMapping.HalfHeroCardClass } style={{ backgroundImage: `url(${apiBaseURL}${imageUrl})` }}/>
    )
}

export default HalfHeroCard;