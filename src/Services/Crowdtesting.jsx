import React from 'react'
import StylesServices from './Crowd.module.css'
import { MdPlayArrow } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import Footer from '../Home/Footer';
import Image1 from './ManageQA.png';
import Image2 from './CrowdTesting.png'
import Image3 from './TestingSolution.png'

import Image14 from '../images/asset 13.jpeg';
import Image15 from '../images/asset 14.jpeg';
import Image16 from '../images/asset 15.jpeg';



const SoftwareEnhancement = () => {
  return (
    <div className={StylesServices.full}>
      <div className={StylesServices.main}>
        <div className={StylesServices.cont}>
          <h1 className={StylesServices.head}>Software Testing (TaaS)</h1>
          <p className={StylesServices.para}>Trusted by 3000+ clients across the globe to provide a range of Software testing solutions, expertise, and AI based software testing platform.</p>
        </div>
      </div>

      {/* ?------------------------------------------------------------------ */}
      <div className={StylesServices.main2}>
      <div className={StylesServices.main2}>
        <div className={StylesServices.conts}>
        <h1 className={StylesServices.heads}>What is crowd Testing?</h1>
        <p className={StylesServices.paras}>Crowd Testing is a dynamic testing methodology that leverages a diverse and distributed group of testers. It enables testing across various devices, operating systems, and geographical locations, providing unparalleled coverage and real-user insights.</p>
          </div>
        <nav className={StylesServices.cont2}>
          <h1 className={StylesServices.head2}>
            Leverage two decades of Testing Expertise
          </h1>
          <p className={StylesServices.para2}>Our testing center of excellece (CoE) provides a unified solutions for web, android, ios, API, and databases.</p>
        </nav>
      </div>
</div>
      {/* ?-----cards------------------------------------------------------- */}
      <div className={StylesServices.main3}>
        <div className={StylesServices.cont3}>
          <div className={StylesServices.cards}>
            <div className={StylesServices.logo}>
              <img src={Image1} alt={Image1} />
            </div>
            <h3>Web Crowd Testing</h3>
            <p>Involves crowd-sourced testing for web applications, ensuring compatibility across platforms and browsers like Chrome, Firefox, and Microsoft Edge. It includes cross-browser tests, trials on various operating systems and versions, diverse testing approaches, and participation from test engineers of all age groups.</p>
          </div>
          <div className={StylesServices.cards}>
            <div className={StylesServices.logo}>
              <img src={Image2} alt={Image2} />


            </div>
            <h3>Mobile Crowd Testing
            </h3>
            <p>Focuses on crowd-sourced testing for mobile apps, identifying compatibility issues across a range of Android and iOS devices. It encompasses platform variations, compatibility-driven tests, diverse testing methodologies, and engagement with test engineers from different demographics.

</p>
          </div>
          <div className={StylesServices.cards}>
            <div className={StylesServices.logo}>
              <img src={Image3} alt={Image3} />

            </div>
            <h3>Web and Mobile Crowd
            </h3>
            <p>Testing via FireFlink involves ensuring reliability, alignment with business requirements, and user-friendliness of web and mobile apps. This process includes tests for devices like Android TV, Google TV, and Fire TV Stick, evaluating across different brands and models, reproducing defects using video recordings and screenshots, and offering re-test support for identified issues.</p>
          </div>
        </div>

</div>      {/* ?-----------------------video------------------------------------------ */}

      {/* ?-----------article------------------------------------------- */}

      <div className={StylesServices.main5_}>
        <div className={StylesServices.cont6_}>
          <div className={StylesServices.num2}>
            <h1>Our Recent Articles</h1>
          </div>
        </div>
      </div>

      <div className={StylesServices.main7}>
        <div className={StylesServices.cont8}>
          <div className={StylesServices.art}>
            <div className={StylesServices.art_img}>
              <img className={StylesServices.imge} src={Image14} alt={Image14} />
            </div>
            <div className={StylesServices.art_img2}>
              <p>Blog | Software Testing</p>
              <h3>Comprehensive Guide to Developing Test Scripts for Software Testing</h3>
              <p>Effective software testing is essential for the delivery of high-quality software products. The development of test scripts is a critical...</p>
              <button className={StylesServices.btn2}>Read More<FaArrowRight /></button>
            </div>
          </div>
          <div className={StylesServices.art}>
            <div className={StylesServices.art_img}>
              <img className={StylesServices.imge} src={Image15} alt={Image15} />
            </div>
            <div className={StylesServices.art_img2}>
              <p>Blog | Categories of Tests</p>
              <h3>Guidelines for Writing Effective Unit Tests</h3>
              <p>Learn effective unit testing techniques to enhance code quality and development speed. Discover essential tools...</p>
              <button className={StylesServices.btn2}>Read More <FaArrowRight /></button>
            </div>

          </div>
          <div className={StylesServices.art}>
            <div className={StylesServices.art_img}>
              <img className={StylesServices.imge} src={Image16} alt={Image16} />

            </div>
            <div className={StylesServices.art_img2}>
              <p>Blog | Test Data</p>
              <h3>Automation Testing Tools: Selenium, Cypress, Playwright, Robot Framework vs. FireFlink</h3>
              <p>Dive into the specifics of renowned automation tools like Selenium, Cypress, Playwright, and Robot Framework...</p>
              <button className={StylesServices.btn2}>Read More<FaArrowRight /></button>
            </div>
          </div>
          </div>
          </div>
          {/* ?------------footer-------------------------------------------- */}
         <Footer/>
    </div>
  )
}

export default SoftwareEnhancement