
export interface UsersState {
    userList: any[];
    filteredUserList: any[];
    loading: boolean;
    error: null | string;
}

export interface User {
    avatarUrl: string;
    birthday: string;
    department: string;
    firstName: string;
    id: string;
    lastName: string;
    phone: string
    position: string;
    userTag: string;
}

export enum UserActionTypes {
    GET_USERS = 'GET_USERS',
    GET_USERS_SUCCESS = 'GET_USERS_SUCCESS',
    GET_USERS_ERROR = 'GET_USERS_ERROR',
    FILTERED_USERS = 'FILTERED_USERS'
}

interface GetUsersAction {
    type: UserActionTypes.GET_USERS;
}

interface GetUsersSuccessAction {
    type: UserActionTypes.GET_USERS_SUCCESS;
    userList: any[];
}

interface GetUsersErrorAction {
    type: UserActionTypes.GET_USERS_ERROR;
    error: string;
}

interface FilteredUsersAction {
    type: UserActionTypes.FILTERED_USERS;
    filteredUserList: any[];
}

export type UsersAction = GetUsersAction | GetUsersErrorAction | GetUsersSuccessAction | FilteredUsersAction;




