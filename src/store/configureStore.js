import {createStore, combineReducers} from 'redux';
import expensesReducer from '../reducers/expenses';
import fltrReducer from '../reducers/filters';


export default () => {



const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: fltrReducer
    })
    );
    return store;
};