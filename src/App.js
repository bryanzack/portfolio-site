import React, { Fragment, useState, useRef } from 'react';
import './App.css';
import MenuItem from '../src/components/MenuItem.js';
import signature from '../src/static/images/signature.png';
import linkedin from '../src/static/images/linkedin.png';
import bryan from './static/images/bryan.png';
import github from './static/images/github-mark.png';
import data from './static/images/data.png';
import coding from './static/images/coding.png';

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
            imageOnLeft="true"
            image={bryan}
            text="Hey, my name is Bryan and I'm a third year Management Information Systems student at Penn State Behrend. Although my degree of choice deals in both management and information systems, my goal is to pivot more into the latter and the likes. I enjoy video games, reading, movies, music, programming, and creating things; and I figured that combining the aforementioned in different ways would be a good way to build a small but respectable portfolio of projects."
          />
          <MenuItem 
            name="This site" 
            type="github"
            link="https://github.com/bryanzack/portfolio-site"
            id="this"
            imageOnLeft="false"
            image={coding}
            text="Using basic React.js features, I created this simple website to showcase some of my capabilities. Unlike the next project, which uses ES6 class based components, this project was made using functional components, and the syntaxes that go with it."
          />
          <MenuItem 
            name="League site"
            type="github"
            link="https://github.com/bryanzack/leaguesite"
            id="league"
            imageOnLeft="true"
            image={data}
            text="This project uses React.js and Express.js to serve the user a detailed summary of their last 10 games of League of Legends. The site works by letting the user request an Express.js api endpoint, parsing the query parameters from the request, then using those same parameters to send additional requeststo various official League of Legends API endpoints. Being my first React.js project, I learned the importance of components when dealing with 'large' amounts of data as well as basic concepts such as state management and conditional rendering. For a more in-depth description of this project, check out the README.md that can be found in the projects Github repository."
            applink="https://league-site.herokuapp.com/"
          /> 
        </div>
      </div>
    </div>
  );
}
