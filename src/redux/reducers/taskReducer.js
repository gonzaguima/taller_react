import { ACTIONS } from "./../../constants";

export default function taskReducer(state = [], action) {
    switch (action.type) {
        case ACTIONS.CREATE_TASK:
            const id = state.length + 1;
            return [...state, {
                ...action.task,
                id,
                completed: false
            }];
        case ACTIONS.DELETE_TASK:
            return state.filter(t => t.id !== action.id);
        case ACTIONS.MARK_AS_DONE_TASK:
            return state.map(t => t.id === action.id ? {
                ...t,
                completed: !t.completed
            } : t);
        default:
            return state;
    }
}