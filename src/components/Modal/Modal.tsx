import { useAppDispatch, useAppSelector } from "../../hooks/useSelectorTyped";
import { checkedRadioButton, closeModalShow } from "../../store/modal/actions";
import { getUsersThunk } from "../../store/users/actions";
import "./Modal.css";
import x from "./x.svg";

const Modal: React.FC = () => {

    const dispatch = useAppDispatch();
    const {show,activeRadio} = useAppSelector(state => state.modal);

    function closeModal() {
        dispatch(closeModalShow(false));
    }

    function changeValueButton(event: React.ChangeEvent<HTMLInputElement>) {
            dispatch(checkedRadioButton(event.target.value));
            setTimeout(() => dispatch(closeModalShow(false)), 100);
            dispatch(getUsersThunk())
        
    }
    return (
        <div className='modal' style={!show ? { visibility: "hidden" } : { visibility: 'visible' }}>
            <div className='modal-content'  >
                <img  onClick={closeModal} src={x} alt=''></img>
                <div className='modal-title'><h2>Сортировка</h2></div>
                <div className='modal-radio-buttons'>
                    <label className="radio-button"><input onChange={changeValueButton} checked={activeRadio === 'name' ? true : false} value='name' type="radio" /><span></span><p>По алфавиту</p> </label>
                    <label className="radio-button"> <input onChange={changeValueButton} checked={activeRadio === 'birthday' ? true : false} value='birthday' type="radio" /><span></span><p>По дню рождения</p></label>
                </div>
            </div>
        </div>
    );
};

export default Modal;