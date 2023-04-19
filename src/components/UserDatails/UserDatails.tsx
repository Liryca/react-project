import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { formatedPhone, getAge, getDayBirthday, getFullDayBirthday } from '../../api/api';
import { useAppSelector } from '../../hooks/useSelectorTyped';
import './UserDatails.css';
import arrrow from './arrow.svg';
import star from './star.svg';
import phoneIcon from './phone.svg';


const UserDatails: React.FC = () => {

    const params = useParams();
    console.log(params.id)
    const prodId = params.id;
    const { users } = useAppSelector(state => state);
    const { userList } = users;
    console.log(userList)
    const user = userList.find(i => i.id === prodId)
    const { avatarUrl, firstName, lastName, userTag, department, phone, birthday } = user

    return (
        <section className='user-datails'>
            <div className='user-datails-main'>
                <Link to={'/'}><img className='navigation' src={arrrow} alt='arrow'></img></Link>
                <img className='user-datails-avatar' src={avatarUrl} alt='avatar'></img>
                <p className='user-datails-name'>{firstName} {lastName}<span>{userTag.toLowerCase()}</span></p>
                <p className='usrt-datails-department' >{department}</p>
            </div>
            <div className='user-datails-other'>
                <div className='user-datails-column'>
                    <div className='user-datails-birthday'>
                        <img src={star} alt='star'></img>
                        <p>{getFullDayBirthday(birthday)}</p>
                    </div>
                    <div className='user-datails-phone'>
                        <img src={phoneIcon} alt='phone'></img>
                        <p>{formatedPhone(phone)}</p>
                    </div>
                </div>

                <p className='user-datails-age'>{getAge(birthday)}</p>
            </div>

        </section>
    );
};

export default UserDatails;