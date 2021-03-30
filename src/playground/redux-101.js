import { createStore } from 'redux';


const store = createStore((state = {count: 0}, action) => {
    console.log(action);


    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy ==='number' ? action.incrementBy : 1;
            return {
                count: state.count+incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy ==='number'? action.decrementBy : 1;
            return {
                count:state.count-decrementBy
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

store. dispatch({
    type: 'DECREMENT'
});
console.log('stopping subscription');
something();
store. dispatch({
    type: 'DECREMENT'
});
store. dispatch({
    type: 'RESET'
});
something();
store. dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});
store. dispatch({
    type: 'DECREMENT'
});
console.log(store.getState())
store.dispatch({
    type: 'SET',
    count: 101
})

console.log(store.getState())