import React, {Component} from 'react';
import Navbar from '../Navbar';

class DailyTracker extends Component{
    render(){
        const title='Daily Tracker';
        const nav1={path:'/', name: 'Weekly Objectives'};
        const nav2={path:'/daily', name: 'Progress History'};
        const nav3={path:'/daily', name: 'Goals'};

        return(
            <div className='dailyTracker text-white'>
                <Navbar title={title} nav1={nav1} nav2={nav2} nav3={nav3}/>
                HELLO WORLD!
            </div>
        )
    }
}

export default DailyTracker;