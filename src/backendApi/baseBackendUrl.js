const publicInternIpBackendApi = 'http://192.168.0.178:8000';
const localBackendApi = 'http://localhost:8000'
const publicBackendApi = 'https://ptpcc.azurewebsites.net'

const baseBackendUrls = [
    { url: publicInternIpBackendApi, enable: false },
    { url: localBackendApi, enable: false },
    { url: publicBackendApi, enable: true },
];

const getBaseBackendUrl = () => {

    let result = '';

    baseBackendUrls.forEach((backend) => {

        result = backend?.enable ? backend?.url : result;
    });

    return result;
};

export const apiBaseURL = getBaseBackendUrl();