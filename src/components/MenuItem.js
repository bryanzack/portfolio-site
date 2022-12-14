import React, { useState, useEffect } from 'react';
import './MenuItem.css';
import bryan from '../static/images/bryan.png';
import github from '../static/images/github-mark.png';
import linkedin from '../static/images/linkedin.png';


export default function MenuItem(props) {
  const [visible, setVisible] = useState(false);
  const [headerImages, setHeaderImages] = useState(false);

  const onClick = () => {
    setVisible(!visible);
    setHeaderImages(!headerImages);
  }
 
  const activeHeader = {
    opacity: 1,
    transition: 'opacity 0.5s'
  }

  const normalHeader = {
    opacity: 0,
    transition: 'opacity 0.5s'
  }

  const activeStyle = {
    height: '600px',
    transition: 'height 0.5s'
  }
  const normalStyle = {
    transition: 'height 0.5s',
  }

  const thisIsMyCopy = '<div className="page-contents"><p>copy copy copy <strong>strong copy</strong></p></div>';

  return (
    <div className="page" style={visible ? activeStyle : normalStyle}>
      <div className="page-header">
        <h1 className="page-title" onClick={() => onClick()}>{props.name}</h1>
        <div className="header-imgs" style={headerImages ? activeHeader : normalHeader}>
          <a href={props.link} target="_blank">
          <img className="header-img" src={(props.type == "linkedin") ? linkedin : github} alt="tst" width="40px" height="40px"/>
          </a>
        </div>
      </div>
      <div className="page-contents" id={props.id}>
        <div className="me">
          <div className="me-text">
            <p>Hey, my name is Bryan and I'm a third year Management Information Systems student at Penn State Behrend. Although my degree of choice deals in both management and information systems, my goal is to pivot more into the latter and the likes. I enjoy video games, reading, movies, music, programming, and creating things; and I figured that combining the aforementioned in different ways would be a good way to build a small but respectable portfolio of projects.</p>
          </div>
          <div className="me-image">
            <img className="meimg" src={bryan} alt="tst" width="250px" height="250px"/>
          </div>
        </div>
      </div>
    </div>
  )

}


