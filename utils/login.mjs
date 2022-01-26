import fetch from 'node-fetch';

const login = async ({username, password}) => {
    const options = {
        method: "POST",
        body: JSON.stringify({username, password}),
        headers: {'Content-type': 'application/json'}
    };

    const apiResponse = await fetch('https://dev.stedi.me/login', options);

    const loginResponse = await apiResponse.text();

    return loginResponse;
}

export default login;