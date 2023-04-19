
import { UserActionTypes, UsersAction } from '../../types/usersTypes'
import { UsersState } from "../../types/usersTypes";


const usersState: UsersState = {
    userList: [],
    filteredUserList: [],
    loading: false,
    error: null,
}

export function usersReducer(state = usersState, action: UsersAction): UsersState {
    switch (action.type) {
        // case UserActionTypes.GET_USERS:
        //     return {
        //         loading: true, error: null, userList: [],filteredUserList:[]
        //     }

        case UserActionTypes.GET_USERS_SUCCESS:
            return {
                loading: true, error: null, userList: action.userList, filteredUserList: [...state.filteredUserList]
            }

        case UserActionTypes.GET_USERS_ERROR:
            return {
                loading: false, error: action.error, userList: [], filteredUserList: []
            }
        case UserActionTypes.FILTERED_USERS:
            return {
                ...state,
                filteredUserList: action.filteredUserList
            }

        default:
            return state
    }

}




