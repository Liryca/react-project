import { TabsActionType, TabsState } from "../../types/tabsTypes";

export const tabsState = {
    department: 'all'
};

export function tabsReducer(state = tabsState, action: TabsActionType): TabsState {
    switch (action.type) {
        case 'CHOOSE_DEPARTMENT':
            return {
                department: action.department
            }
        default:
            return state
    }
}