import React from 'react'

const NavigationBar = (props) => {
    return (
        <div className="navbar container">
          <header>
              <div className="logo">    
                  {/* <a href="#">
                      <img src="../images/logo.jpg" alt=""/>
                  </a> */}
                  {/* KK */}
              </div>
              <nav>
                  <ul>
                      <li><a href="#about">about me</a></li>
                      <li><a href="#skills">skills</a></li>
                      <li><a href="#work">my work</a></li>
                      <li><a href="#contact">contact</a></li>
                  </ul>
              </nav>
          </header>
        </div>        
    )
}

export default NavigationBar