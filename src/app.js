import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter, sortByAmount} from './actions/filters';
import getVisibleExpense from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'


const store = configureStore();
console.log(store.getState());

/* store.dispatch(addExpense({description: 'Water Bill',
note: '', 
amount: 4500}));

store.dispatch(addExpense({description: 'Gas bill',
note:'', 
amount: 1000, 
createdAt: 1000}));

store.dispatch(addExpense({description: 'Rent',
note:'', 
amount: 109500, 
createdAt: 100})); */

/* store.dispatch(setTextFilter('gas'));
console.log(store.getState());

setTimeout(()=>{
    store.dispatch(setTextFilter('bill'))
}, 3000) */

store.dispatch(sortByAmount())


const selected = getVisibleExpense(store.getState().expenses, store.getState().filters)
console.log(selected)
console.log(store.getState())

const jsx = (
   <Provider store = {store}>
       <AppRouter />
   </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'))
