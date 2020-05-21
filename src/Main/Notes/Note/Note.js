import React from 'react'; 
import { Link } from 'react-router-dom'; 

export default function Note(props){
    return (
        <div>
            <Link to={`/note/${props.note.id}`}><h6>{props.note.name}</h6></Link>
            <div className="noteDisplayContent">
                <p>Date Modified: {props.note.modified}</p>
                <button>Delete</button>
            </div>
        </div>
    )
}