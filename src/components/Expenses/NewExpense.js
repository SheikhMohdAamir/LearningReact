import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

//New Expense Component
const NewExpense= (props)=>{

    const newExpenseHandler=(newExpenseData)=>{
        const newExpense= {
            ...newExpenseData,
            id: Math.random().toString()
        }
        props.addNewExpenseToApp(newExpense);
    }

    return(
        <div className="new-expense">
        <ExpenseForm onSubmitNewExpense={newExpenseHandler}/>
        </div>
    )
}

export default NewExpense;