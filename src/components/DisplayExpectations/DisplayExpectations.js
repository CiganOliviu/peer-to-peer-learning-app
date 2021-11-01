import React from 'react'


function DisplayExpectations({ data }) {

    return (
        <div className="DisplayExpectations">
                <p className="ShineMessage"><b>{ data.id }. { data.title }</b></p>
                <div>&nbsp;</div>
                <p>{ data.log }</p>
                <div>&nbsp;</div>
                <p className="ShineMessage"><b>Posted on</b></p>
                <div>&nbsp;</div>
                <p>{ data.posted_on }</p>
                <div>&nbsp;</div>
                <p className="ShineMessage"><b>Deadline</b></p>
                <div>&nbsp;</div>
                <p>{ data.deadline }</p>
                <div>&nbsp;</div>
                <p>{ data.done }</p>
                <div>&nbsp;</div>
                <div className="BreathingSpaceSmall" />
                <div className="Border"/>
        </div>
    )
}

export default DisplayExpectations;