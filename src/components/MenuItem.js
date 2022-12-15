import React, { useState, useEffect } from 'react';
import './MenuItem.css';
import bryan from '../static/images/bryan.png';
import github from '../static/images/github-mark.png';
import linkedin from '../static/images/linkedin.png';
import arrow from '../static/images/arrow.png';

export default function MenuItem(props) {
  const [visible, setVisible] = useState(false);
  const [headerImages, setHeaderImages] = useState(false);

  const click = () => {
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
    height: '500px',
    transition: 'all 0.5s ease'
  }
  const normalStyle = {
    height: '80px',
    transition: 'all 0.5s ease',
  }

  return (
    <div className="page" style={visible ? activeStyle : normalStyle}>
      <div className="page-header">
        <h1 className="page-title" onClick={() => click()}>{props.name}</h1>
        <div className="header-imgs" style={headerImages ? activeHeader : normalHeader}>
          <a href={props.link} target="_blank">
          <img className="header-img" src={(props.type == "linkedin") ? linkedin : github} alt="tst" width="40px" height="40px"/>
          </a>
        </div>
      </div>
      <div className="page-contents" id={props.id}>
        <div className="me">
          {props.imageOnLeft === "true"
            ?
              <div className="me-contents">
                <div className="me-text">
                  <p>{props.text}</p>
                </div>
                <div className="me-image">
                  <img className="pageimg" src={props.image} alt="tst" />
                </div>
              </div>
            : 
              <div className="me-contents">
                <div className="me-image">
                  <img className="pageimg" src={props.image} alt="tst"/>
                </div>
                <div className="me-text">
                  <p>{props.text}</p>
                </div>
              </div>} 
        </div>
      </div> 
    </div>
  )
}
