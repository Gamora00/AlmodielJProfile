import '../style/about.css'
import {Carousel} from 'react-bootstrap';
import Study from '../image/study.JPG'
import cutie from '../image/cutie.JPG'
import {useState} from 'react'
import ProfilePic from '../image/ProfilePic.jpg'
function About({about}) {

  const [fix, stateFix] = useState (false)
  /* console.log(window.scrollY); */

  const slideShow = ()=>{
    console.log('window.scrollY:', window.scrollY);
    if(window.scrollY <= 400){
      stateFix(false)
    }
    else{
      stateFix(true)
    }
  }

  window.addEventListener("scroll", slideShow)
  return (
    <div className="about-container" id="about">
        <div className={fix ? "sub-about show" : "sub-about"}>
            <h1 className="title">About me</h1>
            <div className='about'>
            <div className='study-container'>
            <Carousel>
                <Carousel.Item interval={3000}>
                <img src={Study} alt="First slide" className='img1'/>
                  <Carousel.Caption>
                    
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                <img src={cutie} alt="Second slide" />
                  <Carousel.Caption>
                    
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img src={ProfilePic} alt="Third slide" />
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
            <p className="about-text">I'm 18 years old with a dream of becoming a successful software developer. I love teaching people who struggle with programming, and at the same time, I gain more knowledge when I help others. I have a passion for learning and enjoy discovering new things.
I also love working out and going out, because as a Computer Science student, I believe it's important to hang out sometimes and observe potential problems that computer science could solve. My knowledge in programming isn't very advanced yet, but I'll do my best to improve and become more knowledgeable in the field I'm pursuing.
            </p>
            </div>
        </div>
    </div>
  )
}

export default About