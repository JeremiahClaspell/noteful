import React from 'react'; 
import NavList from './NavList/NavList'; 
import NavAdd from './NavAdd/NavAdd'; 
import "./Nav.css"

export default function Nav(props){
    return (
        <div className="navMain">
            <NavList {...props} rProps={props.rProps}/>
            <NavAdd {...props}/>
        </div>
    )
}