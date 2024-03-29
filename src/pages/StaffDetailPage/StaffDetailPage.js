import React, { useState, useEffect } from "react";
import { useCustomFetchStaffDetail } from "../../backendApi/apiCalls";
import { useParams } from "react-router-dom";
import GetEssentialStaffMemberData from "../../components/GetSpecificData/GetEssentialStaffMemberData";
import GetAuxStaffMemberData from "../../components/GetSpecificData/GetAuxStaffMemberData";
import { appClassesMapping, pagesClassesMapping } from "../../helpers/classesMapping";

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
        <div className={ pagesClassesMapping.TeacherDetailsPageClass }>
            <div className={ appClassesMapping.FlexContainerClass }>
                <div className="FlexChild">
                    <div className={ appClassesMapping.MediumPaddingClass } />
                    <GetEssentialStaffMemberData member = { staffMember } />
                </div>
                <div className="FlexChild">
                    <h1 className="ShineMessage">Presentation</h1>
                    <div className={ appClassesMapping.BreathingSpaceMediumClass } />
                    <GetAuxStaffMemberData member = { staffMember} />
                </div>
            </div>

            <div className={ appClassesMapping.SpaceForPhoneClass } />
        </div>
    )
}

export default StaffDetailPage;
