import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Contact from './Pages/Contact Us/Contact';
import NoPage from './Pages/No-Page/NoPage';
import Admin from './Pages/Admin/Admin';

import Register from './Pages/RegisterAdmin/Register';
import { Toaster } from 'react-hot-toast';
import LoginAdmin from './Pages/LoginAdmin/LoginAdmin';

function App() {
  

  return (
    <>
    <Toaster/>
    <Routes>
      

        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>} />
        <Route path="service" element={<Services/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="/login" element={<LoginAdmin />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NoPage/>} />
        <Route path='/admin' element={<Admin/>}/>
      
    </Routes>
      </>
  )
}

export default App
