import React from 'react'; 
import Nav from './Nav/Nav'; 
import Notes from './Notes/Notes'; 

class Main extends React.Component {

    constructor(props){
        super(props)
    }

    render(){

        return (
            <>
                <Nav {...this.props}/>
                <Notes {...this.props}/>
            </>
        )
    }
}

export default Main; 