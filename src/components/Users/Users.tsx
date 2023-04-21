import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useSelectorTyped";
import { getUsersThunk } from "../../store/users/actions"
import { getDayBirthday } from "../../api/api";
import { User } from "../../types/usersTypes";
import "./Users.css";
import Modal from "../Modal/Modal";
import Error from "../Error/Error";
import 'react-loading-skeleton/dist/skeleton.css'
import SkeletonCard from "../Sceleton/Sceleton";
import SearchError from "../SearchError/SearchError";
import { Link, useLocation } from "react-router-dom";
import u from './user.png'

const Users: React.FC = () => {

  const dispatch = useAppDispatch();
  const { users, modal, tabs, search } = useAppSelector(state => state);
  const { error, loading, userList, filteredUserList } = users;
  const { pathname } = useLocation()
  console.log(pathname)

  useEffect(() => {
    dispatch(getUsersThunk())
  }, [tabs.department, dispatch]);

  console.log(userList)

  if (error === 'Error') return <Error />
  if (!loading) return <SkeletonCard />
  if (!filteredUserList.length && search.searchValue !== '') return <SearchError />

  return (
    <ul
      className="user-list">
      {!filteredUserList.length ?
        userList.map((user: User,id:number) => {
          return <Link key={id} className="user-card" to={`/${user.id}`}>
            <img className='user-card-avatar' src={u} alt="avatar" />
            <div className="user-info">
              <div className="user-card-name">
                <p >{user.firstName}</p>
                <p>{user.lastName}</p>
                <p className="user-tag">{user.userTag.slice(0, 2).toLowerCase()}</p>
              </div>
              <p className="user-card-department"><span>{user.department}</span></p>
            </div>
            {modal.activeRadio === 'birthday' && <p className='user-card-birthday'>{getDayBirthday(user.birthday)}</p>}
          </Link>

        })
        :
        filteredUserList.map((user: User,id:number) => {
          return <Link key={id} className="user-card" to={`/${user.id}`}>
            <img className='user-card-avatar' src={user.avatarUrl} alt="avatar" />
            <div className="user-info">
              <div className="user-card-name">
                <p >{user.firstName}</p>
                <p>{user.lastName}</p>
                <p className="user-tag">{user.userTag.slice(0, 2).toLowerCase()}</p>
              </div>
              <p className="user-card-department"><span>{user.department}</span></p>
            </div>
            {modal.activeRadio === 'birthday' && <p className='user-card-birthday'>{getDayBirthday(user.birthday)}</p>}
          </Link>

        })
      }
    </ul>

  );
};

export default Users;








