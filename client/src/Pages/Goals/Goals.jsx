import React, {Component} from 'react';
import Navbar from '../Navbar';

class Goals extends Component{
    render(){
        const title='Goals';
        const nav1={path:'/', name: 'Weekly Objectives'};
        const nav2={path:'/daily', name: 'Daily Tracker'};
        const nav3={path:'/progress', name: 'Progress History'};

        return(
            <div className='goals'>
                <Navbar title={title} nav1={nav1} nav2={nav2} nav3={nav3}/>
            </div>
        )
    }
}

export default Goals;