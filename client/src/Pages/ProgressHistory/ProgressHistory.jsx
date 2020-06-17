import React, {Component} from 'react';
import DailyProgress from './Components/DailyProgress';
import WeeklyProgress from './Components/WeeklyProgress';
import Settings from './Components/Settings';
import Navbar from '../Navbar';
import './ProgressHistory.css';

class ProgressHistory extends Component{
    render(){
        const title='Progress History';
        const nav1={path:'/', name: 'Weekly Objectives'};
        const nav2={path:'/daily', name: 'Daily Tracker'};
        const nav3={path:'/goals', name: 'Goals'};

        return(
            <div className='progressHistory text-white'>
                <Navbar title={title} nav1={nav1} nav2={nav2} nav3={nav3}/>
  
                <section className='progressContainer'>
                    <ul className='nav nav-tabs'>
                        <li><a className='nav-link active' data-toggle='tab' href='#daily'>Daily Progress</a></li>
                        <li><a className='nav-link' data-toggle='tab' href='#weekly'>Weekly Progress</a></li>
                        <li><a className='nav-link' data-toggle='tab' href='#settings'>Settings</a></li>
                    </ul>

                    <div className='tab-content'>
                        <section id='daily' className='tab-pane active'>
                            <DailyProgress/>
                        </section>

                        <section id='weekly' className='tab-pane'>
                            <WeeklyProgress/>
                        </section>

                        <section id='settings' className='tab-pane'>
                            <Settings/> 
                        </section>
                    </div>
                </section>
            </div>
        )
    }
}

export default ProgressHistory;