import React from 'react'
import StylesServices from './SoftwareEnhan.module.css'
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
          <h1 className={StylesServices.head}>Skill Enhancement</h1>
          <br />
          <p className={StylesServices.para}>Unlock Your Potential - Explore Skill Enhancement Opportunities with Test Yantra Global.</p>
        </div>
      </div>

      {/* ?------------------------------------------------------------------ */}
      <div className={StylesServices.main2}>
        <nav className={StylesServices.cont2}>
          <h1 className={StylesServices.head2}>
          Elevate Your Team's Skills with Test Yantra Global:
          Your Gateway to Excellence.
          </h1>
          <p className={StylesServices.para2}>Benefits of Choosing Test Yantra Global</p>
        </nav>
      </div>

      {/* ?-----cards------------------------------------------------------- */}
      <div className={StylesServices.main3}>
        <div className={StylesServices.cont3}>
          <div className={StylesServices.cards}>
            <div className={StylesServices.logo}>
              <img src={Image1} alt={Image1} />
            </div>
            <h3>Managed QA</h3>
            <p>Our team of IT consultants and managed services experts provide timely consulting, software configuration, deployment, and support for an array of cloud and premise based applications.</p>
          </div>
          <div className={StylesServices.cards}>
            <div className={StylesServices.logo}>
              <img src={Image2} alt={Image2} />


            </div>
            <h3>Practical Learning</h3>
            <p>Our experiential learning methodology emphasizes practical training to ensure that you acquire real-world hands-on skills that enable immediate engagement.</p>
          </div>

          <div className={StylesServices.cards}>
            <div className={StylesServices.logo}>
              <img src={Image3} alt={Image3} />

            </div>
            <h3>Industry Recognition
            </h3>
            <p>We work closely with 2,500+ companies to ensure our programs meet the precise evolving needs of the industry. With 17,000 people registered in our day-to-day IT-related training courses, Test Yantra Global’s training programs are highly respected and sought after by employers.</p>
          </div>
        </div>

      </div>
      {/* ?-----------------------video------------------------------------------ */}

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