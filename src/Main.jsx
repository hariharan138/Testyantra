import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
// import Career from './Career/Career';
import Servicecs from './Services/Servicecs';
// import About from './About/About';
// import Contact from './Contact/Contact';
import "./Global.css"
import SoftwareDevelopment from './Services/SoftwareDevelopment';
import Softwaretesting from './Services/Softwaretesting';
import SoftwareEnhancement from './Services/SoftwareEnhancement';
import Itconsulting from './Services/Itconsulting';
import Crowdtesting from './Services/Crowdtesting';
import Fireflink from './Partners/Fireflink';
import Getintouch from './GetInTouch/Contact';
import Article from './Articles/Articles';

const Main = () => {
    return (
        <div>
            <Router>
                < Navbar />
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/services' element={<Servicecs/>}> </Route>
                    <Route path='/Softwaretesting' element={<Softwaretesting/>}></Route>
                    <Route path='/SoftwareDevelopment' element={<SoftwareDevelopment/>}></Route>
                    <Route path='/SoftwareEnhancement' element={<SoftwareEnhancement/>}></Route>
                    <Route path='/Itconsulting' element={<Itconsulting/>}></Route>
                    <Route path='/Crowdtesting' element={<Crowdtesting/>}></Route>
                    {/* <Route path='/about' element={<About/>}></Route> */}
                    {/* <Route path='/contact' element={<Contact/>}></Route> */}
                    <Route path='/Fireflink' element={<Fireflink/>}></Route>
                    <Route path='/Articles' element={<Article/>}></Route>
                    <Route path='/GetTouch' element={<Getintouch/>}></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default Main
