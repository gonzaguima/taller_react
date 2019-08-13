import { ACTIONS } from "../../constants";

export default function userReducer(state ={user:undefined}, action) {
  switch (action.type) {
    case ACTIONS.LOGIN:
      return {...state, user:action.user}
    case ACTIONS.LOGOUT:
      return {...state, user:undefined}
    default:
      return state;
  }
}
