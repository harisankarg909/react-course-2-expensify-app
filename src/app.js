import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpense from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'


const store = configureStore();
console.log(store.getState());

store.dispatch(addExpense({description: 'Water Bill',
note: '', 
amount: 1000, 
createdAt: 0}));

store.dispatch(addExpense({description: 'Gas bill',
note:'', 
amount: 2000, 
createdAt: 0}));

store.dispatch(setTextFilter('gas'));
console.log(store.getState());

setTimeout(()=>{
    store.dispatch(setTextFilter('water'))
}, 3000)




const selected = getVisibleExpense(store.getState().expenses, store.getState().filters)
console.log(selected)

const jsx = (
   <Provider store = {store}>
       <AppRouter />
   </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'))
