import React, {Component} from 'react';
import Navbar from '../Navbar';
import './Home.css';

class Home extends Component{
    render(){
        const title='Weekly Objectives';
        const nav1={path:'/daily', name: 'Daily Tracker'};
        const nav2={path:'/', name: 'Progress History'};
        const nav3={path:'/', name: 'Goals'};

        /* const objective= <div className='objective'>
                            <span>Finish LeetCoding Challenge 7/7 times 999999999999999</span><i className='fa trash'> &#xf014;</i>
                        </div>*/

        const noObjectives=<div className='noObjectives'><h2 className='ml-3'>No Objectives set for this Week</h2></div>

        return(
            <div className='home text-white'>
                <Navbar title ={title} nav1={nav1} nav2={nav2} nav3={nav3}/>

                <section className='objectivesContainer mt-5 mb-5'>
                    {noObjectives}

                    <form className='addObjective container'>
                        <label>Add New Objective</label>
                        <input type='text' minLength='1' maxLength='64'/>
                        <label className='addBtn btn-danger'>+</label>
                    </form>
                </section>
            </div>
        )
    }
}

export default Home;

