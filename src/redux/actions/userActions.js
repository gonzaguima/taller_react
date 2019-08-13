import { ACTIONS } from "../../constants";

export function saveUser(user) {
    return {
        type: ACTIONS.LOGIN,
        user
    };
}

export function logoutUser(id) {
    return {
        type: ACTIONS.LOGOUT,
        id
    };
}