import { stagingBaseUrl } from "./baseUrls";

const baseMathematicsURL = `${stagingBaseUrl}/mathematics`;
const baseRomanianURL = `${stagingBaseUrl}/romanian`;
const baseInformaticsURL = `${stagingBaseUrl}/informatics`;
const baseLoginURL = `${stagingBaseUrl}/details/login/`;
const baseStatsURL = `${stagingBaseUrl}/stats`;
const BaseAPIDependencies = `${stagingBaseUrl}/app-dependencies`;

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