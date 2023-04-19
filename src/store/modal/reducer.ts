import { ModalAction, ModalState } from "../../types/modalTypes"

export const modalState = {
    show: false,
    activeRadio: 'name'
}

export const modalReducer = (state = modalState, action: ModalAction): ModalState => {

    switch (action.type) {
        case 'OPEN_MODAL': {
            return {
                ...state,
                show: true
            }
        }
        case 'CLOSE_MODAL': {
            return {
                ...state,
                show: false
            }
        }
        case 'CHECKED_RADIO_BUTTON': {
            return {
                ...state,
                activeRadio: action.activeRadio
            }
        }
        default:
            return state
    }
}