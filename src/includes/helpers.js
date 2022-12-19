import axiosClient from '../includes/axiosClient';

export const apiCall = async ({
    method,
    path, 
    params = null, 
    query = null, 
    body = null,
    success,
    fail = null,
    loading = null} = {}) => {
    
    let apiCallString = `${path}`;

    if(loading) loading();

    if(params) apiCallString += `/${params.id}`;

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
}