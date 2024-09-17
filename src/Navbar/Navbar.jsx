import React from 'react'
import Style from "./Navbar.module.css"
import { Link } from 'react-router-dom';
import image from "../images/logo.svg";
import { RiArrowDropDownLine } from "react-icons/ri";
import Softwaretesting from './../Services/Softwaretesting';
import SoftwareDevelopment from './../Services/SoftwareDevelopment';
import SoftwareEnhancement from './../Services/SoftwareEnhancement';
import Itconsulting from './../Services/Itconsulting';
import Crowdtesting from './../Services/Crowdtesting';
import Fireflink from './../Partners/Fireflink';

const Navbar = () => {
    return (
      <nav className={Style.navContainer}>
          <div className={Style.secContainer}>
              <div className={Style.logo}>
              <Link to='/'><img src={image} alt="" /></Link>                
              </div>
              <div>
                  <ul className={Style.list}>
                      <li>
                          <Link to='/'>Home</Link>
                      </li>
                      <li>
                          Services <RiArrowDropDownLine className={Style.arrow}/>
                         
                          <div className={Style.serviceLink}>
                              <ul>
                                  <li><Link to='/Softwaretesting'>Software Testing (TAAS)</Link></li>
                                  <li><Link to='/SoftwareDevelopment'>Software Development</Link></li>
                                  <li><Link to='/SoftwareEnhancement'>Skill Enhancement</Link></li>
                                  <li><Link to='/Itconsulting'>IT Consulting</Link></li>
                                  <li><Link to='/Crowdtesting'>Crowd Testing</Link></li>
                              </ul>
                          </div>
                      </li>
                      <li>
                          {/* <Link to='/Partners'> */}
                          Partners <RiArrowDropDownLine className={Style.arrow}/>
                          {/* </Link> */}
                          <div className={Style.partnerlink}>
                              <ul>
                                  <li><Link to='/Fireflink'>Fireflink</Link></li>
                              </ul>
                          </div>
                      </li>
                      <li>
                          <Link to='/Articles'>Article</Link>
                      </li>
                      <li>
                          <Link to='/GetTouch'>
                          <div className={Style.gettouch}>
                              <p>Get In Touch</p>
                          </div>
                          </Link>
                      </li>
                  </ul>
              </div>
          </div>
          
      </nav>
    )
  }
  
  export default Navbar