import React, { useState, useEffect } from "react";
import { useCustomFetchStaffDetail } from "../../utils/apiCalls";
import { useParams } from "react-router-dom";
import GetEssentialStaffMemberData from "../../components/GetSpecificData/GetEssentialStaffMemberData";
import GetAuxStaffMemberData from "../../components/GetSpecificData/GetAuxStaffMemberData";

function StaffDetailPage() {

    const { id } = useParams();
    const [staffMember, setStaffMember] = useState([]);

    const { serverErrorStaffDetail, apiDataStaffDetail } = useCustomFetchStaffDetail(id);

    useEffect(() => {
        if (apiDataStaffDetail) setStaffMember(apiDataStaffDetail);
    }, [apiDataStaffDetail])

    useEffect(() => {
        if (serverErrorStaffDetail) throw new Error('Fetch Error');
    }, [serverErrorStaffDetail]);

    return (
        <div className="TeacherDetails">
            <div className="FlexContainer">
                <div className="FlexChild">
                    <div className="MediumPadding"/>
                    <GetEssentialStaffMemberData member = { staffMember } />
                </div>
                <div className="FlexChild">
                    <h1 className="ShineMessage">Presentation</h1>
                    <div className="BreathingSpaceMedium"/>
                    <GetAuxStaffMemberData member = { staffMember} />
                </div>
            </div>

            <div className="SpaceForPhone"/>
        </div>
    )
}

export default StaffDetailPage;
