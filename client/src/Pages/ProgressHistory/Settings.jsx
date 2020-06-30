import React, {Component} from 'react';

const axios=require('axios');

class Settings extends Component{
    clear(path, page){
        if(!window.confirm(`Are you sure you want to reset ${page}?`)){return;}
        
        axios.post(path).then(()=>{
           alert(`We have reset ${page.toLowerCase()}`);
        });
    }

    render(){
        return(
            <div className='settings'>
                <p onClick={() => {this.clear('http://localhost:5000/cleartasks', 'your Daily Tracker')}}>Clear Daily Tracker</p>
                
                <p onClick={()=>{this.clear('http://localhost:5000/clearobjs', 'your Weekly Objectives')}}>Clear Weekly Objectives</p>
                
                <p onClick={()=>{this.clear('http://localhost:5000/cleargoals', 'your Goals')}}>Clear Goals</p>
            </div>
        )
    }
}

export default Settings;