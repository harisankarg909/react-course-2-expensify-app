import React from 'react';
import {connect} from 'react-redux';
//import getVisibleExpense from '../selectors/expenses';
import ExpenseListItem from './ExpenseListItem';
import VisibleExpense from '../selectors/expenses';



//const selected = getVisibleExpense(store.getState().expenses, store.getState().filters)

const ExpenseList = (props)=>(
    <div>
        <h1>Expense List</h1> 
        {VisibleExpense(props.expenses, props.filters).map((expense)=>{
            return <ExpenseListItem key={expense.id} {...expense}/>
        })}
    </div>
);

const mapStateToProps = (state) =>{
    return{
        expenses: state.expenses,
        filters: state.filters
    }
};

export default connect(mapStateToProps)(ExpenseList)

//export default ConnectedExpenseList;