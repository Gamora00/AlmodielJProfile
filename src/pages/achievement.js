import React from 'react'
import '../style/achievement.css'
import Poster from '../image/poster.jpeg'
import CertForCode from '../image/codeFestCert.jpg'
import DesignCert from '../image/DesignCert.jpg'
import CodefestBtn from '../comp/CodefestBtn'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import PosterBtn from '../comp/design'
import DesignBtn from '../comp/designBtn'

function Achievement() {

 
const [modalShow, setModalShow] = useState(false);
const [pictureShow, setShow] = useState(false)

const skillsFuntion = (state,value)=>{
  const skillsMotion = ()=>{
      if (window.scrollY >= value){
          state(true)
      }
      else{
          state(false)
      }
  }
  window.addEventListener('scroll', skillsMotion)
}
skillsFuntion(setShow, 2500)

 

  return (
    <div className='reward-container' id='achievement'>
      
        <div className='sub-reward'>
        <h1>Achievement</h1>
          <div className='reward'>
                <div className='cell one'>
                  {/* <h2>CodeFest 2020</h2> */}
                  <Button variant="primary" onClick={() => setModalShow(true)} className={pictureShow ? 'oneBtn cell1' : 'oneBtn oneBtnHide'}>
                    <img src={CertForCode}/>
                  </Button>

                </div>
                <div className='cell two'>
                <Button variant="primary" onClick={() => setModalShow(true)} className={pictureShow ? 'oneBtn cell2' : 'oneBtn oneBtnHide'}>
                    <img src={Poster}/>
                  </Button>

                  
                </div>
                <div className='cell three'>
                <Button variant="primary" onClick={() => setModalShow(true)} className={pictureShow ? 'oneBtn cell3' : 'oneBtn oneBtnHide'}>
                  <img src={DesignCert}/>
                  </Button>
                </div>
            </div> 
          
        </div> 
    </div>
  )
}

export default Achievement