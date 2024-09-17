import React from 'react'
import StylesServices from './Fireflink.module.css'
// import { MdPlayArrow } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import Footer from '../Home/Footer';
import Image1 from './webAutomation (1).png';
import Image2 from './mobileAutomation (1).png'
import Image3 from './apiAutomation (1).png'
import Image4 from './VisualTesting (1).png';
import Image5 from './UiPerformance (1).png'
import Image6 from './manualTesting.png'
import Image7 from './DefectManagement (1).png'

import Image14 from '../images/asset 13.jpeg';
import Image15 from '../images/asset 14.jpeg';
import Image16 from '../images/asset 15.jpeg';



const Fireflink = () => {
  return (
    <div className={StylesServices.full}>
      <div className={StylesServices.main}>
        <div className={StylesServices.cont}>
          <h1 className={StylesServices.head}>FireFlink - Extreme test automation.</h1>
          <p className={StylesServices.para}>As the 'Exclusive Service Platinum Partner' of FireFlink, Test Yantra Global facilitates efficient Digital Transformation, ensuring a superior return on investment.</p>
        </div>
      </div>

      {/* ?------------------------------------------------------------------ */}
      <div className={StylesServices.main2}>
        <nav className={StylesServices.cont2}>
          <h1 className={StylesServices.head2}>
            FireFlink Solutions
          </h1>
          <p className={StylesServices.para2}>FireFlink is an all-in-one solution that comes with a simple interface, enabling effortless automation for everyone.</p>
        </nav>
      </div>

      {/* ?-----cards------------------------------------------------------- */}
      <div className={StylesServices.main3}>
        <div className={StylesServices.cont3}>
          <div className={StylesServices.cards}>
            <div className={StylesServices.logo}>
              <img src={Image1} alt={Image1} />
            </div>
            <h3>WEB AUTOMATION TESTING</h3>
            <p>The automation of web applications is moving towards a codeless approach using straightforward NLP-based scripts that can easily handle various actions and verifications. FireFlink combines all the commonly used test automation framework types and more, making it the ideal solution.</p>
          </div>
          <div className={StylesServices.cards}>
            <div className={StylesServices.logo}>
              <img src={Image2} alt={Image2} />


            </div>
            <h3>MOBILE AUTOMATION TESTING</h3>
            <p>Web application automation is moving towards processes that do not require coding, instead relying on easy-to-use NLP-based scripts to manage various actions and verifications. FireFlink incorporates a wide range of test automation frameworks, as well as additional features, to create the ideal solution.</p>
          </div>
          <div className={StylesServices.cards}>
            <div className={StylesServices.logo}>
              <img src={Image3} alt={Image3} />

            </div>
            <h3>API Automation Testing

            </h3>
            <p>Effortlessly generate test scripts for Web Services. Our Web Service testing solution enables you to rapidly and thoroughly test the intricate layers of Web Services in just a matter of minutes. Get ready to dive deep into testing with ease.</p>
          </div>
        </div>

      </div>
      <div className={StylesServices.main3}>
        <div className={StylesServices.cont3}>
          <div className={StylesServices.cards}>
            <div className={StylesServices.logo}>
              <img src={Image4} alt={Image4} />
            </div>
            <h3>Visual Testing</h3>
            <p>The familiarity of developers, marketers, and product owners with a website may cause them to overlook issues that actual users may notice. It is crucial to gather such feedback from real users as it helps improve the quality of products and services offered to customers. FireFlink provides convenient solutions for UX testing.</p>
          </div>
          
          <div className={StylesServices.cards}>
            <div className={StylesServices.logo}>
              <img src={Image5} alt={Image5} />

            </div>
            <h3>UI Performance Testing

            </h3>
            <p>The quality of a website or app's user interface directly affects its success. With FireFlink's visual testing capabilities, users can discover efficient testing techniques that enhance the usability of the user interface and eliminate any problems that could cause customer dissatisfaction.</p>
          </div>
          <div className={StylesServices.cards}>
            <div className={StylesServices.logo}>
              <img src={Image6} alt={Image6} />
            </div>
            <h3>Manual Test Case management
            </h3>
            <p>FireFlink simplifies the management of manual test cases by offering a user-friendly interface that enables test engineers to easily understand and fulfill testing requirements. It allows for efficient test case management by providing a one-to-one mapping of manual test case entries with their corresponding automation test scripts.</p>
          </div>
        </div>

      </div>
      {/* ?-----------------------Cards2------------------------------------------ */}


      <div className={StylesServices.main3}>
        <div className={StylesServices.maincont}>
          
          <div className={StylesServices.cards}>
            <div className={StylesServices.logo}>
              <img src={Image7} alt={Image7} />
            </div>
            <h3>Defect Management
            </h3>
            <p>FireFlink's defect management system offers essential feedback to enhance the software development process. It provides a reliable solution for tracking bugs and ensuring software quality assurance, enabling smooth software releases.</p>
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

export default Fireflink