import React from 'react'

const Contact = (props) => {
    return(
        <div class="container contact" id="contact">
            <h1>Contact</h1>
            <p><a href="https://www.linkedin.com/in/kristina-kapitanova"target="_blank">LinkedIn</a></p>
            <p><a href="https://github.com/kkapitanova"target="_blank">Github</a></p>
            <p><a href={"mailto:" + "krskapitanova@gmail.com"}>Email</a></p>
        </div>
    )
}

export default Contact