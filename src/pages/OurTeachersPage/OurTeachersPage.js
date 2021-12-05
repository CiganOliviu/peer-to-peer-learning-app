import React, { useEffect, useState } from "react";
import { useCustomFetchTeacher } from "../../utils/apiCalls"
import RenderStaff from "../../components/StaffContainer/RenderStaff/RenderStaff";

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
        <div className="TeachersTeam">
            <div className="BreathingSpaceSmall" />
            <div className="FlexContainer">
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