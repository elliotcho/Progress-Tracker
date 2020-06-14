import React, {Component} from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import './App.css'

class App extends Component{
    render(){
        return(
          <HashRouter>
              <Route exact path='/' render={()=><Home/>}/>
          </HashRouter>
        )
    }
}
export default App;