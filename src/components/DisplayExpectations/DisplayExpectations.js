import React from 'react'
import { appClassesMapping } from "../../helpers/classesMapping";

function DisplayExpectations({ index, data }) {

    const textLog = data?.log
    textLog.replace(/(?:\r\n|\r|\n)/g, '<br />');

    return (
        <div className="DisplayExpectations">
                <p className="ShineMessage"><b>{ index }. { data?.title }</b></p>
                <div>&nbsp;</div>
                {
                    textLog.split('\n').map(function(item, key) {
                        return (
                            <span key={key}>
                                <p>{ item }</p>
                                <br/>
                        </span>
                    )
                })}
                <div>&nbsp;</div>
                <p className="ShineMessage"><b>Posted on</b></p>
                <div>&nbsp;</div>
                <p>{ data?.posted_on }</p>
                <div>&nbsp;</div>
                <p className="ShineMessage"><b>Deadline</b></p>
                <div>&nbsp;</div>
                <p>{ data?.deadline }</p>
                <div>&nbsp;</div>
                <p>{ data?.done }</p>
                <div>&nbsp;</div>
                <div className={ appClassesMapping.BreathingSpaceSmallClass } />
                <div className="Border"/>
        </div>
    )
}

export default DisplayExpectations;