import React from 'react';

const Projects = ()=>{
    const projects = [{id: 1, name: "Sign Language Detection", from: "08/2022", to:"12/2022", lang: "Python", desc: "The aim of the project is to detect sign language used by the deaf and dumb people. The system converts the signs into text that makes possible for other person to understand it."},
    {id: 2, name: "Speech enhancement system", from: "02/2022", to:"06/2022", lang: "Python", desc: "The aim of the project was to remove the unwanted noise from the input file and enhance the quality of the speech"},
    {id: 3, name: "Library management system", from: "08/2019", to:"11/2019", lang: "Python", desc: "The aim of the project to build a desktop application for college library that can replace the traditional method of handling book records."}];
    const titleStyle = {
        "font-size": "25px",
        "margin-bottom" : "10px",
        "border-bottom" : "1px solid white"
    };
    
    return(
        <div className='container flex-col' id='projects-container'>
            <p className='bg-style txt-white'>My Projects</p>
            {projects.map((project)=>{
                 return <div className='project-div flex flex-col'>
                    <p style={titleStyle}>{project.name}</p>
                    <p>Language:- {project.lang}</p>
                    <p>From:- {project.from} To:- {project.to}</p>
                    <p>Description: {project.desc}</p>
        
                </div>
            })}
                

           
        </div>
    )
}

export default Projects;