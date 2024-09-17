import React, { useEffect,useState, useRef } from 'react'
import HomeStyle from "./Home.module.css"
import { TypeAnimation } from 'react-type-animation';
import { FaArrowRight } from "react-icons/fa";
import asset1 from "../images/asset1.png";
import asset2 from "../images/asset2.png";
import asset3 from "../images/asset3.png";
import asset4 from "../images/asset4.png";
import asset5 from "../images/asset5.png";
import { MdPlayArrow } from "react-icons/md";
import asset6 from "../images/asset6.png";
import asset7 from "../images/asset7.png";
import asset8 from "../images/asset8.png";
import asset9 from "../images/asset9.png";
import asset10 from "../images/asset10.jpeg";
import asset11 from "../images/asset11.jpeg";
import asset12 from "../images/asset12.jpeg";
import SliderCarousel from './SliderCarousel'
import Footer from './Footer';
import CountUp from 'react-countup';
// import { IoClose } from "react-icons/io5";

const Home = () => {
// let  playerref = useRef(null);
const [showPlayer, setShowPlayer] = useState(false);
  const playerRef = useRef(null);
  let canref =useRef(null);
  const playerInstance = useRef(null);
  
  const playVideo = () => {
    playerRef.current.style.display ="block"
    // canref.current.style.display ="block"
    

    setShowPlayer(true); // Show the player
  };
  const closeVideo = () => {
    playerRef.current.style.display ="none" 
    
    setShowPlayer(false); 
  };
  useEffect(() => {
    if (showPlayer) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        playerInstance.current = new window.YT.Player(playerRef.current, {
          height: '100%',
          width: '100%',
          videoId: 'tuwxrL7Kh4E', // Your YouTube video ID
          events: {
            onReady: (event) => {
              event.target.playVideo();
              const iframe = event.target.getIframe();
              const requestFullScreen =
                iframe.requestFullscreen ||
                iframe.mozRequestFullScreen ||
                iframe.webkitRequestFullScreen;
              if (requestFullScreen) {
                // requestFullScreen.bind(iframe)();
              }
            },
          },
        });
      };
    }
  }, [showPlayer]);
  return (
    <div>
      <div className={HomeStyle.head}>
        <div className={HomeStyle.unknown}>
          <div className={HomeStyle.content}>
            <div className={HomeStyle.innerbox}>
              <p><p><h1>With Test Yantra Global</h1></p>
                <br />
                <span><TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Accelarate to Business Efficienct..',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'Achieve Digital Transformation..',
                    1000,
                    'Drive AI Automation Testing..',
                    1000,
                    'Build Custom Application..',
                    1000,
                    'Realize Cost-Effective Testing..',
                    1000,
                    'Unify Web,Mobile,API and DB Testing..',
                    1000,
                    'Access 1,000s of expert Test Engineers..',
                    1000
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: '2em', display: 'inline-block' }}
                  repeat={Infinity}
                /></span></p>
              <p> Test Yantra Global's 5,000+ employees provide a range of innovative technology solutions to digitally transform your organization.</p>
              <p> From IT consulting, application design and development, to automated AI enabled test management platform that unifies web, android, iOS, API, and DB testing, we have the expertise, technology, experience, and tools to help transform your business.</p>
            </div>
            <button className={HomeStyle.butt}>Get Start Free <FaArrowRight /></button>
          </div>
          <div className={HomeStyle.imgas}>
                  {/* <Slide/> */}
                <SliderCarousel />
                  
 </div>
        </div>
      </div>




      <section className={HomeStyle.center}>
        <div className={HomeStyle.inner_center}><h1>Leverage Test Yantra Global's range </h1><h1>of Professional Services</h1></div>
        <div className={HomeStyle.inner_card}>
        <div className={HomeStyle.indhov_card}>
          <div className={HomeStyle.ind_card}>

            <div className={HomeStyle.align}>
              <img src={asset1} alt={asset1} / >
              <h3>Software Testing Services(TaaS)</h3>
              <p>We offer cost-effective, reliable and scalable software testing services.</p>
            </div>
            </div>
          </div>
          <div className={HomeStyle.ind_card}>
            <div className={HomeStyle.align}>
              <img src={asset2} alt={asset2} />
              <h3>IT Software Skills Enhancement</h3>
              <p>
                Our customized and curated training models help organizations elevate their IT quotient.</p>
            </div>
          </div>
          <div className={HomeStyle.ind_card}>
            <div className={HomeStyle.align}>
              <img src={asset3} alt={asset3} />
              <h3>
                Deployment & Support Services</h3>
              <p>
                Our team of experts help you craft a winning IT strategy for your organization.</p>
            </div>
          </div>
          <div className={HomeStyle.ind_card}>
            <div className={HomeStyle.align}>
              <img src={asset4} alt={asset4} />
              <h3>
                Software Design & Development</h3>
              <p>
                We deliver IT solutions in a wide variety of verticals and elevate businesses to the next level.</p>
            </div>
          </div>
          <div className={HomeStyle.ind_card}>
            <div className={HomeStyle.align}>
              <img src={asset5} alt={asset5} />
              <h3>Crowd Testing</h3>
              <p>
                We offer comprehensive crowd-testing services, leveraging a global network of skilled testers.</p>
            </div>
          </div>
        </div>

        <br />

        <div className={HomeStyle.inner_image} >

          <div className={HomeStyle.inner_imagebox} >
          {/* <div className={HomeStyle.inner_circle}><MdPlayArrow  className={HomeStyle.icon} />  </div> */}
          <div ref={playerRef} className={HomeStyle.hidden}>

          </div>

          <div className={HomeStyle.circles}>

            <div className={HomeStyle.circle1}> 

            </div>
             <div className={HomeStyle.circle2}></div>
                       </div>
                  

                  
          <sec className={HomeStyle.inner_circle}><MdPlayArrow  onClick={playVideo} className={HomeStyle.icon} /></sec>
          

          </div>
        </div>

      </section>


      <div className={HomeStyle.main5}>
        <div className={HomeStyle.cont6}>
          <h1 className={HomeStyle.num}>
            The numbers speak for themselves
          </h1>
        </div>
      </div>

      <div className={HomeStyle.main6}>
        <div className={HomeStyle.cont7}>
          <div className={HomeStyle.cards_2}>
            <div className={HomeStyle.logo2}>
              <img src={asset6} alt={asset6} />

            </div>
            <h3>
              <CountUp
                end={6}
                duration={3}
              />
            </h3>
            <h3>Countries & Growing</h3>
          </div>
          <div className={HomeStyle.cards_2}>
            <div className={HomeStyle.logo2}>
              <img src={asset7} alt={asset7} />
            </div>
            <h3>
              <CountUp
                end={3000}
                suffix='+'

                duration={3}
              />
            </h3>

            <h3>Clients Across Globe</h3>

          </div>
          <div className={HomeStyle.cards_2}>
            <div className={HomeStyle.logo2}>
              <img src={asset8} alt={asset8} />

            </div>
            <h3>
              <CountUp
                end={5000}
                suffix='+'

                duration={3}
              />
            </h3>

            <h3>Total Team Members</h3>

          </div>
          <div className={HomeStyle.cards_2}>
            <div className={HomeStyle.logo2}>
              <img src={asset9} alt={asset9} />

            </div>
            <h3>
              <CountUp
                end={12000}
                suffix='+'
                duration={3}
              />
            </h3>

            <h3>On Demand Test Engineers</h3>
          </div>
        </div>
      </div>


        <div className={HomeStyle.main5_}>
        <div className={HomeStyle.cont6_}>
          <div className={HomeStyle.num2}>
            <h1>Our Recent Articles</h1>
          </div>
        </div>
      </div>

      <div className={HomeStyle.main7}>
        <div className={HomeStyle.cont8}>
          <div className={HomeStyle.art}>
            <div className={HomeStyle.art_img}>
              <img className={HomeStyle.imge} src={asset10} alt={asset10} />
            </div>
            <br />
            <br />
            <div className={HomeStyle.art_img2}>
              <p>Blog | Software Testing</p>
              <h3>Comprehensive Guide to Developing Test Scripts for Software Testing</h3>
              <p>Effective software testing is essential for the delivery of high-quality software products. The development of test scripts is a critical...</p>
              <button className={HomeStyle.readmore}>Read More<FaArrowRight /></button>
            </div>
          </div>
          <div className={HomeStyle.art}>
            <div className={HomeStyle.art_img}>
              <img className={HomeStyle.imge} src={asset11} alt={asset11} />
            </div>
            <br />
            <br />
            <div className={HomeStyle.art_img2}>
              <p>Blog | Categories of Tests</p>
              <h3>Guidelines for Writing Effective Unit Tests</h3>
              <p>Learn effective unit testing techniques to enhance code quality and development speed. Discover essential tools...</p>
              <button className={HomeStyle.readmore}>Read More <FaArrowRight /></button>
            </div>

          </div>
          <div className={HomeStyle.art}>
            <div className={HomeStyle.art_img}>
              <img className={HomeStyle.imge} src={asset12} alt={asset12} />
            </div>
            <br />
            <br />
            <div className={HomeStyle.art_img2}>
              <p>Blog | Test Data</p>
              <h3>Automation Testing Tools: Selenium, Cypress, Playwright, Robot Framework vs. FireFlink</h3>
              <p>Dive into the specifics of renowned automation tools like Selenium, Cypress, Playwright, and Robot Framework...</p>
              <button className={HomeStyle.readmore}>Read More<FaArrowRight /></button>
            </div>
          </div>
        </div>
        </div>
        <button onClick={closeVideo}  ref={canref} className={HomeStyle.buttonss}>close</button>


                    <Footer/>
    </div>
  )
}

export default Home
