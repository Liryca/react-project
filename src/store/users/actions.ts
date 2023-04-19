import { User, UserActionTypes } from "../../types/usersTypes";
import { Dispatch, } from 'redux';
import { fetchUsers, sotredUsersByName, sotredUsersByDay } from "../../api/api";
import { RootState } from "..";

export const getUsersAction = () => ({
    type: UserActionTypes.GET_USERS,
})

export const getUsersSuccessAction = (userList: User[]) => ({
    type: UserActionTypes.GET_USERS_SUCCESS,
    userList: userList
})

export const getUsersErrorAction = (error: string) => ({
    type: UserActionTypes.GET_USERS_ERROR,
    error: error
})

export const filteredUsersAction = (filteredUserList: User[]) => ({
    type: UserActionTypes.FILTERED_USERS,
    filteredUserList
})

export function filteredUsersThunk() {
    return function (dispatch: Dispatch, getState: () => RootState) {
        const { search, users } = getState();
        const { userList, loading } = users;
        console.log(console.log(search.searchValue))
        const result = userList.filter((user: User) => user.firstName.toLowerCase().includes(search.searchValue.toLowerCase()) && search.searchValue !== '');

        dispatch(filteredUsersAction(result))
    }
}

export function getUsersThunk() {
    return async function (dispatch: Dispatch, getState: () => RootState) {
        const { tabs, modal, search } = getState();
        try {
            const response = await fetchUsers(tabs.department);
            const result = modal.activeRadio === 'name' ? sotredUsersByName(response.items) : sotredUsersByDay(response.items);
            dispatch(getUsersSuccessAction(result));
            // dispatch(getUsersAction());
        } catch (e) {
            dispatch(getUsersErrorAction('Error'));
        }
    }
}



