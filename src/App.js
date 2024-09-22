import React from 'react';
import '../src/style/container.css'
import Modern from "./pages/modern";
import About from "./pages/about"
import Education from './pages/education';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from '../src/pages/skills'
import Achievement from './pages/achievement';
import Project from './pages/project';
import Contact from './pages/contact';
function App() {

  return (
    <div className="container-main" >
      <Modern />
      <About />
      <Education/>
      <Skills />
      <Achievement />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
