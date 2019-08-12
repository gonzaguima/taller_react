import axios from 'axios';

const API = 'https://taller-frontend.herokuapp.com/api';

export function loginUser(user) {
    return axios.post(`${API}/user/login`, user, {
        headers: {
            "Content-Type": "application/json"
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

export function logoutUser(user) {
    return axios.post(`${API}/user/logout`, user.id, {
        headers: {
            "Content-Type": "application/json"
        }
    });
}

export function confirmChampionship(user) {
    return axios.post(`${API}/user/confirmChampionship/${user}`, {
        headers: {
            "Content-Type": "application/json"
        }
    });
}

export function createTeam(team, user) {
    return axios.post(`${API}/team/${user.id}`, team, {
        headers: {
            "Content-Type": "application/json"
        }
    });
}

export function getTeam(teamId){
    return axios.get(`${API}/team/${teamId}`,{
        headers: {
            "Content-Type": "application/json"
        }
    });
}

export function getChampionship(championshipId){
    return axios.get(`${API}/team/getAllByChampionshipId/${championshipId}`,{
        headers: {
            "Content-Type": "application/json"
        }
    });
}

export function getMatch(matchId){
    return axios.get(`${API}/team/${matchId}`,{
        headers: {
            "Content-Type": "application/json"
        }
    });
}

export function finishMatch(matchId, body){
    return axios.put(`${API}/match/${matchId}`, body, {
        headers: {
            "Content-Type": "application/json"
        }
    });
}
