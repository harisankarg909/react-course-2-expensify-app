

// Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) =>{
    switch(action.type){
        case 'ADD_EXPENSE':
            console.log('from expensereducer');
                //console.log(state)
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

export default expensesReducer;