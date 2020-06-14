import React, {Component} from 'react';

class WeeklyList extends Component{
    render(){
        return(
            <div className='weeklyList text-center'>
                <section className='objectiveContainer mt-5 mb-5'>
                    <div className='objective'>
                        <span>Finish LeetCoding Challenge 7/7 times 999999999999999</span>
                        <i className='fa trash'> &#xf014;</i>
                    </div>
                   

                    <section className='addObjective container'>
                        <label>Add New Objective</label>
                        <input type='text' minLength='1' maxLength='64'/>
                        <label className='addBtn btn-danger'>+</label>
                    </section>
                </section>
            </div>
        )
    }
}

export default WeeklyList;