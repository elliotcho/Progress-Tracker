import React, {Component} from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import DailyTracker from './Pages/DailyTracker/DailyTracker';
import ProgressHistory from './Pages/ProgressHistory/ProgressHistory';
import Goals from './Pages/Goals/Goals';
import './App.css'

class App extends Component{
    render(){
        return(
          <HashRouter>
              <Route exact path='/' render={()=><Home/>}/>
              <Route exact path='/daily' render={()=><DailyTracker/>}/>
              <Route exact path='/progress' render={()=><ProgressHistory/>}/>
              <Route exact path='/goals' render={()=><Goals/>}/>
          </HashRouter>
        )
    }
}
export default App;