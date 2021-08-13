import React from 'react';
import './App.scss';
import github from './images/github.svg';
import linkedin from './images/linkedin.svg';

function App() {
  return (
    <div className="wrapper">
      <div className="main">
        <div className="main-text">Website Coming Soon</div>
        <div className="main-icons">
          <div className="icon-github">
            <a href="https://github.com/mikedanzon">
              <img src={github} alt="icon github" />
              <span>Contact me on Github!</span>
            </a>
          </div>
          <div className="icon-linkedin">
            <a href="https://www.linkedin.com/in/mikedanzon/">
              <img src={linkedin} alt="icon linkedin" />
              <span>Contact me on Linkedin!</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
