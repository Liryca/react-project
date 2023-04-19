import "./Search.css";
import search from "./images/search.svg";
import filtered from "./images/filtered.svg";
import filteredActive from "./images/filtered2.svg";
import { useAppDispatch, useAppSelector } from "../../hooks/useSelectorTyped";
import { openModalShow } from "../../store/modal/actions";
import { changeSearchValue } from "../../store/search/actions";
import { filteredUsersThunk } from "../../store/users/actions";

const Search: React.FC = () => {

    const dispatch = useAppDispatch();
    const { modal } = useAppSelector(state => state);

    function handleModalOpen(e: React.MouseEvent) {
        dispatch(openModalShow(true));
    }

    function searchUser(e: React.ChangeEvent<HTMLInputElement>) {
            dispatch(changeSearchValue(e.target.value));
            dispatch(filteredUsersThunk());
    }

    return (
        <div className='search-user'>
            <img className='input-img-search' src={search} alt='search'></img>
            <input onChange={searchUser} className='input-search-user' placeholder='Введите имя, тег, почту...'></input>
            <img onClick={handleModalOpen} className='input-img-filtered' src={modal.activeRadio === 'name' ? filtered : filteredActive} alt='search'></img>
        </div>

    );
};

export default Search;

