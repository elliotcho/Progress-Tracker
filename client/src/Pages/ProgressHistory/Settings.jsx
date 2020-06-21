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
                <p onClick={() => {this.clear('/cleartasks', 'your Daily Tracker')}}>Clear Daily Tracker</p>
                
                <p onClick={()=>{this.clear('/clearobjs', 'your Weekly Objectives')}}>Clear Weekly Objectives</p>
                
                <p onClick={()=>{this.clear('/cleargoals', 'your Goals')}}>Clear Goals</p>
            </div>
        )
    }
}

export default Settings;