import requests from './requestsForApi';
import useCustomFetch from './apiCustomHook.js'


const useCustomFetchMathematicsGroups = () => {
    const {
        error: serverErrorMathematicsGroups,
        data: apiDataMathematicsGroups,
        isLoading: isLoadingMathematicsGroups,
    } = useCustomFetch(requests.fetchMathematicsDepartmentGroups);

    return { isLoadingMathematicsGroups, serverErrorMathematicsGroups, apiDataMathematicsGroups };
};


const useCustomFetchRomanianGroups = () => {
    const {
        error: serverErrorRomanianGroups,
        data: apiDataRomanianGroups,
        isLoading: isLoadingRomanianGroups,
    } = useCustomFetch(requests.fetchRomanianDepartmentGroups);

    return { isLoadingRomanianGroups, serverErrorRomanianGroups, apiDataRomanianGroups };
};


const useCustomFetchInformaticsGroups = () => {
    const {
        error: serverErrorInformaticsGroups,
        data: apiDataInformaticsGroups,
        isLoading: isLoadingInformaticsGroups,
    } = useCustomFetch(requests.fetchInformaticsDepartmentGroups);

    return { isLoadingInformaticsGroups, serverErrorInformaticsGroups, apiDataInformaticsGroups };
};


const useCustomFetchInformaticsHomework = () => {
    const {
        error: serverErrorInformaticsHomework,
        data: apiDataInformaticsHomework,
        isLoading: isLoadingInformaticsHomework,
    } = useCustomFetch(requests.fetchInformaticsDepartmentHomework);

    return { isLoadingInformaticsHomework, serverErrorInformaticsHomework, apiDataInformaticsHomework };
};


const useCustomFetchMathematicsHomework = () => {
    const {
        error: serverErrorMathematicsHomework,
        data: apiDataMathematicsHomework,
        isLoading: isLoadingMathematicsHomework,
    } = useCustomFetch(requests.fetchMathematicsDepartmentHomework);

    return { isLoadingMathematicsHomework, serverErrorMathematicsHomework, apiDataMathematicsHomework };
};


const useCustomFetchRomanianHomework = () => {
    const {
        error: serverErrorRomanianHomework,
        data: apiDataRomanianHomework,
        isLoading: isLoadingRomanianHomework,
    } = useCustomFetch(requests.fetchRomanianDepartmentHomework);

    return { isLoadingRomanianHomework, serverErrorRomanianHomework, apiDataRomanianHomework };
}


const useCustomFetchInformaticsSchedule = () => {
    const {
        error: serverErrorInformaticsSchedule,
        data: apiDataInformaticsSchedule,
        isLoading: isLoadingInformaticsSchedule,
    } = useCustomFetch(requests.fetchInformaticsDepartmentSchedule);

    return { isLoadingInformaticsSchedule, serverErrorInformaticsSchedule, apiDataInformaticsSchedule };
}


const useCustomFetchMathematicsSchedule = () => {
    const {
        error: serverErrorMathematicsSchedule,
        data: apiDataMathematicsSchedule,
        isLoading: isLoadingMathematicsSchedule,
    } = useCustomFetch(requests.fetchMathematicsDepartmentSchedule);

    return { isLoadingMathematicsSchedule, serverErrorMathematicsSchedule, apiDataMathematicsSchedule };
}


const useCustomFetchRomanianSchedule = () => {
    const {
        error: serverErrorRomanianSchedule,
        data: apiDataRomanianSchedule,
        isLoading: isLoadingRomanianSchedule,
    } = useCustomFetch(requests.fetchRomanianDepartmentSchedule);

    return { isLoadingRomanianSchedule, serverErrorRomanianSchedule, apiDataRomanianSchedule };
}


const useCustomFetchHeroCard = () => {
    const {
        error: serverErrorHeroCard,
        data: apiDataHeroCard,
        isLoading: isLoadingHeroCard,
    } = useCustomFetch(requests.fetchHeroCardDetails);

    return { isLoadingHeroCard, serverErrorHeroCard, apiDataHeroCard };
};


const useCustomFetchHomeworkCard = () => {
    const {
        error: serverErrorHomeworkCard,
        data: apiDataHomeworkCard,
        isLoading: isLoadingHomeworkCard,
    } = useCustomFetch(requests.fetchHomeworkCardDetails);

    return { isLoadingHomeworkCard, serverErrorHomeworkCard, apiDataHomeworkCard };
};


