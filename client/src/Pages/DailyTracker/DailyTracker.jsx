import React, {Component} from 'react';
import Navbar from '../Navbar';
import './DailyTracker.css';

class DailyTracker extends Component{
    render(){
        const title='Daily Tracker';
        const nav1={path:'/', name: 'Weekly Objectives'};
        const nav2={path:'/progress', name: 'Progress History'};
        const nav3={path:'/goals', name: 'Goals'};

        return(
            <div className='dailyTracker text-white'>
                <Navbar title={title} nav1={nav1} nav2={nav2} nav3={nav3}/>

                <section className='dailyContainer'>
                    <label>Monday</label>
                    <textarea/>

                    <label>Tuesday</label>
                    <textarea/>

                    <label>Wednesday</label>
                    <textarea/>

                    <label>Thursday</label>
                    <textarea/>

                    <label>Friday</label>
                    <textarea/>

                    <label>Saturday</label>
                    <textarea/>

                    <label>Sunday</label>
                    <textarea/>
                </section>
            </div>
        )
    }
}

export default DailyTracker;