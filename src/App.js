import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home';
import SignUp from './components/Login/SignUp';
import Login from './components/Login/Login';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
