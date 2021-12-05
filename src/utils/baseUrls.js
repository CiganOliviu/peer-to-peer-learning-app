const baseBackendUrls = [
    { url: 'http://192.168.0.178:8000', enable: false },
    { url: 'http://localhost:8000', enable: false },
    { url: 'https://ptpcc.azurewebsites.net', enable: true },
];

const getBaseBackendUrl = () => {

    let result = '';

    baseBackendUrls.forEach((backend) => {

        result = backend?.enable ? backend?.url : result;
    });

    return result;
};

export const apiBaseURL = getBaseBackendUrl();