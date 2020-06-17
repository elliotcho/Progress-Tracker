import React, {Component} from 'react';

class Settings extends Component{
    render(){
        return(
            <div className='settings'>
                <p>Clear Daily Tracker</p>
                <p>Clear Weekly Objectives</p>
                <p>Clear Goals</p>
                <p>Clear Progress History</p>
                <p>Clear All</p>
            </div>
        )
    }
}

export default Settings;