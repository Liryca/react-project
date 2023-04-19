import './App.css';
import Search from '../Search/Search';
import Users from '../Users/Users';
import Tabs from '../Tabs/Tabs';
import Modal from '../Modal/Modal';
import { Routes, Route, useLocation} from "react-router-dom";
import UserDatails from '../UserDatails/UserDatails';


function App() {

 const { pathname } = useLocation()

  return (


   
    <div className="App">
  {pathname==='/'&&
   <section className='app-top-bar'>
    <div className='top-bar-wrapper'>
             <h1 className='title'>Поиск</h1>
          <Modal />
          <Search />
          <Tabs />
    </div>
   
        </section>}
 

        <Routes>
          <Route path='/' element={<Users />}> </Route>
          <Route path="/:id" element={<UserDatails />}> </Route>
        </Routes>
    

    </div>
  );
}

export default App;