const useCustomFetchScheduleCard = () => {
    const {
        error: serverErrorScheduleCard,
        data: apiDataScheduleCard,
        isLoading: isLoadingScheduleCard,
    } = useCustomFetch(requests.fetchScheduleCardDetails);

    return { isLoadingScheduleCard, serverErrorScheduleCard, apiDataScheduleCard };
};


const useCustomFetchStaff = () => {
    const {
        error: serverErrorStaff,
        data: apiDataStaff,
        isLoading: isLoadingStaff,
    } = useCustomFetch(requests.fetchStaff);

    return { isLoadingStaff, serverErrorStaff, apiDataStaff };
};


const useCustomFetchStaffDetail = id => {
    const {
        error: serverErrorStaffDetail,
        data: apiDataStaffDetail,
        isLoading: isLoadingStaffDetail,

    } = useCustomFetch(`${requests.fetchStaffDetail}${id}`);

    return { isLoadingStaffDetail, serverErrorStaffDetail, apiDataStaffDetail }
}


const useCustomFetchClient = () => {
    const {
        error: serverErrorClient,
        data: apiDataClient,
        isLoading: isLoadingClient,
    } = useCustomFetch(requests.fetchClient);

    return { isLoadingClient, serverErrorClient, apiDataClient };
};


const useCustomFetchTeacher = () => {
    const {
        error: serverErrorTeacher,
        data: apiDataTeacher,
        isLoading: isLoadingTeacher,

    } = useCustomFetch(requests.fetchTeacher);

    return { isLoadingTeacher, serverErrorTeacher, apiDataTeacher }
}


const useCustomFetchTeacherDetail = id => {
    const {
        error: serverErrorTeacherDetail,
        data: apiDataTeacherDetail,
        isLoading: isLoadingTeacherDetail,

    } = useCustomFetch(`${requests.fetchTeacherDetail}${id}`);

    return { isLoadingTeacherDetail, serverErrorTeacherDetail, apiDataTeacherDetail }
}


const useCustomFetchFeedbackGet = () => {
    const {
        error: serverErrorFeedbackGet,
        data: apiDataFeedbackGet,
        isLoading: isLoadingFeedbackGet,

    } = useCustomFetch(requests.fetchFeedbackGet);

    return { isLoadingFeedbackGet, serverErrorFeedbackGet, apiDataFeedbackGet }
}

const useCustomFetchTeacherExpectations = () => {
    const {
        error: serverErrorTeacherExpectations,
        data: apiDataTeacherExpectations,
        isLoading: isLoadingTeacherExpectations,

    } = useCustomFetch(requests.fetchTeacherExpectations);

    return { isLoadingTeacherExpectations, serverErrorTeacherExpectations, apiDataTeacherExpectations }
}


const useCustomFetchStudentExpectations = () => {
    const {
        error: serverErrorStudentExpectations,
        data: apiDataStudentExpectations,
        isLoading: isLoadingStudentExpectations,

    } = useCustomFetch(requests.fetchStudentExpectations);

    return { isLoadingStudentExpectations, serverErrorStudentExpectations, apiDataStudentExpectations }
}


export async function asyncHandleFeedback(title, message, targetTeacher) {

    try {
        const request = await fetch(requests.fetchFeedback, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                message,
                targetTeacher
            }),
        });

        return await request.json();

    } catch (error) {

        throw new Error(error);
    }
}


export async function asyncHandleLogin(username, password) {

    try {
        const request = await fetch(requests.fetchLogin, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
            }),
        });

        return await request.json();

    } catch (error) {

        throw new Error(error);
    }
}

export async function asyncHandleContact(first_name, last_name, email, client_type, subject, phone_number, message) {

    try {
        const request = await fetch(requests.fetchContact, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                first_name,
                last_name,
                email,
                client_type,
                subject,
                phone_number,
                message,
            }),
        });

        return await request.json();

    } catch (error) {

        throw new Error(error);
    }
}

export {
    useCustomFetchMathematicsGroups,
    useCustomFetchRomanianGroups,
    useCustomFetchInformaticsGroups,
    useCustomFetchInformaticsHomework,
    useCustomFetchMathematicsHomework,
    useCustomFetchRomanianHomework,
    useCustomFetchInformaticsSchedule,
    useCustomFetchMathematicsSchedule,
    useCustomFetchRomanianSchedule,
    useCustomFetchHeroCard,
    useCustomFetchHomeworkCard,
    useCustomFetchScheduleCard,
    useCustomFetchStaff,
    useCustomFetchStaffDetail,
    useCustomFetchClient,
    useCustomFetchTeacher,
    useCustomFetchTeacherDetail,
    useCustomFetchFeedbackGet,
    useCustomFetchTeacherExpectations,
    useCustomFetchStudentExpectations,
}