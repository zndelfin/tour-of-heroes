import React from 'react';
import reactLogo from '../assets/react.svg';

export default function Header(){
return (
  <div className="nav">
   <img className="logo" src={reactLogo} alt="React logo" />
   <div className="headerTitle">
   <h3 className="whiteTitle">TOUR</h3>
    <h3 className="grayTitle">OF</h3>
    <h3 className="blueTitle">HEROES</h3>
   </div>
    
  </div>
);
}
