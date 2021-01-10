import React, {useState} from 'react'

const CreateProject =()=> {
    const [title,setTitle]=useState('');
    const [content,setContent]=useState('');
    const handleChange = (e) =>{
        console.log(e.target.id)
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
        console.log(title,content)
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Creaat Project</h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="content">Project Content</label>
                    <input type="text" id="content" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Create</button>
                </div>
            </form>
        </div>
    )
}

export default CreateProject
