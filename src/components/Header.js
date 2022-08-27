import React from 'react';
import Typed from 'react-typed';

export const Header = () => {
  return (
    <div className="header-wrapper">
        <div className="main-info">
            <h1>Software development</h1>
            <Typed
              className="typed-text"
              strings={["Software Engineer", "React", "NodeJS", "MongoDB"]}
              typeSpeed={40}
              backSpeed={60}
              loop
            />
          <a href='#' className='btn-main-contact'>Contact Me</a>
        </div>
    </div>
  )
}
