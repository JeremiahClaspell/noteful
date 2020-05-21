import React from 'react'; 
import Nav from './Nav/Nav';
import "./Note.css"

export default function Note(props){


    const note = props.store.notes.filter((note)=>{
        if(note.id === props.rProps.match.params.id){
            return note
        }
    })


    return (
        <div>
            <Nav {...props}/>
            <div className="note">
                <h4>{note[0].name}</h4>
                <div>
                    <p>{note[0].modified}</p>
                    <button>Delete</button>
                </div>
                <p>{note[0].content}</p>
            </div>
        </div>
    )
}