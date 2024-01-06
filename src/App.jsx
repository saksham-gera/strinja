import './App.css';
import { Route, Routes } from 'react-router-dom';
import ContactUs from './pages/contactUs/ContactUs.jsx';
import Home from './pages/home/Home.jsx';
import Aboutus from './pages/aboutUs/Aboutus.jsx';
import Gallery from './pages/gallery/Gallery.jsx';
import Login from './pages/login/Login.jsx';
import { useState } from 'react';
import AdminImagePopup from './pages/gallery/adminImagePopup/AdminImagePopup.jsx';
import CreatePopup from './pages/gallery/createPopup/CreatePopup.jsx';



function App() {

  const [LoginDisplay, setLoginDisplay] = useState("none");

  const login = (loginDisplay) => {
    setLoginDisplay(loginDisplay);
  }
  return (
    <div className="app">
      <div className="login" style={{ display: LoginDisplay }}>
        <Login func={login} />
      </div>
      <div className="route-container">
        <Routes>
          <Route path='/trial' element={<CreatePopup />}></Route>
          <Route path='/contactus' element={<ContactUs />}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<Aboutus />}></Route>
          <Route path='/gallery' element={<Gallery />}></Route>
        </Routes>
      </div>
      <button className='btn btn-secondary owner-login-button' onClick={() => { login("flex") }}>Owner Login </button>
    </div>
  );

}

export default App
