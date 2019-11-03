import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { BASE_URL } from '../utils/constants';
import IUser from './interfaces/IUser';
import { handleError } from '../utils/errorHandler';
import { GET_LIST, IActions } from './actionTypes';
import { GlobalState } from '.';

export const getUserThunk = (data: IUser[]): ThunkAction<void, GlobalState, () => any, Action<string>> => async (dispatch, getState, api) => {
    const users = await getUsers();
    console.log(api())
    dispatch(setUsersToState(users))
}

export function setUsersToState(users: IUser[]): IActions {
    return {
        type: GET_LIST,
        payload: users
    }
}

export function getUsers(): Promise<IUser[]> {
    return fetch(`${BASE_URL}/getUsers`)
        .then(res => res.json())
        .then(res => {
            if(res.success) {
                return Promise.resolve(res.data)
            }
        })
        .catch(err => handleError(err))
}