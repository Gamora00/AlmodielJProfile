import logo from '../image/logo.png'
import {Dropdown} from 'react-bootstrap';
import '../style/nav.css'

function Navbar() {
 
  return (
    <div className='nav' id="Top">
            <div className='logo-con'><img src={logo} alt='logo' className='logo'/></div>
            <ul>
                <li><a href='home'>Home</a></li>
                <li><a href='#about'>Who Am I?</a></li>
                

                <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown-basic">
                        Others
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item ><li><a href='educationList'>Education</a></li></Dropdown.Item>
                        <Dropdown.Item ><li><a href='achievements'>Achievements</a></li></Dropdown.Item>
                        <Dropdown.Item ><li><a href='project'>Project</a></li></Dropdown.Item>
                        <Dropdown.Item ><li><a href='contact'>Reach Me</a></li></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </ul>
        <div className="git"><a href="git">Get in Touch</a></div>
    </div>
  )
}

export default Navbar