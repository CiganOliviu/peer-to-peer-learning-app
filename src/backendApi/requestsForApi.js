import { apiBaseURL } from "./baseBackendUrl";

const baseMathematicsURL = `${apiBaseURL}/mathematics`;
const baseRomanianURL = `${apiBaseURL}/romanian`;
const baseInformaticsURL = `${apiBaseURL}/informatics`;
const baseLoginURL = `${apiBaseURL}/details/login/`;
const baseContactURL = `${apiBaseURL}/contact`;
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
    fetchHomeworkCardDetails: `${BaseAPIDependencies}/homework-card`,
    fetchScheduleCardDetails: `${BaseAPIDependencies}/schedule-card`,
    fetchStaff: `${baseStatsURL}/staff`,
    fetchStaffDetail: `${baseStatsURL}/staff/`,
    fetchClient: `${baseStatsURL}/client`,
    fetchTeacher: `${baseStatsURL}/teacher`,
    fetchTeacherDetail: `${baseStatsURL}/teacher/`,
    fetchFeedbackGet: `${baseStatsURL}/feedback`,
    fetchTeacherExpectations: `${baseStatsURL}/teacher-expectations`,
    fetchStudentExpectations: `${baseStatsURL}/student-expectations`,
    fetchFeedback: `${baseStatsURL}/feedback`,
    fetchLogin: `${baseLoginURL}`,
    fetchContact: `${baseContactURL}/contact-lister`,
}

export default requests;