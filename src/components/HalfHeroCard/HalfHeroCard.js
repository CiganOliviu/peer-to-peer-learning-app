import React from 'react'
import './HalfHeroCard.css'
import {componentsClassesMapping} from "../../helpers/classesMapping";

function HalfHeroCard({ imageUrl }) {

    return (
        <div className={ componentsClassesMapping.HalfHeroCardClass } style={{ backgroundImage: `url(${imageUrl})` }}/>
    )
}

export default HalfHeroCard;