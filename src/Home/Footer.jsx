import React from 'react'
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Style2 from './Footer.module.css'
import Image17 from '../images/partnerlogo2.svg'
import Ani from './Ani';

const Footer = () => {
    return (
        <div className={Style2.Main1}>
           
            <Ani/>
            <div className={Style2.line}></div>
            <sec className={Style2.aline}></sec>
            <footer className={Style2.foot}>
                <div className={Style2.cont9}>
                    <div className={Style2.head4}>
                        
                        <div className={Style2.main9}>
                            <div className={Style2.sub}>
                            <br />
                                <h2>Subcribe to our Newsletter</h2>
                                <br />
                                
                               <div className={Style2.stt}>
                               <div className={Style2.inp}>
                                    <input type="text" placeholder='Enter Your Business Email' className={Style2.inp2} />
                                </div>
                                <button className={Style2.btn2}>Subscribe</button>
                               </div>

                            </div>
                        </div>
                    </div>
                    <div className={Style2.main10}>
                        <div className={Style2.logo3}>
                            <div className={Style2.imge2}>
                                <img src={Image17} alt={Image17} />
                            </div>
                            <br />
                            <p className={Style2.para2}>Test Yantra Global is an Exclusive Platinum Partner of FireFlink.
                                <br />
                                <br />
                                Let's get socially connected...

                            </p>
                            <br />
                            <ul className={Style2.icon}>
                               <br />
                                <li>
                                    <Link><FaLinkedin />
                                    </Link>
                                </li>
                                <li>
                                    <Link><FaYoutube /></Link>
                                </li>
                                <li>
                                    <Link><FaTwitter /></Link>
                                </li>
                                <li>
                                    <Link><IoLogoFacebook /></Link>
                                </li>
                                <li>
                                    <Link><FaInstagram /></Link>
                                </li>
                            </ul>
                        </div>
                        <div className={Style2.cards}>
                            <div className={Style2.cont10}>
                                <h3 className={Style2.foot_head}>Services</h3>
                                <br />
                                <ul className={Style2.list}>
                                    <li>
                                        <Link>Software Testing (Taas)</Link>
                                    </li>
                                    <li>
                                        <Link>Software Development</Link>
                                    </li>
                                    <li>
                                        <Link>Skils Enhancement</Link>
                                    </li>
                                    <li>
                                        <Link> IT Consulting</Link>
                                    </li>
                                    <li>
                                        <Link>Crowd Testing</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={Style2.cards}>
                            <div className={Style2.cont10}>
                                <h3 className={Style2.foot_head}>Quick Links</h3>
                                <br />
                                <ul className={Style2.list}>
                                    <li>
                                        <Link>About Us</Link>
                                    </li>
                                    
                                    <li>
                                        <Link>Firelink</Link>
                                    </li>
                                    <li>
                                        <Link>Articles</Link>
                                    </li>
                                    <li>
                                        <Link> Contact</Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className={Style2.cards}>
                            <div className={Style2.cont10}>
                                <h3 className={Style2.foot_head}>Contacts</h3>
                                <br />
                                <ul className={Style2.list}>
                                    <li>
                                        <Link>Adress:120 Adelaide Street West, Suite 2500, Toronto,ON,M5H 1T1,Canada</Link>
                                    </li>
                                    <li>
                                        <Link>Email:Hello@testYantraglobal.com</Link>
                                    </li>
                                    <li>
                                        <Link>Phone:1800 572 7905</Link>
                                    </li>

                                </ul>

                            </div>
                        </div>
                    </div>

                </div>


            </footer>
            
            <div className={Style2.copyr}>
                <br /><h4 className={Style2.move}>Copyright ©2024 Test Yantra Global. All rights reserved</h4></div>
        </div>
    )
}

export default Footer