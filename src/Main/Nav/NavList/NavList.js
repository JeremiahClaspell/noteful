import React from 'react'; 
import ListItem from './ListItem/ListItem'

export default function NavList(props){

    const folders = props.folders.map((folder)=>{
        return (    
            <ListItem folder={folder} key={folder.id} className="folder" {...props}/>
        )
    })

    return (
        <ul className="folderList">
            {folders}
        </ul>
    )
}