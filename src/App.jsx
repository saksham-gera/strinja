import './App.css';
import { Route , Routes } from 'react-router-dom';
import ContactUs from './pages/contactUs/ContactUs.jsx';
import Home from './pages/home/Home.jsx';
import Aboutus from './pages/aboutUs/Aboutus.jsx';
import Gallery from './pages/gallery/Gallery.jsx';



function App() {
  
  return (
      <>
        <Routes >
          <Route path='/' element={<Home />}></Route>
          <Route path='/contactus' element={<ContactUs />}></Route>
          <Route path='/about' element={<Aboutus/>}></Route>
          <Route path='/gallery' element={<Gallery/>}></Route>
        </Routes>
      </>
    );

}

export default App
