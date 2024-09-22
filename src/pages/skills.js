import React,{useState} from 'react'
import '../style/skills.css'
import Html from '../image/htmlLogo (2).png'
import Css from '../image/CssLogo (2).png'
import Javascript from '../image/JsLogo (2).png'
import ReactLogo from '../image/React-icon.svg.png'
import BootStrapLogo from '../image/BootstrapLogo.png'
import NodeJS from '../image/NodeJSLogo.png'
import python from '../image/pythonLogo.png'
import java from '../image/javaLogo.png'
import sqlLogo from '../image/sqlLogo.png'
import { GoDatabase } from "react-icons/go";
import { MdOutlineMonitor} from "react-icons/md";
import { MdDataObject } from "react-icons/md";




function Skills() {
const [htmlFix, stateHtml] = useState(false)
const skillsFuntion = (state,value)=>{
    const skillsMotion = ()=>{
        if (window.scrollY <= value){
            state(false)
        }
        else{
            state(true)
        }
    }
    window.addEventListener('scroll', skillsMotion)
}
skillsFuntion(stateHtml, 2000)
  return (
    <div className='skills-container' id='skills'>
       <h1 className='skills-title'>Skills</h1>
        <div className='webdevelopment'>
            <p>Website Developer<MdOutlineMonitor className='monitor'/></p>
        </div>
        <div className='skills-sub'>
        
            <div className='skills'>
                <div className='skill'><h1 className='skill-title'>FrontEnd<MdOutlineMonitor /></h1></div>
                <div className='Frontend'>
                    <div className={htmlFix ? ' container-front html-container ': 'html-hide'}>
                        <img className='html'src={Html} alt='Html'/>
                        <p>HTML</p>
                    </div>
                    <div className={htmlFix ? ' container-front html-container ': 'html-hide'}>
                        <img className='css'src={Css} alt='Css'/>
                        <p>CSS</p>
                    </div>
                    <div className={htmlFix ? ' container-front html-container ': 'html-hide'}>
                        <img className='javascript'src={Javascript} alt='js'/>
                        <p>JavaScript</p>
                    </div>
                    <div className={htmlFix ? ' container-front html-container ': 'html-hide'}>
                        <img className='react'src={ReactLogo} alt='react'/>
                        <p>React</p>
                    </div>
                    <div className={htmlFix ? ' container-front html-container ': 'html-hide'}>
                        <img className='react'src={BootStrapLogo} alt='BootStrap'/>
                        <p>BootStrap</p>
                    </div>
                </div>
            </div>

            <div className='skills'>
                <div className='skill'><h1 className='skill-title'>BackEnd<MdDataObject /></h1></div>
                <div className='Backend'>
                    <div className={htmlFix ? ' container-front html-container ': 'html-hide'}>
                        <img className='html'src={NodeJS} alt='nodejs'/>
                        <p>Node Js</p>
                    </div>
                    <div className={htmlFix ? ' container-front html-container ': 'html-hide'}>
                        <img className='css'src={python} alt='python'/>
                        <p>Python</p>
                    </div>
                    <div className={htmlFix ? ' container-front html-container ': 'html-hide'}>
                        <img className='javascript'src={java} alt='java'/>
                        <p>Java</p>
                    </div>
                </div>
            </div>

            <div className='skills'>
                <div className='skill'><h1 className='skill-title'>Database<GoDatabase /></h1></div>
                <div className='database'>
                    <div className={htmlFix ? ' container-front html-container ': 'html-hide'}>
                        <img className='sql'src={sqlLogo} alt='sql'/>
                        <p>SQL</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills