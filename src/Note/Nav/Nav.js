import React from 'react'; 

export default function Nav(props){
    const noteId = props.rProps.match.params.id; 

    const note = props.store.notes.filter((note)=>{
        if(note.id === noteId){
            return note
        }
    }) 

    const folder = props.store.folders.filter((folder)=>{
        if(folder.id === note[0].folderId){
            return folder
        }
    }); 

    console.log(props.rProps)

    return (
        <div className="nav">
                <h4>{folder[0].name}</h4>
                <button onClick={props.rProps.history.goBack}>Back</button>
        </div>
    )
}
