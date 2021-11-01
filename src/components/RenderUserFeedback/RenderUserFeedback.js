import React from "react";


function RenderUserFeedback({ teacherFeedback, teacher }) {

    return (
        teacherFeedback.map((data) => {
            if (data?.targetTeacher === teacher?.id)
                return (
                    <div>
                        <div className="Cell" style={{ textAlign: 'center', }}>
                            <div>&nbsp;</div>
                            <p><b>{ data?.title }</b></p>
                            <p>{ data?.message }</p>
                        </div>
                        <div>&nbsp;</div>
                        <div className="Border"/>
                    </div>
                )
            else
                return (
                    <></>
                )
        })
    )
}

export default RenderUserFeedback;