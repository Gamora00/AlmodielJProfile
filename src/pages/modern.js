import '../style/container.css'
import Navbar from '../comp/navbar'
import profile from '../image/BaWme.jpg'
import ProfileSounds from '../functions/profileSounds'
import {useState} from 'react'
import { FaAngleDoubleUp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import '../style/reponsive.css'
import resume from '../image/resume.png'
function Modern() {
    const [fix, stateFix] =  useState(false)
   
    const Height = ()=>{
        if (window.scrollY <= 390) {
            stateFix(false)
        }
        else{
            stateFix(true)
        }
    }
   window.addEventListener("scroll", Height)
  return (
            <div className="container-main">
                <Navbar />
                <div className="content">
                    <div className="names">
                        <div className="greetings">
                            <p>Hi, Im a <span>Fullstack Developer</span></p>
                        </div>
                        <h1 className="name">Jethro Almodiel</h1>
                        <div className="summary">
                            <p>I’m currently enrolled at National University Bacolod, pursuing a degree in Computer Science. I love sharing my skills and talents. I’m a full-stack developer, and I’m continually learning more about the field. I also enjoy listening to music. (You can play music by hovering your cursor over my profile picture, and you can change the music by double-clicking the picture.
                            </p>
                        </div>  
                        <div className="content-btn">
                            <a href="https://github.com/Gamora00" target='blank'>GitHub<FaGithub className='icon-github'/></a>
                            <a href={resume} target='blank'>Resume</a>
                        </div>
                    </div>
                    <ProfileSounds picture={profile}/>
                    
                </div>

                <div className={fix ? "home fix" : "home"}><a href='#Top'><FaAngleDoubleUp className='up'/></a></div>
            </div>
            
   
  )
}

export default Modern