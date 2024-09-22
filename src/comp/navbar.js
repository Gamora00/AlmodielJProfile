import logo from '../image/logo.png'
import {Dropdown} from 'react-bootstrap';
import '../style/nav.css'
import { MdOutlineArrowOutward } from "react-icons/md";

function Navbar() {
 
  return (
    <div className='nav' id="Top">
            <div className='logo-con'><img src={logo} alt='logo' className='logo'/></div>
            <ul>
                <li><a href='home'>Home</a></li>
                <li><a href='#about'>Who Am I?</a></li>
                

                <Dropdown >
                    <Dropdown.Toggle variant="" id="dropdown-basic">
                        Others
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href='#education'><li><a className='dropDownList'>Education</a></li></Dropdown.Item>
                        <Dropdown.Item  href='#achievement' className='dropDownList'><li><a>achievement</a></li></Dropdown.Item>
                        <Dropdown.Item href='#project' className='dropDownList'><li><a>Project</a></li></Dropdown.Item>
                        <Dropdown.Item href='#skills' className='dropDownList'><li><a>Skills</a></li></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </ul>
        <div className="git"><a href="#contact">Get in Touch<MdOutlineArrowOutward className='arrow'/>
        </a></div>
    </div>
  )
}

export default Navbar