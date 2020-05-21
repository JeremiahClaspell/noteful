import React from 'react'; 
import { Link } from 'react-router-dom'; 

export default function ListItem(props){


    return (
        <li className={props.rProps.match.params.id === props.folder.id ? "selected folder" : "folder"} key={props.folder.id}>
            <Link to={`/folder/${props.folder.id}`}>{props.folder.name}</Link>
        </li>
    )
}


