import React, {Component} from 'react';

class WeeklyProgress extends Component{
    render(){
        return(
            <div className='weeklyProgress'>
                  <h3>June 15-21</h3>
                  <p>I did this</p>

                  <h3>June 8-14</h3>
                  <p>I did that</p>
                  <p>I did that</p>
                  <p>I did that</p>
                  <p>I did that</p>
                  <p>I did that</p>
                  <p>I did that</p>

                  <h3>June 1-7</h3>
                  <p>I did those</p>
                  <p>I did that</p>
                  <p>I did that</p>
                  <p>I did that</p>
            </div>
        )
    }
}

export default WeeklyProgress;