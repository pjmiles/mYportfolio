import React from 'react';
import Typed from 'react-typed';

export const Header = () => {
  return (
    <div className="header-wrapper">
        <div className="main-info">
            <h1 className="header-text">WELCOME TO MY PAGE</h1>
            <Typed
              className="typed-text"
              strings={["My Skills", "HTML5", "CSS3", "JavaScript", "ReactJS", "NodeJS", "ExpressJS", "MongoDB"]}
              typeSpeed={40}
              backSpeed={60}
              loop
            />
          {/* <Link to="about" className='btn-main-contact'>Contact Me</Link> */}
        </div>
    </div>
  )
}
