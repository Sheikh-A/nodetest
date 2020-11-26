import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: "https://astesting123.herokuapp.com/api",
        headers: {
            "content-type": "application/json",
            Authorization: JSON.parse(token)
        }
    })
}
