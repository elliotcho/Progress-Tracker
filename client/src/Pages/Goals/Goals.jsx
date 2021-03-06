import React, {Component} from 'react';
import Navbar from '../Navbar';
import './Goals.css';

const axios=require('axios');

const map={
    'TierS': 0, 
    'TierA': 1,
    'TierB': 2,
    'TierC': 3,
    'TierD': 4
}

class Goals extends Component{
    constructor(){
        super();

        this.state={
            goals: [[], [], [], [], []],
            TierS: '',
            TierA: '',
            TierB: '',
            TierC: '',
            TierD: ''
        }

        this.handleChange=this.handleChange.bind(this);
        this.deleteGoal=this.deleteGoal.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    componentDidMount(){
        axios.post('http://localhost:5000/loadgoal').then(response =>{
            const {goals} = this.state;

            response.data.forEach(goal => {
                goals[map[goal.tier]].push(goal);
            });

            this.setState({goals});
        });
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

   
    deleteGoal(id){
        if(!window.confirm("Are you sure you want to delete this goal?")){return;}

        const goals=this.state.goals;

        for(let i=0;i<goals.length;i++){
            let tier=goals[i];

            for(let j=0;j<tier.length;j++){
                if(tier[j]._id===id){
                    tier.splice(j, 1);
                    break;
                }
            }
        }

        this.setState({goals}, ()=>{
            axios.post('http://localhost:5000/deletegoal', {id}, {headers: {'Content-Type': 'application/json'}})
            .then(()=>{});
        });
    }

    handleSubmit(e){
        e.preventDefault();

        const tier=e.target.name;
        const goal=this.state[tier];

        if(goal===''){return;}

        this.setState({[tier]: ''});

        axios.post('http://localhost:5000/addgoal', {tier, description: goal}, {headers: {'Content-Type': 'application/json'}})
        .then(response =>{
            const goals=this.state.goals;

            goals[map[response.data.tier]].push(response.data);

            this.setState({goals});
        });
    }

    render(){
        const title='Goals';
        const nav1={path:'/', name: 'Weekly Objectives'};
        const nav2={path:'/daily', name: 'Daily Tracker'};
        const nav3={path:'/progress', name: 'Progress History'};

        const {TierS, TierA, TierB, TierC, TierD} = this.state;

        const goals=this.state.goals.map(tier =>
            tier.map(goal =>
                    <div className='item' key={goal._id}>
                    <span>
                        {goal.description}
                    </span>
                
                    <i className='fa trash' onClick={()=>{this.deleteGoal(goal._id)}}> 
                        &#xf014;
                    </i>
                </div>
            )
        );

        const noGoals=<div className='noitem'><h2 className='ml-3'>No goals set for this tier</h2></div>

        return(
            <div className='goals text-white'>
                <Navbar title={title} nav1={nav1} nav2={nav2} nav3={nav3}/>

                <section className='goalsContainer mt-5 mb-5'>
                    <div className='tier'>
                        <label className='tierLabel'>Tier S</label>
                        
                        {goals[0].length!==0? goals[0]: noGoals}

                        <form className='adder container' onSubmit={this.handleSubmit} name='TierS'>
                            <label>Add New Objective</label>
                            <input type='text' minLength='1' maxLength='64' name='TierS' value={TierS} onChange={this.handleChange}/>
                            <button className='addBtn'>+</button>
                        </form>
                    </div>

                    <div className='tier'>
                        <label className='tierLabel'>Tier A</label>
                        
                        {goals[1].length!==0? goals[1]: noGoals}

                        <form className='adder container' onSubmit={this.handleSubmit} name='TierA'>
                            <label>Add New Objective</label>
                            <input type='text' minLength='1' maxLength='64' name='TierA' value={TierA} onChange={this.handleChange}/>
                            <button className='addBtn'>+</button>
                        </form>
                    </div>

                    <div className='tier'>
                        <label className='tierLabel'>Tier B</label>
                        
                        {goals[2].length!==0? goals[2]: noGoals}

                        <form className='adder container' onSubmit={this.handleSubmit} name='TierB'>
                            <label>Add New Objective</label>
                            <input type='text' minLength='1' maxLength='64' name='TierB' value={TierB} onChange={this.handleChange}/>
                            <button className='addBtn'>+</button>
                        </form>
                    </div>

                    <div className='tier'>
                        <label className='tierLabel'>Tier C</label>
                        
                        {goals[3].length!==0? goals[3]: noGoals}

                        <form className='adder container' onSubmit={this.handleSubmit} name='TierC'>
                            <label>Add New Objective</label>
                            <input type='text' minLength='1' maxLength='64' name='TierC' value={TierC} onChange={this.handleChange}/>
                            <button className='addBtn'>+</button>
                        </form>
                    </div>

                    <div className='tier'>
                        <label className='tierLabel'>Tier D</label>
                        
                        {goals[4].length!==0? goals[4]: noGoals}

                        <form className='adder container' onSubmit={this.handleSubmit} name='TierD'>
                            <label>Add New Objective</label>
                            <input type='text' minLength='1' maxLength='64' name='TierD' value={TierD} onChange={this.handleChange}/>
                            <button className='addBtn'>+</button>
                        </form>
                    </div>
                </section>
            </div>
        )
    }
}

export default Goals;