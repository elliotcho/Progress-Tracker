import React, {Component} from 'react';
import Navbar from '../Navbar';
import Adder from '../Adder';
import './Home.css';

class Home extends Component{
    render(){
        const title='Weekly Objectives';
        const nav1={path:'/daily', name: 'Daily Tracker'};
        const nav2={path:'/progress', name: 'Progress History'};
        const nav3={path:'/goals', name: 'Goals'};

        const objective= <div className='item'>
                            <span>Finish LeetCoding Challenge 7/7 times 999999999999999</span><i className='fa trash'> &#xf014;</i>
                        </div>

        const noObjectives=<div className='noitem'><h2 className='ml-3'>No objectives set for this week</h2></div>

        return(
            <div className='home text-white'>
                <Navbar title ={title} nav1={nav1} nav2={nav2} nav3={nav3}/>

                <section className='objectivesContainer mt-5 mb-5'>
                    {objective}
                    {objective}

                    <Adder msg='Add New Objective'/>
                </section>
            </div>
        )
    }
}

export default Home;

