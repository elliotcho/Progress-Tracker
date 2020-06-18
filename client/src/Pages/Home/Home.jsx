import React, {Component} from 'react';
import Navbar from '../Navbar';
import './Home.css';

const axios=require('axios');

class Home extends Component{
    constructor(){
        super();

        this.state={
            objectives: []
        }

        this.handleSubmit=this.handleSubmit.bind(this);
        this.deleteObjective=this.deleteObjective.bind(this);
        this.checkObjective=this.checkObjective.bind(this);
    }

    componentDidMount(){
        axios.post('/loadobj').then(response =>{
            this.setState({
                objectives: response.data 
            });
        });
    }

    deleteObjective(id){
        if(!window.confirm("Are you sure you want to delete this weekly objective?")){return;}

        const objectives=this.state.objectives;

        for(let i=0;i<objectives.length;i++){
            if(objectives[i]._id === id){
                objectives.splice(i, 1);
                break;
            }
        }

        this.setState({objectives}, ()=>{
            axios.post('/deleteobj', {id}, {headers: {'Content-Type': 'application/json'}})
            .then(() => {});
        });
    }

    checkObjective(id){
        const objectives=this.state.objectives;

        let checked;

        for(let i=0;i<objectives.length;i++){
            if(objectives[i]._id === id){
                objectives[i].checked=!objectives[i].checked;
                checked=objectives[i].checked;
                break;
            }
        }

        this.setState({objectives}, ()=>{
            axios.post('/checkobj', {id, checked}, {headers: {'Content-Type': 'application/json'}})
            .then(()=>{});
        });
    }

    handleSubmit(e){
        e.preventDefault();

        const {value} =e.target.objective;

        if(value.length===0){
            return;
        }

        e.target.objective.value="";

        axios.post('/addobj', {description: value}, {headers: {'Content-Type': 'application/json'}})
        .then(response => {
            const objectives=this.state.objectives;

            objectives.push(response.data._doc);

            this.setState({objectives});
        });
    }

    render(){
        const title='Weekly Objectives';
        const nav1={path:'/daily', name: 'Daily Tracker'};
        const nav2={path:'/progress', name: 'Progress History'};
        const nav3={path:'/goals', name: 'Goals'};

        const objectives = this.state.objectives.map(objective => {
            let style;

            if(objective.checked){
                style={background: 'lightgreen', color: 'black'};
            }
            
            return(
                <div className='item' key={objective._id} onClick={()=>{this.checkObjective(objective._id)}} style={style}>
                    <span>
                        {objective.description}
                    </span>

                    <i className='fa trash' onClick={()=>{this.deleteObjective(objective._id)}}>
                         &#xf014;
                    </i>
                </div>
            )
        });
                       

        const noObjectives=<div className='noitem'><h2 className='ml-3'>No objectives set for this week</h2></div>

        return(
            <div className='home text-white'>
                <Navbar title ={title} nav1={nav1} nav2={nav2} nav3={nav3}/>

                <section className='objectivesContainer mt-5 mb-5'>
                    {objectives.length!==0 ? objectives: noObjectives}

                    <form className='adder container' onSubmit={this.handleSubmit}>
                        <label>Add New Objective</label>
                        <input type='text' minLength='1' maxLength='64' name='objective'/>
                        <button className='addBtn'>+</button>
                    </form>
                </section>
            </div>
        )
    }
}

export default Home;