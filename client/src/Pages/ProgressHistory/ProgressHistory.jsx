import React, {Component} from 'react';
import Navbar from '../Navbar';

class ProgressHistory extends Component{
    render(){
        const title='Progress History';
        const nav1={path:'/', name: 'Weekly Objectives'};
        const nav2={path:'/daily', name: 'Daily Tracker'};
        const nav3={path:'/goals', name: 'Goals'};


        return(
            <div className='progressHistory'>
                <Navbar title={title} nav1={nav1} nav2={nav2} nav3={nav3}/>
            </div>
        )
    }
}

export default ProgressHistory;