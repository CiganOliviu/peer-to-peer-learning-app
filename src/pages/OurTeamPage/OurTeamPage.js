import React, { useEffect, useState } from 'react'
import { useCustomFetchStaff } from "../../utils/apiCalls";
import RenderStaff from "../../components/StaffContainer/RenderStaff/RenderStaff";

function OurTeamPage() {

    const [staff, setStaff] = useState([]);
    const { serverErrorStaff, apiDataStaff } = useCustomFetchStaff();
    const url = '/staff-detail/';

    useEffect(() => {

        if (apiDataStaff) setStaff(apiDataStaff);
    }, [apiDataStaff])

    useEffect(() => {

        if (serverErrorStaff) throw new Error("Fetch Error");
    }, [serverErrorStaff])

    return (
        <div className="StaffTeam">
            <div className="BreathingSpaceSmall"/>
            <div className="FlexContainer">
                {
                    staff.map((data) => {
                        return <RenderStaff data={ data } url={ url } />;
                    })
                }
            </div>
        </div>
    )
}

export default OurTeamPage;