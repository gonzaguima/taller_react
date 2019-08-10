import axios from 'axios';

const API = 'https://taller-frontend.herokuapp.com/api';

export function loginUser({ emailLogin, passLogin }) {
    return axios.post(`${API}/user/login`, /* aca es donde esta mal */ {
        headers: {
            "Content-Type": "application/json"
        }, body: {
            "email": emailLogin,
            "password": passLogin
        }
    });
}

export function registroUser(user) {
    return axios.post(`${API}/user`, user, {
        headers: {
            "Content-Type": "application/json"
        }
    });
}
