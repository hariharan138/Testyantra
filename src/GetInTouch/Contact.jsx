import React from 'react'
import StyleSkills from './Contact.module.css'
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Image1 from './united-states.jpg'
import Image2 from './canada.jpg'
import Image3 from './unitedKingdom.jpg'
import Image4 from './Ireland.jpg'
import Image5 from './Netherland.jpg'
import Image6 from './india.jpg'
import Footer from '../Home/Footer';
const Contact = () => {
  return (
    <div className={StyleSkills.full}>
      <div className={StyleSkills.main}>
        <div className={StyleSkills.cont}>
          <div>
            <h1 className={StyleSkills.head}>Contact</h1>
            <br />
            <p className={StyleSkills.para}>Please complete the form below and we will get back to you soon.
            </p>
          </div>
        </div>
      </div>
      <div className={StyleSkills.cont2}>
        <form action="" className={StyleSkills.form}>
          <div className={StyleSkills.main2}>
            <div className={StyleSkills.mail}>
              <input type="text" required placeholder='Name *' />
              <input type="email" required placeholder='Email *' />
            </div>
            <div className={StyleSkills.ph}>
              <select name="topic" required >
                <option > select Topic</option>
                <option value="">Software Development</option>
                <option value=""> Sotware Testing</option>
                <option value="">IT Skills Enhancement/</option>
                <option value=""> IT Consulting</option>
                <option value=""> Career Opportunities</option>
                <option value="">Other Topics</option>
              </select>
              <input type="tel" placeholder='1 (702) 123-4567' required value="+91" />
            </div>
            <input type="text" required placeholder='Subject *' className={StyleSkills.sub} />
            <textarea name="message" cols={30} rows={6} placeholder='Write your message...' required className={StyleSkills.msg}></textarea>
            <button type='submit' className={StyleSkills.butto}>Submit</button>
          </div>
        </form>
      </div>
      {/* -----------contact--------------------------------- */}
      <div className={StyleSkills.cont3}>
        <div className={StyleSkills.main3}>
          <div className={StyleSkills.box1}>
            <h3>Contact Us By Phone
              <br />
              Number Or Email Address
            </h3>
          </div>
          <div className={StyleSkills.box2}>
            <h3><FaPhoneAlt /> 1800 572 7905
            <br />
            <CiMail /> hello@testyantraglobal.co

            </h3>
          </div>
        </div>

      </div>
      {/* ?-------------------------------------------- */}
      <div className={StyleSkills.main4}>
      <nav className={StyleSkills.cont4}>
          <h1 className={StyleSkills.head2}>
          Reach out to us at your nearest office.
          </h1>
        </nav>  
      </div>
      {/* ?---------cards------------------------------- */}
      {/* ?-----cards------------------------------------------------------- */}
      <div className={StyleSkills.main5}>
        <div className={StyleSkills.cont5}>
          <div className={StyleSkills.cards}>
            <div className={StyleSkills.logo}>
              <img src={Image1} alt={Image1} />
            </div>
            <br />
            <h3>United States of America</h3>
            <br />
            <p>99 South Almaden Blvd, Suite 600, San Jose, California, CA 95113
<br />
<br />
Ph: 1800 572 7905</p>
          </div>
          <div className={StyleSkills.cards}>
            <div className={StyleSkills.logo}>
              <img src={Image2} alt={Image2} />


            </div>
            <br />
            <h3>Canada</h3>
            <br />
            <p>120 Adelaide Street West, Suite 2500 Toronto, ON, M5H 1T1, Canada
<br />
<br />
Ph: 1800 572 7905</p>
          </div>
          <div className={StyleSkills.cards}>
            <div className={StyleSkills.logo}>
              <img src={Image3} alt={Image3} />

            </div>
            <br />
            <h3>United Kingdom
            </h3>
            <br />
            <p>1 Elmfield Park, Bromley - BR1 1LU, United Kingdom
<br />
<br />
Ph: 0800 949 6909</p>
          </div>
        </div>

      </div>
      <div className={StyleSkills.main5}>
        <div className={StyleSkills.cont5}>
          <div className={StyleSkills.cards}>
            <div className={StyleSkills.logo}>
              <img src={Image4} alt={Image4} />
            </div>
            <br />
            <h3>Ireland</h3>
            <br />
            <p>The black church, St. Mary’s place, Dublin, Ireland - D07 P4AX
<br />
<br />
Ph: 1800 851 886</p>
          </div>
          <div className={StyleSkills.cards}>
            <div className={StyleSkills.logo}>
              <img src={Image5} alt={Image5} />


            </div>
            <br />
            <h3>Netherlands</h3>
            <br />
            <p>Vliegend Hertlaan 15-97, 3526 KT Utrecht, Netherlands
<br />
<br />
Ph: +31 308 992 386</p>
          </div>
          <div className={StyleSkills.cards}>
            <div className={StyleSkills.logo}>
              <img src={Image6} alt={Image6} />

            </div>
            <br />
            <h3>India
            </h3>
            <br />
            <p>#88, 3rd Floor, Brigade Chambers, Gandhi Bazaar Main Rd, Basavanagudi, Bangalore-560004 Karnataka, India
<br />
<br />
Ph: 1800 203 9989</p>
          </div>
        </div>

      </div>
      {/* ----------footer------------------------------*/}
      <Footer/>
    </div>
  )
}

export default Contact
