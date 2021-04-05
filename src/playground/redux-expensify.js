import {createStore, combineReducers} from 'redux';
import {v4 as uuid} from 'uuid';
//Add expense
const addExpense = ( {
    description = '',
     note='', 
     amount = 0, 
     createdAt = 0} = {})  => {
            return (
            {
                type: 'ADD_EXPENSE',
                expense: {
                    id: uuid(),
                    description, 
                    note,
                    amount,
                    createdAt
                    }
            }
           )
        };

//Remove Expense
const removeExpense = (id) => {
 return(
     {
         type: 'REMOVE_EXPENSE',
         id
     }
 )
}
//Edit Expense
const editExpense = (id, obj)=>{
    return(
        {
            type: 'EDIT_EXPENSE',
            id,
            obj
        }
    )
}
//Set text filter
const setTextFilter = (text='') =>{
    return {
        type: 'TEXT_FILTER',
        text
    }
}
//sort by date
const sortByDate = () =>{
    return {
        type: 'SORT_BY_DATE',

    }
}
//sort by amount
const sortByAmount = () =>{
    return {
        type: 'SORT_BY_AMOUNT',

    }
}
//set start date
const setStartDate = (date = undefined) =>{
    return {
        type: 'SET_START_DATE',
        date
    }
}
//set end date
const setEndDate = (date = undefined) =>{
    return {
        type: 'SET_END_DATE',
        date
    }
}
// Expenses Reducer
const expensesReducerDefaultState = [];
const filtersReducerDefaultState = {text: '', sortBy: 'date', startDate:undefined, endDate: undefined};

const expensesReducer = (state = expensesReducerDefaultState, action) =>{
    switch(action.type){
        case 'ADD_EXPENSE':
            console.log('from expensereducer');
                console.log(state)
            return [
                
                ...state, action.expense
            ];
        case 'REMOVE_EXPENSE':
           
            return state.filter((expense)=>expense.id!==action.id);

            case 'EDIT_EXPENSE':
           
            return state.map((expense)=>{
                if(expense.id === action.id){
                    return {...expense, ...action.obj}
                }else{
                    expense
                }
            })
            
        default:
            return state;
        


    }
}
const filtersReducer = (state = filtersReducerDefaultState, action) =>{
    switch(action.type){
        case 'TEXT_FILTER':
            return {...state, text: action.text}
        case 'SORT_BY_AMOUNT':
            return {...state, sortBy: 'amount'}
        case 'SORT_BY_DATE':
            return {...state, sortBy: 'date'}
        case 'SET_START_DATE':
            return {...state, startDate: action.date}
        case 'SET_END_DATE':
            return {...state, endDate: action.date}
        default:
            return state

    }
}

//Get Visible expense
const getVisibleExpense = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >=startDate
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <=endDate
        const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b)=>{
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1
        }
        else if(sortBy === 'amount'){
            return a.amount<b.amount?1:-1 
        }
    });
}


const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
    );

    store.subscribe(() => {
        const state = store.getState();
        const visibleExpenses = getVisibleExpense(state.expenses, state.filters);
        console.log('-------------from subscribe')
        console.log(visibleExpenses) ;
        console.log('-----------------')
    });


    
store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: 1000 }));

store.dispatch(addExpense({description: 'coffee', amount: 300, createdAt: -1000 }));


store.dispatch(setTextFilter('rent'));


//store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
store.dispatch(sortByDate());
console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
store.dispatch(setStartDate(-1125));
//store.dispatch(setStartDate());
store.dispatch(setEndDate(250));
store.dispatch(setEndDate());

const demoState = {
    expenses: [{
        id: 'dswf',
        description: 'January Rent',
        note: 'This was the final payment',
        amount: 54500,
        createAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};


const user = {
    name: 'Jen',
    age: 24
};

console.log({
    age: 10, ...user, location: 'kochi', age: 36
})