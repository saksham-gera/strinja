import './App.css'
import ContactUs from './pages/contactUs/ContactUs.jsx'
import Home from './pages/home/Home.jsx'
import { Route , Routes } from 'react-router-dom';

function App() {
  
  return (
      <>
        <Routes >
          <Route path='/' element={<Home />}></Route>
          <Route path='/contactus' element={<ContactUs />}></Route>
        </Routes>
      </>
    );
}

export default App
