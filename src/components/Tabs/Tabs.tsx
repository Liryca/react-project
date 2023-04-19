import React, { useEffect } from "react";
import './Tabs.css';
import { useAppDispatch, useAppSelector } from "../../hooks/useSelectorTyped";
import { filteredUsersAction, filteredUsersThunk, getUsersThunk } from "../../store/users/actions";
import { chooseDepartment } from "../../store/tabs/actions"

const array = {
    android: 'Android',
    ios: 'iOS',
    design: 'Дизайн',
    management: 'Менеджмент',
    qa: 'QA',
    back_office: 'Бэк-офис',
    frontend: 'Frontend',
    hr: 'HR',
    pr: 'PR',
    backend: 'Backend',
    support: 'Техподдержка',
    analytics: 'Аналитика',
}


const Tabs: React.FC = () => {

    const dispatch = useAppDispatch();
    const { department } = useAppSelector(state => state.tabs);
    const { searchValue } = useAppSelector(state => state.search);
    const { filteredUserList } = useAppSelector(state => state.users);


    async function filteredUsersByDepartment(key: string) {
        dispatch(chooseDepartment(key));
        await dispatch(getUsersThunk());
        if (searchValue) {
            dispatch(filteredUsersThunk())
        }
    }

    return (
        <ul className='department-tabs'>
            <li className={department === 'all' ? 'active-tab' : 'tab'} onClick={() => filteredUsersByDepartment('all')}>Все</li>
            {Object.entries(array).map(([key, value], index) => {
                return <li key={index} className={department === key ? 'active-tab' : 'tab'} onClick={() => filteredUsersByDepartment(key)}>{value}</li>
            })}
        </ul>
    );
};

export default Tabs;


