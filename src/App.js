
import './App.css';
import {BrowserRouter , Routes, Route} from 'react-router-dom';

//components
import NavBar from './components/NavBar';
import AddUser from './components/AddUser';
import UserList from './components/UserList';
import DeppCoding from './components/DeppCoding';
import EditUser from './components/EditUser';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
          <Route path = '/' element= {<DeppCoding />} />
          <Route path='/all' element = {<UserList />} />
          <Route path='/add' element = {<AddUser />} />
          <Route path='/edit/:id' element = {<EditUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
