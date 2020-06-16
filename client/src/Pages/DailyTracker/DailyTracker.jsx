import React, {Component} from 'react';
import Navbar from '../Navbar';
import Adder from '../Adder';
import './DailyTracker.css';

class DailyTracker extends Component{
    render(){
        const title='Daily Tracker';
        const nav1={path:'/', name: 'Weekly Objectives'};
        const nav2={path:'/progress', name: 'Progress History'};
        const nav3={path:'/goals', name: 'Goals'};

        const task=<div className='item'>
                        <span>Finished working out arms and abs</span><i className='fa trash'> &#xf014;</i>
                    </div>

        const noTasks=<div className='noitem'><h2 className='ml-3'>No tasks completed today</h2></div>

        return(
            <div className='dailyTracker text-white'>
                <Navbar title ={title} nav1={nav1} nav2={nav2} nav3={nav3}/>

                <section className='dailyContainer mt-5 mb-5'>
                    <div className='day'>
                        <label className='dayLabel'>Monday</label>
                        {task}
                        <Adder msg='What did you do today?'/>
                    </div>

                    <div className='day'>
                        <label className='dayLabel'>Tuesday</label>
                        {noTasks}
                        <Adder msg='What did you do today?'/>
                    </div>
                    
                    <div className='day'>
                        <label className='dayLabel'>Wednesday</label>
                        {noTasks}
                        <Adder msg='What did you do today?'/>
                    </div>
                    
                    <div className='day'>
                        <label className='dayLabel'>Thursday</label>
                        {noTasks}
                        <Adder msg='What did you do today?'/>
                    </div>

                    <div className='day'>
                        <label className='dayLabel'>Friday</label>
                        {noTasks}
                        <Adder msg='What did you do today?'/>
                    </div>

                    <div className='day'>
                        <label className='dayLabel'>Saturday</label>
                        {noTasks}
                        <Adder msg='What did you do today?'/>
                    </div>

                    <div className='day'>
                        <label className='dayLabel'>Sunday</label>
                        {noTasks}
                        <Adder msg='What did you do today?'/>
                    </div>
                </section>
            </div>
        )
    }
}

export default DailyTracker;