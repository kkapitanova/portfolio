import React from 'react'

const About = (props) => {
    return (
    <div class="container about" id="about">
        <h1>About</h1>
        <div class="section-paragraph section-centralized about-me">
            <p>My name is {props.name} and I am currently in my second year towards my {props.degree} degree at {props.university}, United Kingdom.
            </p>
            <p>Although I gained interest in programming fairly recently, I consider myself a fast and determined learner, which helped me gain a quick pace in my ongoing journey towards becoming a great developer.   
            </p>
            <p>I used to be one of the best tennis players in the country, which has helped me gain exceptional time management skills and has consistenly tested my willpower and devotion. 
            </p> 
            <p> Being a well-rounded person is key to personal growth, which is why I am thankful for all the years spent training tennis professionally, as they have shaped me to become the disciplined and motivated person I am today.</p>
        </div>
    </div>
    )
}

export default About