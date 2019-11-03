import IUserState from "./interfaces/IUserState";
import { IActions, GET_LIST } from "./actionTypes";

const userState: IUserState = {
    users: []
}

export function userReducer(state = userState, action: IActions): IUserState {
    switch(action.type) {
        case GET_LIST: {
            return {
                ...state,
                users: action.payload
            }
        }
        default: {
            return state;
        }
    }
}