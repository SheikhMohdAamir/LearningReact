import React, { useState } from 'react'
import ExpenseFilter from './ExpenseFilter'
import Card from '../Ui/Card'
import ExpensesList from './ExpensesList';

const Expenses = (props) => {

    const [oldFilter, setFilter]= useState('2020');
        
    const filterHandler=(selectedYear)=>{
        setFilter(selectedYear);
    }
  
    const filterExpense= props.oldExpenses.filter((i)=>{
        return(
            i.date.getFullYear().toString()===oldFilter
        )
    })
    
  return (
    <div>
        <Card >
        <ExpenseFilter selected={oldFilter} onChangeFilter={filterHandler}/>
        <ExpensesList filterExpense={filterExpense}/>
        </Card>
    </div>
  )
}

export default Expenses;
