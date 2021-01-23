import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'
import {compose} from 'redux'

// import {lifecycle} from 'recompose';
// import { withFirestore, isLoaded, isEmpty } from 'react-redux-firebase'

const ProjectDetail = ({firestore,projects,id,auth},props) => {
    // const {project} = props;
    // console.log(props.projects)
    
    const project = projects ? projects[id] : null
    // const {auth}=props
    if (!auth.uid) return <Redirect to ='/signin'/>
    if (project){
        return(
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">{project.title}</span>                    
                    <p>{project.content}</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
        )
    }else{
        return (
            <div className="container center">
                <p>Loading project... </p>
            </div>
        )

    }
}                        

const mapStateToProps = (state,ownProps) =>{
    const id= ownProps.match.params.id
    const projects=state.firestore.data.projects;
    // const auth=state.firebase.auth
    // console.log(state.firestore) 
    return{
        projects:projects,
        id:id,
        auth:state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'projects'}
    ])
)(ProjectDetail)
