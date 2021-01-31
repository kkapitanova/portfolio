import React from 'react'
import ProgressBar from 'react-animated-progress-bar'

const Skills = (props) => {
    return(
        <div class="container skills" id="skills">
            <h1>Skills</h1>
            <p class="section-paragraph section-centralized">
                My skillset includes Java, Python, C++, JavaScript, Haskell, PHP and React. 
                I feel most comfortable writing code in Java and JavaScript, but I am eager to learn anything new or improve my existing knowledge.
                You can see some of the projects I have done below.
            </p>
            <h2>Confidence Working With:</h2>
            <div className="progress-bar">
                <p>Java</p>
                <ProgressBar
                width="600px"
                height="10px"
                rect="true"
                fontColor="transparent"
                percentage="80"
                rectPadding="1px"
                rectBorderRadius="20px"
                trackPathColor="transparent"
                bgColor="rgb(148,201,115)"
                trackBorderColor="grey"
                />
                <p>JavaScript</p>
                <ProgressBar
                width="600px"
                height="10px"
                rect="true"
                fontColor="transparent"
                percentage="75"
                rectPadding="1px"
                rectBorderRadius="20px"
                trackPathColor="transparent"
                bgColor="rgb(148,201,115)"
                trackBorderColor="grey"
                />
                <p>Python</p>
                <ProgressBar
                width="600px"
                height="10px"
                rect="true"
                fontColor="transparent"
                percentage="70"
                rectPadding="1px"
                rectBorderRadius="20px"
                trackPathColor="transparent"
                bgColor="rgb(148,201,115)"
                trackBorderColor="grey"
                />
                <p>C++</p>
                <ProgressBar
                width="600px"
                height="10px"
                rect="true"
                fontColor="transparent"
                percentage="65"
                rectPadding="1px"
                rectBorderRadius="20px"
                trackPathColor="transparent"
                bgColor="rgb(148,201,115)"
                trackBorderColor="grey"
                />
                <p>React</p>
                <ProgressBar
                width="600px"
                height="10px"
                rect="true"
                fontColor="transparent"
                percentage="65"
                rectPadding="1px"
                rectBorderRadius="20px"
                trackPathColor="transparent"
                bgColor="white"
                trackBorderColor="grey"
                />
                <p>PHP</p>
                <ProgressBar
                width="600px"
                height="10px"
                rect="true"
                fontColor="transparent"
                percentage="45"
                rectPadding="1px"
                rectBorderRadius="20px"
                trackPathColor="transparent"
                bgColor="white"
                trackBorderColor="grey"
                />
                <p>Haskell</p>
                <ProgressBar
                width="600px"
                height="10px"
                rect="true"
                fontColor="transparent"
                percentage="45"
                rectPadding="1px"
                rectBorderRadius="20px"
                trackPathColor="transparent"
                bgColor="white"
                trackBorderColor="grey"
                />
            </div>
            
    </div>
    )
}

export default Skills