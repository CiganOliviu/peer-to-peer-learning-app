import { apiBaseURL } from "./baseUrls";

const baseMathematicsURL = `${apiBaseURL}/mathematics`;
const baseRomanianURL = `${apiBaseURL}/romanian`;
const baseInformaticsURL = `${apiBaseURL}/informatics`;
const baseLoginURL = `${apiBaseURL}/details/login/`;
const baseStatsURL = `${apiBaseURL}/stats`;
const BaseAPIDependencies = `${apiBaseURL}/app-dependencies`;

const requests = {

    fetchInformaticsDepartmentGroups: `${baseInformaticsURL}/informatics-group`,
    fetchMathematicsDepartmentGroups: `${baseMathematicsURL}/mathematics-group`,
    fetchRomanianDepartmentGroups: `${baseRomanianURL}/romanian-group`,
    fetchInformaticsDepartmentHomework: `${baseInformaticsURL}/informatics-homework`,
    fetchMathematicsDepartmentHomework: `${baseMathematicsURL}/mathematics-homework`,
    fetchRomanianDepartmentHomework: `${baseRomanianURL}/romanian-homework`,
    fetchInformaticsDepartmentSchedule: `${baseInformaticsURL}/informatics-schedule`,
    fetchMathematicsDepartmentSchedule: `${baseMathematicsURL}/mathematics-schedule`,
    fetchRomanianDepartmentSchedule: `${baseRomanianURL}/romanian-schedule`,
    fetchHeroCardDetails: `${BaseAPIDependencies}/hero-card`,
    fetchStaff: `${baseStatsURL}/staff`,
    fetchClient: `${baseStatsURL}/client`,
    fetchTeacher: `${baseStatsURL}/teacher`,
    fetchTeacherDetail: `${baseStatsURL}/teacher/`,
    fetchFeedbackGet: `${baseStatsURL}/feedback`,
    fetchTeacherExpectations: `${baseStatsURL}/teacher-expectations`,
    fetchStudentExpectations: `${baseStatsURL}/student-expectations`,
    fetchFeedback: `${baseStatsURL}/feedback`,
    fetchLogin: `${baseLoginURL}`,
}

export default requests;