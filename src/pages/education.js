import React from 'react'
import '../style/education.css'
import Elementary from '../image/jayme.jpg'
import HighSchool from '../image/bcnhs.png'
import Senior from '../image/sti.png'
import College from '../image/NU.png'
import {useState} from 'react'
function Education() {
const [lineFix, stateLine] = useState(false)
const [lineFix2, stateLine2] = useState(false)
const [lineFix3, stateLine3] = useState(false)
const [lineFix4, stateLine4] = useState(false)

    const motionFunction = (state,value)=>{
        const lineMotion = ()=>{
            if (window.scrollY <= value){
                state(false)
            }
            else{
                state(true)
            }
        }
        window.addEventListener('scroll', lineMotion)
    }
    motionFunction(stateLine,1000)
    motionFunction(stateLine2,1200)
    motionFunction(stateLine3,1300)
    motionFunction(stateLine4,1400)

  return (
    <div className='education-container' id='education'>
        <h1 className='education-title'>Education Background</h1>
        <div className='education'>
            
            <div className='education-content'>
                <div className={lineFix ? 'education-item  education-motion1' : 'education-motion-hide1'}>
                    <div className='education-elements'>
                        <div className='education-logo'><img src={Elementary}/></div>
                        
                    </div>
                    <div className={lineFix ? 'education-text-left text-left' : 'text-hide-left'}>
                        <h4 className='education-item-title'>Elementary School</h4>
                        <h5 >A.L Jayme Elementary School</h5>
                        <p className='education-item-date'>2012-2018</p>
                    </div>
                </div>
                <div className={lineFix2 ? 'education-item education-motion2' : 'education-motion-hide2' }>
                    <div className='education-elements'>
                        <div className='education-logo'><img src={HighSchool}/></div>
                    </div>
                    <div className={lineFix2 ? 'education-text-right text-left2' : 'text-hide-right'}>
                        <h4 className='education-item-title'>Junior High School</h4>
                        <h5>Bacolod City National High School</h5>
                        <p className='education-item-date'>2018-2022</p>
                    </div>
                </div>
                <div className={lineFix3 ? 'education-item education-motion3' : 'education-motion-hide3' }>
                    <div className='education-elements'>
                        <div className='education-logo'><img src={Senior}/></div>
                    </div>
                    <div className={lineFix3 ? 'education-text-left text-left' : 'text-hide-left'}>
                        <h4 className='education-item-title'>Senior High School</h4>
                        <h5>STI-West Negros University</h5>
                        <p className='education-item-date'>2022-2024</p>
                    </div>
                </div>
                <div className={lineFix4 ? 'education-item  education-motion4' : 'education-motion-hide4'}>
                    <div className='education-elements'>
                        <div className='education-logo'><img src={College}/></div>
                        
                    </div>
                    <div className={lineFix4 ? 'education-text-right text-left2' : 'text-hide-right'}>
                            <h4 className='education-item-title'>College</h4>
                            <h5>National University Bacolod</h5>
                            <p className='education-item-date'>2024</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Education