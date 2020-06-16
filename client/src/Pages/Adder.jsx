import React from 'react';

function Adder(props){
    return(
        <form className='adder container'>
            <label>{props.msg}</label>
            <input type='text' minLength='1' maxLength='64'/>
            <label className='addBtn btn-danger'>+</label>
        </form>
    )
}

export default Adder;