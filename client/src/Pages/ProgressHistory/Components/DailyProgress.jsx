import React, {Component} from 'react';

const axios=require('axios');

class DailyProgress extends Component{
    constructor(){
        super();

        this.state={
            days: []
        }
    }

    componentDidMount(){
        axios.post('/loadtask')
        .then(response =>{
            const days =this.state.days;

            response.data.forEach(task =>{
                const date=task.date.toLocaleString().split(",");

                console.log(date);

                days.push(`${date[0]}`);
            });

            this.setState({days});
        });
    }

    render(){
        console.log(this.state.days);

        return(
            <div className='dailyProgress'>
                  <h3>June 17</h3>
                  <p>I did this</p>

                  <h3>June 16</h3>
                  <p>I did that</p>
                  <p>I did that</p>
                  <p>I did that</p>
                  <p>I did that</p>
                  <p>I did that</p>
                  <p>I did that</p>

                  <h3>June 15</h3>
                  <p>I did those</p>
                  <p>I did that</p>
                  <p>I did that</p>
                  <p>I did that</p>
            </div>
        )
    }
}

export default DailyProgress;