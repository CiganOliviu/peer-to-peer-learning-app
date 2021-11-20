import React, {useEffect, useState} from 'react'
import { useCustomFetchStaff } from "../../utils/apiCalls";
import RenderStaff from "../../components/StaffContainer/RenderStaff/RenderStaff";

function OurTeamPage() {

    const [staff, setStaff] = useState([]);
    const { serverErrorStaff, apiDataStaff } = useCustomFetchStaff();

    useEffect(() => {

        if (apiDataStaff) setStaff(apiDataStaff);

        if (serverErrorStaff) throw new Error("Fetch Error")

    }, [apiDataStaff, serverErrorStaff])

    return (
        <div className="StaffTeam">
            <div className="BreathingSpaceSmall"/>
            <div className="FlexContainer">
                {
                    staff.map((data) => {
                        return <RenderStaff data={ data } />;
                    })
                }
            </div>
        </div>
    )
}

export default OurTeamPage;