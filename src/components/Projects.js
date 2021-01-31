import React from 'react'

const Projects = (props) => {

  return (
    <div className="Project">
      {/* <h2>Projects written with {props.type}</h2> */}
      {props.projects.map(project => (
        <div className="section-paragraph project-paragraph">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <p><a href={project.url} target="_blank">view source code</a></p>
          {/* <img src={project.images[0]} /> */}
        </div>
      ))}
    </div>
  )
}
 
export default Projects