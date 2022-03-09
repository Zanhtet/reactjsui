export const getApi = (url, callBack) => {
    fetch(url).then(response => response.text().then(text => callBack(text)));
}

export const postApi = (url, params, callBack) => {
    const requestOptions = {
        method: 'POST',
        body: params
    };
    fetch(url, requestOptions).then(response => response.text().then(text => callBack(text)))
}

export const putApi = (url, params, callBack) => {
    const requestOptions = {
        method: 'PUT',
        body: params
    };
    fetch(url, requestOptions).then(response => response.text().then(text => callBack(text)))
}

export const deteleApi = (url, callBack) => {
    const requestOptions = {
        method: 'DELETE'
    };
    fetch(url, requestOptions).then(response => response.text().then(text => callBack(text)))
}