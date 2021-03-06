import React from 'react';
import { addExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';




const AddExpensePage = (props)=>(
    <div>
        <h1>Add Expense ! </h1>
            <ExpenseForm 
            onSubmit = {(expense)=>{
                console.log(expense)
                props.dispatch(addExpense(expense))
                props.history.push('/')
            
            }}/>
            </div>
)

export default connect()(AddExpensePage);
