import '../style/about.css'
import {Carousel} from 'react-bootstrap';
import Study from '../image/study.JPG'
import cutie from '../image/cutie.JPG'
import {useState} from 'react'
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
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                <img src={cutie} alt="Second slide" />
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img src={Study} alt="Third slide" />
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
            <p className="about-text">I am a software developer with a passion for creating innovative and</p>
            </div>
        </div>
    </div>
  )
}

export default About