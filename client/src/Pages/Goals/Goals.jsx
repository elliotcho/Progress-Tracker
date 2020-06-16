import React, {Component} from 'react';
import Navbar from '../Navbar';
import Adder from '../Adder';
import './Goals.css';

class Goals extends Component{
    render(){
        const title='Goals';
        const nav1={path:'/', name: 'Weekly Objectives'};
        const nav2={path:'/daily', name: 'Daily Tracker'};
        const nav3={path:'/progress', name: 'Progress History'};
   
        const goal=<div className='item'>
                        <span>Improve web development skills</span><i className='fa trash'> &#xf014;</i>
                    </div>

        const noGoals=<div className='noitem'><h2 className='ml-3'>No goals set for this tier</h2></div>

        return(
            <div className='goals text-white'>
                <Navbar title={title} nav1={nav1} nav2={nav2} nav3={nav3}/>

                <section className='goalsContainer mt-5 mb-5'>
                    <div className='tier'>
                        <label className='tierLabel'>Tier S</label>
                        {goal}
                        <Adder msg='You must do'/>
                    </div>

                    <div className='tier'>
                        <label className='tierLabel'>Tier A</label>
                        {noGoals}
                        <Adder msg='You want to do'/>
                    </div>
                    
                    <div className='tier'>
                        <label className='tierLabel'>Tier B</label>
                        {noGoals}
                        <Adder msg='You would like to do'/>
                    </div>
                    
                    <div className='tier'>
                        <label className='tierLabel'>Tier C</label>
                        {noGoals}
                        <Adder msg="You could do"/>
                    </div>

                    <div className='tier'>
                        <label className='tierLabel'>Tier D</label>
                        {noGoals}
                        <Adder msg="It'd be nice to do"/>
                    </div>
                </section>
            </div>
        )
    }
}

export default Goals;