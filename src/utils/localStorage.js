export const LOCAL_STORAGE_KEYS = {
    userInfo: "user-info",
};

export function getUserInfoParse() {

    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.userInfo));
}

export function isUserDataValid(apiData) {
    if (apiData.user !== undefined)
        return (apiData.user).length !== 0

    return false;
}