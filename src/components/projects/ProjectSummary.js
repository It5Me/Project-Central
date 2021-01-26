import React from 'react';
import moment from 'moment'
import './ProjectSummary.css'
const ProjectSummary = ({project}) =>{
    // console.log(moment(project))
    // console.log("🚀 ~ file: ProjectSummary.js ~ line 12 ~ ProjectSummary ~ project.createdAt.toDate()", (project.createdAt))
    console.log("🚀 ~ file: ProjectSummary.js ~ line 7 ~ ProjectSummary ~ project.createdAt.toDate()", project.createdAt.toDate())
    return(
        <div className='project-list section textprojectsummary'>
            <div className="card z-depth-0 project-summary  add">
            <span className="card-title">{project.title}</span>
            <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
            <p className=" textdateprojectsummary">{moment(project.createdAt.toDate()).calendar()}</p>
            </div>
        </div>
    )
}
export default ProjectSummary