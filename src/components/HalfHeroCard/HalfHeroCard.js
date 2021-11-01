import React from 'react'
import './HalfHeroCard.css'


function HalfHeroCard({ imageUrl }) {

    return (
        <div className="HalfHeroCard" style={{backgroundImage: `url(${imageUrl})`}}/>
    )
}

export default HalfHeroCard;