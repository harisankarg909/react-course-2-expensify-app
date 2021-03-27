import React from 'react';
import Option from './Option.js'

const Options = (props)=>(
    <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.length ===0 && <p>Pease add an option to get started</p>}
        <p>Options Component here</p>
        <p>{(props.options).length} Options exists !!!!</p>
        {props.options.map((opt)=>{
            //return (<p key={opt}>{opt}</p>);
            return <Option key={opt} optionText={opt} 
                handleDeleteOption = {props.handleDeleteOption}
            /> //key prop here is a reserved keyword
        })}
        <Option />
    </div>
);

export default Options;