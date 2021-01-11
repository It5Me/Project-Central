import React, {useState} from 'react'
import  './CreateProject.css'
import {connect} from 'react-redux'
import {createProject} from '../../store/actions/projectAction'
const CreateProject =(props)=> {
    const [title,setTitle]=useState('');
    const [content,setContent]=useState('');
    const handleChange = (e) =>{
        // console.log(e.target.id)
        switch(e.target.id){
            case 'title' :
                setTitle(e.target.value)
                return;
            case 'content':
                setContent(e.target.value)
                return;
            default:
                return;
        }
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        // console.log(title,content)
        console.log(props.createProject({title,content}))
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Creaat Project</h5>
                <div className="input-field ">
                    <label htmlFor="title test"><p className="test">Title</p></label>
                    <input type="text" id="title" onChange={handleChange} autoComplete="off"  />
                </div>
                <div className="input-field ">
                    <textarea id="content" className="materialize-textarea" onChange={handleChange}></textarea>
                    <label htmlFor="content "><p className="test">Project Content </p></label>
                    {/* <input type="text" id="content" onChange={handleChange} /> */}
                </div>
                <div className="input-field test">
                    <button className="btn pink lighten-1 z-depth-0">Create</button>
                </div>
            </form>
        </div>
    )
}
const mapDispatchToProps = (dispatch) =>{
    return{
        createProject:(project) => dispatch(createProject(project))
    }
}

export default connect(null,mapDispatchToProps)(CreateProject)
