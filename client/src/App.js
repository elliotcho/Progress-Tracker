import React, {Component} from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import DailyTracker from './Pages/DailyTracker/DailyTracker';
import './App.css'

class App extends Component{
    render(){
        return(
          <HashRouter>
              <Route exact path='/' render={()=><Home/>}/>
              <Route exact path='/daily' render={()=><DailyTracker/>}/>
          </HashRouter>
        )
    }
}
export default App;