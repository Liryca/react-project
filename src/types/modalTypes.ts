export interface ModalAction {
    type: string;
    show: boolean;
    activeRadio: string;
}

export interface ModalState {
    show: boolean;
    activeRadio: string;
}

