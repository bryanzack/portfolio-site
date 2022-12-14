import React, { Fragment, useState, useRef } from 'react';
import './App.css';
import MenuItem from '../src/components/MenuItem.js';
import signature from '../src/static/images/signature.png';
import linkedin from '../src/static/images/linkedin.png';


export default function App() {
  const [about, setAbout] = useState(true);
  const [site, setSite] = useState(true);
  const [league, setLeague] = useState(true);  

  const activeStyle = {
    height: '300px',
    transition: 'height 0.5s'
  }
  const normalStyle = {
    transition: 'height 0.5s',
  }

  return (
    <div className="App">
      <div className="description">
        <div className="first">
          <img className="signature" src={signature} alt="signature"/>
          <div className="text">
            Junior Management Information Systems student at Penn State Behrend.
          </div>
        </div>
        <div className="last">
        </div>
        <img className="icon" src={linkedin} width="300px" height="300px" alt="linkedin"/>
      </div>
      <div className="pages">
        <div className="pages-container">
          <MenuItem 
            name="About"
            type="linkedin"
            link="https://www.linkedin.com/in/bryan-zack-a7947820a/"
            id="about"
          />


          <MenuItem 
            name="This site" 
            type="github"
            link="https://github.com/bryanzack/portfolio-site"
            id="this"
          />
          <MenuItem name="League site" id="league"/>
            
          
        </div>
      </div>
    </div>
  );
}

/*
          <div className="page" id="about" style={about ? normalStyle : activeStyle} onClick={() => setAbout(!about)}>
            <h1>About</h1>
            <div className="page-contents">
              test test
              
            </div>
          </div>
          <div className="page" id="this-site" style={site ? normalStyle : activeStyle} onClick={() => setSite(!site)}>
            <h1>This site</h1>
          </div>
          <div className="page" id="league-site" style={league ? normalStyle : activeStyle} onClick={() => setLeague(!league)}>
            <h1>League site</h1>
          </div>
          */
