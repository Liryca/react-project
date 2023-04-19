import axios from 'axios';
import { User } from '../types/usersTypes';

export async function fetchUsers(department = 'all') {    /// получение всех юзеров
  const options = {
    method: 'GET',
    url: `https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=${department}`,
    // url:"https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__code=500&__dynamic=true",//error
    headers: { 'Content-Type': 'application/json' }
  };
  const response = await axios.request(options)
  return response.data
}

export function getDayBirthday(date: string) { //  возвращает дату в формате дата-месяц
  const birthday = new Date(date);
  const day = birthday.getDate();
  const year = birthday.getFullYear();
  const month = new Date(date).toLocaleString('ru', { month: 'long' }).slice(0, 3);
  return `${day} ${month} `;
}


export function getFullDayBirthday(date: string) { //  возвращает дату в формате дата-месяц-год
  const birthday = new Date(date); 
  const day = birthday.getDate();
  const year = birthday.getFullYear();
  let month = new Date(date).toLocaleString('ru', { month: 'long' })
  let fullMonth

  if (month === 'август' || month === 'март') {
    fullMonth = month.concat('а')
  } else {
    fullMonth = month.substring(0, month.length - 1).concat('я')

  }

  console.log(month)
  return `${day} ${fullMonth} ${year} `;
}

function agetostr(age:any) {
	var txt;
let	count = age % 100;
	if (count >= 5 && count <= 20) {
		txt = 'лет';
	} else {
		count = count % 10;
		if (count === 1) {
			txt = 'год';
		} else if (count >= 2 && count <= 4) {
			txt = 'года';
		} else {
			txt = 'лет';
		}
	}
	return txt;
}



export function getAge(dateString:any) {
const now = new Date(); 
const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
const dob = new Date(dateString); 
const dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
let age;

age = today.getFullYear() - dob.getFullYear();
if (today < dobnow) {
  age = age-1;
}



return `${age} ${agetostr(age)}`
}



export function formatedPhone(phone:any) {
  const lenPhone = phone.length;
  const tt = phone.split('');

  if (lenPhone === 12) {
    tt.splice(2, "", " (");
    tt.splice(6, "", ") ");
    tt.splice(10, "", " ");
    tt.splice(13, "", " ");
  } else if (lenPhone === 13) {
    tt.splice(3, "", " (");
    tt.splice(7, "", ") ");
    tt.splice(11, "", " ");
    tt.splice(14, "", " ");
  }
  return (tt.join(''))
}

const date = new Date();
const monthNow = date.getMonth() + 1;
const dayNow = date.getDate();


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function sotredUsersByName(users: User[]) {
  return users.sort((a, b) => a.firstName > b.firstName ? 1 : -1); // сортровка по имени
}




export function sotredUsersByDay(users: User[]) {  // сортировка по дате
  console.log(users)
  const afterDays = users
    .filter((user) => {
      return new Date(user.birthday).getMonth() + 1 > monthNow ||
        (new Date(user.birthday).getMonth() + 1 === monthNow && new Date(user.birthday).getDate() >= dayNow)
    })
    .sort((a, b) => {
      if (new Date(a.birthday).getMonth() === new Date(b.birthday).getMonth()) {
        return new Date(a.birthday).getDate() > new Date(b.birthday).getDate() ? 1 : -1
      } else {
        return new Date(a.birthday).getMonth() > new Date(b.birthday).getMonth() ? 1 : -1
      }
    })

  const beforeDays = users
    .filter((user) => {
      return new Date(user.birthday).getMonth() + 1 < monthNow ||
        (new Date(user.birthday).getMonth() + 1 === monthNow && new Date(user.birthday).getDate() < dayNow)
    })
    .sort((a, b) => {
      if (new Date(a.birthday).getMonth() === new Date(b.birthday).getMonth()) {
        return new Date(a.birthday).getDate() > new Date(b.birthday).getDate() ? 1 : -1
      } else {
        return new Date(a.birthday).getMonth() > new Date(b.birthday).getMonth() ? 1 : -1
      }
    })
  return [...afterDays, ...beforeDays]
}



// export function sortedUserDepartment(users: User[], value: string) {
//   console.log(users)
//   console.log(value)
//   return users.filter((user: any) => user.department === value)
// }
