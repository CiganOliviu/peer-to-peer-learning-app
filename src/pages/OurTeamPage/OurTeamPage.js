import React, { useEffect, useState } from 'react'
import { useCustomFetchStaff } from "../../backendApi/apiCalls";
import RenderStaff from "../../components/StaffContainer/RenderStaff/RenderStaff";
import {appClassesMapping, pagesClassesMapping} from "../../helpers/classesMapping";

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
        <div className={ pagesClassesMapping.StaffTeamPageClass }>
            <div className={ appClassesMapping.BreathingSpaceSmallClass } />
            <div className={ appClassesMapping.FlexContainerClass }>
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