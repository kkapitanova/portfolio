import React from 'react'
import Skills from './Skills'

const Info = (props) => {
    console.log()

    return(
        <div className="container main-info" id="main-info">
        <div className="text">
            <h1>
                <span>Hello</span>
                <span>,</span>
                <br/>
                <span className='spaced'>I'm</span>
                <span className="crossed-out spaced">{props.name}</span>
                <span>your</span>
                <br/>
                <span className='spaced'>future</span>
                <span>{props.job}</span>
                <span>.</span>
            </h1>
            <div className = "mainskills">
                {props.skills.map(skill => (
                <p>{skill}</p>
            ))}
            </div>
            
            {/* <p>Java / Python / C++ / JavaScript / React</p> */}
            <a href="#contact">contact me</a>
        </div>
        </div>
    )
}

export default Info