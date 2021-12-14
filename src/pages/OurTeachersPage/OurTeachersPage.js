import React, { useEffect, useState } from "react";
import { useCustomFetchTeacher } from "../../backendApi/apiCalls"
import RenderStaff from "../../components/StaffContainer/RenderStaff/RenderStaff";
import {appClassesMapping, pagesClassesMapping} from "../../helpers/classesMapping";

function OurTeachersPage() {

    const [teacher, setTeacher] = useState([]);
    const { serverErrorTeacher, apiDataTeacher } = useCustomFetchTeacher();
    const url = 'teacher-detail/';

    useEffect(() => {

        if (apiDataTeacher) setTeacher(apiDataTeacher);
    }, [apiDataTeacher]);

    useEffect(() => {
        if (serverErrorTeacher) throw new Error("Fetch Error");
    }, [serverErrorTeacher]);

    return (
        <div className={ pagesClassesMapping.TeachersTeamPageClass }>
            <div className={ appClassesMapping.BreathingSpaceSmallClass } />
            <div className={ appClassesMapping.FlexContainerClass }>
                {
                    teacher.map((data) => {
                        return <RenderStaff data = { data } url = { url } />
                    })
                }
            </div>
        </div>
    )
}

export default OurTeachersPage;