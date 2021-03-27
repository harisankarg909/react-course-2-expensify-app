import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp.js';
import './styles/styles.scss'



console.log("starting. .....");
const template = (
    <div>
        <h1>Page Title</h1>
        <p>This is my page</p>
    </div>
);
ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
