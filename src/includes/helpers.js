import axiosClient from '../includes/axiosClient';

import { useAppStore } from '../stores/app';

export const apiCall = async ({
    method,
    path, 
    params = null, 
    query = null, 
    body = null,
    success,
    fail = null,
    loading = null} = {}) => {

    const appStore = useAppStore();
    appStore.appState = 'busy';
    
    let apiCallString = `${path}`;

    if(loading) loading();

    if(params) {

        Object.entries(params).forEach(([_, value]) => {
            apiCallString += `/${value}`;
        });
    }

    if(query) {

        apiCallString += `/?`;
        
        Object.entries(query).forEach(([key, value]) => {
            apiCallString += `${key}=${value}&`
        });
    }

    try {
        
        const res = await axiosClient[method](apiCallString, {...body});
        success(res.data);

    } catch (err) {

        if (fail) fail.handler({open: true, header: fail.header, msg: fail.msg[err.response.data]});

    }

    if(loading) loading();

    appStore.appState = 'available';
    
}

export const calcAppPrefs = (data) => {
    const appStore = useAppStore();
    const lang = appStore.langs.filter(lang => lang.locale === data.lang)[0];
    const darkModeChecked = data.mode === 'dark';
    return {lang, darkModeChecked};
}