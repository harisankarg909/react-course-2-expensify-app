import {v4 as uuid} from 'uuid';



//Add expense
export const addExpense = ( {
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
export const removeExpense = (id) => {
 return(
     {
         type: 'REMOVE_EXPENSE',
         id
     }
 )
}
//Edit Expense
export const editExpense = (id, obj)=>{
    return(
        {
            type: 'EDIT_EXPENSE',
            id,
            obj
        }
    )
}

