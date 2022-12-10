import React, { useState, useEffect } from 'react';
import './MenuItem.css';

export default function MenuItem(props) {
  const [visible, setVisible] = useState(false);
  
  const activeStyle = {
    height: '800px',
    transition: 'height 0.5s'
  }
  const normalStyle = {
    transition: 'height 0.5s',
  }

  const thisIsMyCopy = '<div className="page-contents"><p>copy copy copy <strong>strong copy</strong></p></div>';

  return (
    <div className="page" style={visible ? activeStyle : normalStyle}>
      <h1 className="page-title" onClick={() => setVisible(!visible)}>{props.name}</h1>
      <div classname="page-contents" id={props.id}/>
    </div>
  )

}


