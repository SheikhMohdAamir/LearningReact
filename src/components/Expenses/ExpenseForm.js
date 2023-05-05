import React,{ useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props){

    // ENTERED TITILE AND THEN UPDATING TITLE - Add these to input tags, onChange={titleHandler}, onChange={amountHandler}, onChange={locationHandler}, onChange={dateHandler}..
    const [enteredTitle, updatedTitle] = useState("");
    const [enteredAmount, updatedAmount] = useState("");
    const [enteredLocation, updatedLocation] = useState("");
    const [enteredDate, updatedDate] = useState("");

    const titleHandler = (event)=>{
        updatedTitle(event.target.value)
    }

    const amountHandler = (event)=>{
        updatedAmount(event.target.value)
    }

    const locationHandler = (event)=>{
        updatedLocation(event.target.value)
    }
    const dateHandler = (event)=>{
        updatedDate(event.target.value)
    }
        
    // On Submission of the form the input details will get console logged. And Add this(onSubmit={submitHandler}) to form tag to run the code.
    const submitHandler= (event)=>{
        event.preventDefault();

        const formData = {
            title: enteredTitle,
            amount: enteredAmount,
            location: enteredLocation,
            date: new Date(enteredDate)
        }
        
        props.onSubmitNewExpense(formData);
        updatedAmount("");
        updatedDate("");
        updatedLocation("");
        updatedTitle("");
        
        }

    return(

        <form onSubmit={submitHandler}> 
        <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label for="expensetitle" >Expense Title</label>
            <input type="text" name="expensetitle" id="expensetitle" className="input" placeholder="Enter the title..." value={enteredTitle} onChange={titleHandler} autoComplete="off"/>
        </div>
        <div className='new-expense__control'>
            <label for="expenseamount">Expense Amount</label>
            <input type="number" name="expenseamount" id="expenseamount" className="input" placeholder="Enter the amount..." value={enteredAmount} onChange={amountHandler} autoComplete="off"/>
        </div>
        <div className='new-expense__control'>
            <label for="expenselocation">Location</label>
            <input type="text" name="expenselocation" id="expenselocation" class="input" placeholder="Enter the location..." value={enteredLocation} onChange={locationHandler} autoComplete="off"/>
        </div>
        <div className='new-expense__control'>
            <label for="date">Date</label>
            <input type="date" name="date" id="date" className="input" value={enteredDate} onChange={dateHandler} autoComplete="off"/>
        </div>
        </div>
        <div className="new-expense__actions">
            <input type="submit" value="Add Expense" className="button3"/>
        </div>
        </form>


    )
}

export default ExpenseForm;