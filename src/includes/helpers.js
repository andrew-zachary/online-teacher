import axiosClient from '../includes/axiosClient';

export const apiCall = async ({method, path, params = null, query = null, body = null, success, loading} = {}) => {
    
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
        console.log(err);
    }

    if(loading) loading();
}