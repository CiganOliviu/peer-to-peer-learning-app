import React from 'react'
import { apiBaseURL } from "../../../utils/baseUrls";
import { useHistory } from "react-router-dom";
import GetSocialDetails from "../../GetSocialDetails/GetSocialDetails";
import '../StaffContainer.css'

function RenderStaff({ data, url }) {

    const history = useHistory()
    const isNotTeacher = !data?.domain_expertise;

    return (
        <div className="FlexChild" data-aos="zoom-in">
            <div className="SpaceForPhone" />
            <div>
                <div className="OurTeam" onClick={() => { history.push(`${url}${ data?.id }`) }} >
                    <img src={`${apiBaseURL}${ data?.profile}`} alt={ data?.profile }/>
                    <div className="TeamContent">
                        <h3 className="Name">{ data?.first_name } {data?.last_name}</h3>
                        <span className="Post">{ data?.preview ?? data?.one_prop_description }</span>
                        <div>&nbsp;</div>
                        <p className="ShineMessage"><b>{ data?.position?.name }</b></p>
                        {
                            data?.domain_expertise?.map((domain) => {
                                return (
                                    <div>
                                        <div>&nbsp;</div>
                                        <p className="ShineMessage"><b>Profesor de { domain?.domain }</b></p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            { isNotTeacher && <GetSocialDetails socialMediaData = { data } /> }
            { isNotTeacher && <div className="SpaceForLargeBreakPoint" /> }
            <div className="SpaceForPhone" />
        </div>
    )
}

export default RenderStaff;