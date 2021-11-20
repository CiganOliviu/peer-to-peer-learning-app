import React, { useEffect, useState } from 'react'
import { useCustomFetchStaff } from "../../../utils/apiCalls";
import RenderStaff from "../RenderStaff/RenderStaff";
import '../StaffContainer.css'

function HomeStaffContainerSection() {

    const [staff, setStaff] = useState([]);
    const { serverErrorStaff, apiDataStaff } = useCustomFetchStaff();

    useEffect(() => {

        if (apiDataStaff) setStaff(apiDataStaff);

        if (serverErrorStaff) throw new Error("Fetch Error")

    }, [apiDataStaff, serverErrorStaff])

    return (
        <div className="FlexContainer">
            {
                staff.map((data) => {
                    return data?.position?.name === 'Founder' || data?.position?.name === 'CoFounder'
                        ? <RenderStaff data={ data } /> : <></>;
                })
            }
        </div>
    )
}

export default HomeStaffContainerSection;