import React from 'react'; 
import Note from './Note/Note'
import './Notes.css'

export default function Notes(props){

    const note = props.notes.map((note)=>{
        return (
            <li key={note.id}> 
                <Note note={note}/>
            </li>
        )
    })


    return (
        <div className="notesContainer">
            <ul className="notesList">
                {note}
            </ul>
            <button>New Note</button>
        </div>
    )
}