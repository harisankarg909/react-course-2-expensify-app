import { createStore } from 'redux';

//Action generators

// const add = ({a, b}) => (a+b);
// console.log(add({a:10, b:15}))

const incrementCount = ({incrementBy=1} = {}) => {
    return{
        type: 'INCREMENT',
        incrementBy
    }
}

const decrementCount = ({decrementBy=1}={}) =>{
    return{
        type: 'DECREMENT',
        decrementBy
    }
}
const reset = () => ({type: 'RESET'});
const set = ({count=0}={}) => ({type: 'SET',count});

const store = createStore((state = {count: 0}, action) => {
    console.log(action);


    switch (action.type) {
        case 'INCREMENT':
            //const incrementBy = typeof action.incrementBy ==='number' ? action.incrementBy : 1;
            return {
                count: state.count+action.incrementBy
            };
        case 'DECREMENT':
            //const decrementBy = typeof action.decrementBy ==='number'? action.decrementBy : 1;
            return {
                count:state.count-action.decrementBy
            }
        case 'RESET':
            return {
                count:0
            }
        case 'SET':
            return{
                count: action.count
        }
        
        default:
            return state

    }
    
    console.log('running');
    
});

const something = store.subscribe(()=>{
    console.log(store.getState() );
    console.log('from subscribe');
});


store. dispatch({
    type: 'INCREMENT',
    incrementBy: 4
});

store.dispatch(incrementCount({incrementBy: 5}));

store. dispatch(incrementCount());


console.log('stopping subscription');
//something();


console.log('------------------------');
store. dispatch(decrementCount());
store. dispatch(decrementCount({decrementBy:20}));

console.log('------------------------');
store. dispatch(reset());
something();
store. dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});
store. dispatch({
    type: 'DECREMENT'
});
console.log(store.getState())
store.dispatch(set({count:101}))

console.log(store.getState())