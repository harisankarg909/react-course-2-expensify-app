import {createStore, combineReducers} from 'redux';
import expensesReducer from '../reducers/expenses';
import fltrReducer from '../reducers/filters';


export default () => {



const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: fltrReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};