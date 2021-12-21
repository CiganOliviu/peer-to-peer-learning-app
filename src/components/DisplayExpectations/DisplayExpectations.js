import React from 'react'
import { appClassesMapping, componentsClassesMapping } from "../../helpers/classesMapping";

function DisplayExpectations({ index, data }) {

    const textLog = data?.log
    textLog.replace(/(?:\r\n|\r|\n)/g, '<br />');

    return (
        <div className={ componentsClassesMapping.DisplayExpectationsClass }>
                <p className={ componentsClassesMapping.ShineMessageClass }><b>{ index }. { data?.title }</b></p>
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
                <p className={ componentsClassesMapping.ShineMessageClass }><b>Posted on</b></p>
                <div>&nbsp;</div>
                <p>{ data?.posted_on }</p>
                <div>&nbsp;</div>
                <p className={ componentsClassesMapping.ShineMessageClass }><b>Deadline</b></p>
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