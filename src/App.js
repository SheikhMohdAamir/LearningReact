import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/Expenses/NewExpense";
import React, { useState }  from "react";

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "Location1"
    },
    { 
      id: 'e2',
      title: 'New TV', 
      amount: 799.49, 
      date: new Date(2021, 2, 12),
      location: "Location2"},
      
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: "Location3"
    },
    {
      id: 'e4',
      title: 'New Desk',
      amount: 450,
      date: new Date(2021, 5, 12),
      location: "Location4"
    },
  ];
const App=()=> {

    const [oldExpenses, newExpenses]= useState(expenses);

    const newExpenseToAppHandler= expense=>{
        newExpenses(prevExpense => {
          return [expense, ...prevExpense]
        })
    }
 
  return (
    <div >
      <NewExpense addNewExpenseToApp={newExpenseToAppHandler}/>
      <div >{oldExpenses.map((i)=>{
          return <ExpenseItem key={i.id} date={i.date} title={i.title} amount={i.amount} location={i.location}/>
      })}</div>
    </div>
  );
}
export default App;