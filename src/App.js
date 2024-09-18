import React from 'react';
import '../src/style/container.css'
import Modern from "./pages/modern";
import About from "./pages/about"
import Education from './pages/education';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from '../src/pages/skills'
function App() {

  return (
    <div className="container-main" >
      <Modern />
      <About />
      <Education/>
      <Skills />
    </div>
  );
}

export default App;
