import React from 'react'
import StylesServices from './Softwaredev.module.css'
import { MdPlayArrow } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import Footer from '../Home/Footer';
import Image1 from './ManageQA.png';
import Image2 from './CrowdTesting.png'
import Image3 from './TestingSolution.png'
import Image14 from '../images/asset 13.jpeg';
import Image15 from '../images/asset 14.jpeg';
import Image16 from '../images/asset 15.jpeg';
import Image17 from './Frontend.png';
import Image18 from './Backend.png';
import Image19 from './Database.png';


const SoftwareDevelopment = () => {
  return (
    <div className={StylesServices.full}>
      <div className={StylesServices.main}>
        <div className={StylesServices.cont}>
          <h1 className={StylesServices.head}>Software Development</h1>
          <br />
          <p className={StylesServices.para}>Our 1,100+ expert software developers utilize the latest technology stack to build and integrate leading applications across a variety of domains.</p>
        </div>
      </div>

      {/* ?------------------------------------------------------------------ */}
      <div className={StylesServices.main2}>
        <nav className={StylesServices.cont2}>
          <h1 className={StylesServices.head2}>
          Digital Transformation Services
          
         </h1>
         <br />
          <p className={StylesServices.para2}>A holistic range of services covering all aspects of software development life
          cycle (SDLC) with industry domain expertise</p>
        </nav>
      </div>

      {/* ?-----cards------------------------------------------------------- */}
      <div className={StylesServices.main3}>
        <div className={StylesServices.cont3}>
          <div className={StylesServices.cards}>
            <div className={StylesServices.logo}>
              <img src={Image1} alt={Image1} />
            </div>
            <h3>Cloud services</h3>
            <p>Test Yantra Global excels in complex cloud migrations, enhancing features, and security. We offer custom cloud solutions and redesign architectures for cloud readiness. Our expertise includes seamless integration of cloud and on-premises systems while maintaining security and performance.</p>
          </div>
          <div className={StylesServices.cards}>
            <div className={StylesServices.logo}>
              <img src={Image2} alt={Image2} />


            </div>
            <h3>AWS Services</h3>
            <p>Test Yantra Global is an AWS consulting firm specializing in cloud-first solutions and serverless applications. Our services encompass AWS architecture optimization and proactive monitoring. Additionally, we emphasize Infrastructure as Code (IaC) using AWS CloudFormation for consistent infrastructure management.</p>
          </div>

          <div className={StylesServices.cards}>
            <div className={StylesServices.logo}>
              <img src={Image3} alt={Image3} />

            </div>
            <h3>IOT Services
            </h3>
            <p>The synergy of IoT connecting individuals and devices fosters enhanced efficiency and creativity. At Test Yantra Global, we are committed to delivering top-notch IoT consultancy.</p>
          </div>
        </div>

      </div>
      
      {/* ?-----------------------video------------------------------------------ */}
      <div className={StylesServices.main2}>
        <nav className={StylesServices.cont2}>
          <h1 className={StylesServices.head2}>
          Empowering Digital Success with Comprehensive
          Technology Expertise 
         </h1>
         
        </nav>
      </div>
      <div className={StylesServices.main3}>
        <div className={StylesServices.cont3}>
          <div className={StylesServices.cards}>
            <div className={StylesServices.logo}>
              <img src={Image17} alt={Image1} />
            </div>
            <h3>Frontend</h3>
            <p>At Test Yantra Global, we harness the power of cutting-edge front-end technologies to transform your digital presence. Our experts excel in React, React Native, Ionic, Angular, and Vue.js, crafting dynamic and responsive user interfaces that captivate your audience. We specialize in utilizing these frameworks to ensure your web and mobile applications are at the forefront of innovation.</p>
          </div>
          <div className={StylesServices.cards}>
            <div className={StylesServices.logo}>
              <img src={Image18} alt={Image2} />


            </div>
            <h3>Backend</h3>
            <p>With expertise in Java, Node.js, Python, and Ruby on Rails, our skilled developers architect secure and high-performance server-side systems. We tailor back-end solutions that empower your applications with reliability and scalability, ensuring your online presence remains seamless and efficient. We're adept at leveraging robust back-end technologies to drive your digital solutions.</p>
          </div>

          <div className={StylesServices.cards}>
            <div className={StylesServices.logo}>
              <img src={Image19} alt={Image3} />

            </div>
            <h3>Database
            </h3>
            <p>Test Yantra Global excels in harnessing diverse database technologies to optimize your data management needs. From relational databases like MySQL, Oracle, and PostgreSQL to NoSQL solutions such as MongoDB, SQLite, and neo4j, we offer tailored solutions for efficient data storage and retrieval. With our expertise, your data remains secure, organized, accessible, and ready to drive your business forward.</p>
          </div>
        </div>

      </div>




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

export default SoftwareDevelopment