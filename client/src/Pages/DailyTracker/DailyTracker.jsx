import React, {Component} from 'react';
import Navbar from '../Navbar';
import './DailyTracker.css';

const axios=require('axios');

class DailyTracker extends Component{
    constructor(){
        super();

        this.state={
            tasks: [[], [], [], [], [], [], []],
            Monday: '',
            Tuesday: '',
            Wednesday: '',
            Thursday: '',
            Friday: '',
            Saturday: '',
            Sunday: ''
        }

        this.handleChange=this.handleChange.bind(this);
        this.deleteTask=this.deleteTask.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    componentDidMount(){
        axios.post('/loadtask').then(response =>{
            const {tasks} = this.state;

            response.data.forEach(task => {
                const {_id, idx, description} = task;

                tasks[idx].push(
                    <div className='item' key={_id}>
                        <span>
                            {description}
                        </span>
                        
                        <i className='fa trash' onClick={()=>{this.deleteTask(_id)}}> 
                            &#xf014;
                        </i>
                    </div>
                );
            });

            this.setState({tasks});
        });
    }
 
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    deleteTask(id){
        if(!window.confirm("Are you sure you want to delete this task?")){return;}

        const tasks=this.state.tasks;
        
        for(let i=0;i<tasks.length;i++){
            let day=tasks[i];

            for(let j=0;j<day.length;j++){
                if(day[j].key===id){
                    day.splice(j, 1);
                    break;
                }
            }
        }

        this.setState({tasks}, ()=>{
            axios.post('/deletetask', {id}, {headers: {'Content-Type': 'application/json'}})
            .then(()=>{});
        });
    }

    handleSubmit(e){
        e.preventDefault();

        const day = e.target.name;
        const value= this.state[day];

        if(value===''){return}

        this.setState({[day]: ''});

        axios.post('/addTask', {day, description: value}, {headers: {'Content-Type': 'application/json'}})
        .then(response =>{
            const {idx, _doc}=response.data;
           
            const tasks=this.state.tasks;

            tasks[idx].push(
                <div className='item' key={_doc._id}>
                    <span>
                        {_doc.description}
                    </span>
                    
                    <i className='fa trash' onClick={()=>{this.deleteTask(_doc._id)}}> 
                        &#xf014;
                    </i>
                </div>
            );

            this.setState({tasks});
        });
    }

    render(){
        const title='Daily Tracker';
        const nav1={path:'/', name: 'Weekly Objectives'};
        const nav2={path:'/progress', name: 'Progress History'};
        const nav3={path:'/goals', name: 'Goals'};

        const {tasks, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday} =this.state;

        const noTasks=<div className='noitem'><h2 className='ml-3'>No tasks completed today</h2></div>

        return(
            <div className='dailyTracker text-white'>
                <Navbar title ={title} nav1={nav1} nav2={nav2} nav3={nav3}/>

                <section className='dailyContainer mt-5 mb-5'>
                    <div className='day'>
                        <label className='dayLabel'>Monday</label>
                        
                        {tasks[0].length!==0? tasks[0]: noTasks}

                        <form className='adder container' onSubmit={this.handleSubmit} name='Monday'>
                            <label>Add New Objective</label>
                            <input type='text' minLength='1' maxLength='64' name='Monday' value={Monday} onChange={this.handleChange}/>
                            <button className='addBtn'>+</button>
                        </form>
                    </div>

                    <div className='day'>
                        <label className='dayLabel'>Tuesday</label>

                        {tasks[1].length!==0? tasks[1]: noTasks}

                        <form className='adder container' onSubmit={this.handleSubmit} name='Tuesday'>
                            <label>Add New Objective</label>
                            <input type='text' minLength='1' maxLength='64' name='Tuesday' value={Tuesday} onChange={this.handleChange}/>
                            <button className='addBtn'>+</button>
                        </form>
                    </div>
                    
                    <div className='day'>
                        <label className='dayLabel'>Wednesday</label>

                        {tasks[2].length!==0? tasks[2]: noTasks}
                        
                        <form className='adder container' onSubmit={this.handleSubmit} name='Wednesday'>
                            <label>Add New Objective</label>
                            <input type='text' minLength='1' maxLength='64' name='Wednesday' value={Wednesday} onChange={this.handleChange}/>
                            <button className='addBtn'>+</button>
                        </form>
                    </div>
                    
                    <div className='day'>
                        <label className='dayLabel'>Thursday</label>

                        {tasks[3].length!==0? tasks[3]: noTasks}
                        
                        <form className='adder container' onSubmit={this.handleSubmit} name='Thursday'>
                            <label>Add New Objective</label>
                            <input type='text' minLength='1' maxLength='64' name='Thursday' value={Thursday} onChange={this.handleChange}/>
                            <button className='addBtn'>+</button>
                        </form>
                    </div>

                    <div className='day'>
                        <label className='dayLabel'>Friday</label>
                        
                        {tasks[4].length!==0? tasks[4]: noTasks}
                        
                        <form className='adder container' onSubmit={this.handleSubmit} name='Friday'>
                            <label>Add New Objective</label>
                            <input type='text' minLength='1' maxLength='64' name='Friday' value={Friday} onChange={this.handleChange}/>
                            <button className='addBtn'>+</button>
                        </form>
                    </div>

                    <div className='day'>
                        <label className='dayLabel'>Saturday</label>

                        {tasks[5].length!==0? tasks[5]: noTasks}
                        
                        <form className='adder container' onSubmit={this.handleSubmit} name='Saturday'>
                            <label>Add New Objective</label>
                            <input type='text' minLength='1' maxLength='64' name='Saturday' value={Saturday} onChange={this.handleChange}/>
                            <button className='addBtn'>+</button>
                        </form>
                    </div>

                    <div className='day'>
                        <label className='dayLabel'>Sunday</label>

                        {tasks[6].length!==0? tasks[6]: noTasks}
                       
                        <form className='adder container' onSubmit={this.handleSubmit} name='Sunday'>
                            <label>Add New Objective</label>
                            <input type='text' minLength='1' maxLength='64' name='Sunday' value={Sunday} onChange={this.handleChange}/>
                            <button className='addBtn'>+</button>
                        </form>
                    </div>
                </section>
            </div>
        )
    }
}

export default DailyTracker;