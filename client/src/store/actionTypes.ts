import IUser from "./interfaces/IUser";

export const GET_LIST = "GET_LIST";

interface GET_LIST {
    type: typeof GET_LIST,
    payload: IUser[]
}

export type IActions = GET_LIST;
