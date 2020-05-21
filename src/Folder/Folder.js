import React from 'react'; 
import Notes from '../Main/Notes/Notes';
import Nav from '../Main/Nav/Nav'; 

export default function Folder(props){

    const folderId = props.rProps.match.params.id
    const notes = props.store.notes.filter((note)=>{
        if(note.folderId === folderId){
            return note
        }
    })


    return (
        <>
            <Nav {...props.store} rProps={props.rProps}/>
            <Notes notes={notes}/>
        </>
    )
}

