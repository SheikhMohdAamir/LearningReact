import React from 'react'
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';


const ExpensesList = (props) => {

    // You can handle the ternary operator use case like this too(watch Advance react - Assignment 12 - video 6)
    // if(props.filterExpense.length===0){
    //     return(<h2 className='expenses-list__fallback'>no expense found!</h2>)
    // }

  return (
    <ul className='expenses-list'>  
    {/* Absuing a little trick using AND OPERATOR (if the condition is true then the right side of "&&" will get executed) */}
    {props.filterExpense.length===1 && <h2 className='expenses-list__fallback'>"Only single Expense here. Please add more..."</h2>} 
    
    {props.filterExpense.length===0 ? <h2 className='expenses-list__fallback'>no expense found!</h2> : 
    props.filterExpense.map((i)=>{return (<ExpenseItem key={i.id} expense={i}/>)})}
    </ul>
  )
}

export default ExpensesList;
