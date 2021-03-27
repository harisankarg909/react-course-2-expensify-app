import React from 'react';
import Option from './Option.js'

const Options = (props)=>(
    <div>
        <div className='widget-header'>
            <h3 className='widget-header__title'>Your Options</h3>
            <button className='button button--link' onClick={props.handleDeleteOptions}>Remove All</button>
        </div>
        
        {props.options.length ===0 && <p className='widget__message'>Please add an option to get started</p>}
        
        {props.options.length !=0 &&<p>{(props.options).length} Options exists !!!!</p>}
        {props.options.map((opt, index)=>{
            //return (<p key={opt}>{opt}</p>);
            return <Option key={opt} optionText={opt} count={index+1}
                handleDeleteOption = {props.handleDeleteOption}
            /> //key prop here is a reserved keyword
        })}
        <Option />
    </div>
);

export default Options;