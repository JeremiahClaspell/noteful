import React from 'react';
import './App.css';
import Header from './Header/Header'; 
import { Route, Switch } from 'react-router-dom'; 
import Store from './Store'; 
import Main from './Main/Main'; 
import Folder from './Folder/Folder'; 
import Note from './Note/Note'; 
import PageNotFound from './PageNotFound/PageNotFound'

class App extends React.Component {

  constructor(props){
    super(props); 
    this.state= {
      store: Store, 
      folder: ''
    } 
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" render={(props)=>{return <Main {...this.state.store} rProps={props}/>}}/>
          <Route path="/folder/:id" render={(props)=>{return <Folder {...this.state} rProps={props}/>}}/>
          <Route path="/note/:id" render={(props)=>{return <Note {...this.state} rProps={props}/>}}/>
          <Route component={PageNotFound}/>
        </Switch>
      </div>
    );
  }
}

export default App;
