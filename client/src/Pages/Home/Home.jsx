import React, {Component} from 'react';
import WeeklyList from './Components/WeeklyList';
import './Home.css';

class Home extends Component{
    render(){
        return(
            <div className='home text-white'>
                <nav className='navbar'>
                    <h2 className='navbar-brand ml-3 mt-2'>Weekly Objectives</h2>

                    <button className='navbar-toggler' data-toggle='collapse' data-target='#options'>
                        <span className='navbar-toggler-icon'></span>
                    </button>

                    <div className='collapse navbar-collapse text-center' id='options'>
                        <ul className='navbar-nav'>
                            <li className='nav-item active'><a className='nav-link' href='#a'>Option 1</a></li>
                            <li className='nav-item'><a className='nav-link' href='#a'>Option 2</a></li>
                            <li className='nav-item'><a className='nav-link' href='#a'>Option 3</a></li>
                        </ul>
                    </div>
                </nav>

                <WeeklyList/>
            </div>
        )
    }
}

export default Home;

