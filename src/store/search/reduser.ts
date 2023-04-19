import { SearchAction, SearchState } from "../../types/searchTypes";

const searchState = {
    searchValue: '',
}

export const searchReducer = (state = searchState, action: SearchAction): SearchState => {
    switch (action.type) {
        case 'CHANGE_SEARCH_VALUE':
            return {
                searchValue: action.searchValue
            }
            default:
                return state
    }
   
}