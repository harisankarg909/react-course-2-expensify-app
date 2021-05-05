import React from 'react';
import ExpenseForm from './ExpenseForm'
import { connect} from 'react-redux'
import {editExpense, removeExpense} from '../actions/expenses'

const EditExpensePage = (props)=> {
    console.log(props)
   


    return (
       <div>
           <ExpenseForm 
                expense = {props.expense}
                onSubmit={(expense)=>{
                    props.dispatch(editExpense(props.expense.id, expense))
                    props.history.push('/')

                }}
           />


<button type='button' onClick = {(e)=>{
                    props.dispatch(removeExpense(props.expense.id))
                    props.history.push('/')
                }}>REMOVE THIS!</button>
        </div>

        
    )
}

const mapStateToProps = (state, props)=>{
    return ({expense: state.expenses.find((expense)=>{
        return expense.id===props.match.params.id
    })})
}

export default connect(mapStateToProps)(EditExpensePage);