import React,{ useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(){

    // ENTERED TITILE AND THEN UPDATING TITLE - Add these to input tags, onChange={titleHandler}, onChange={amountHandler}, onChange={locationHandler}, onChange={dateHandler}.
    const [enteredTitle, updatedTitle] = useState();
    const [enteredAmount, updatedAmount] = useState();
    const [enteredLocation, updatedLocation] = useState();
    const [enteredDate, updatedDate] = useState();

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
            date: enteredDate
        }
        console.log(formData);
        
        
        }
        
    return(
        <div className="formdiv">
        <h2 className="formh2">Expense Form</h2>
        <form onSubmit={submitHandler}> 
            <label for="expensetitle">Expense Title</label>
            <input type="text" name="expensetitle" id="expensetitle" className="input" placeholder="Enter the title..." onChange={titleHandler}/>
            <br></br>
            <label for="expenseamount">Expense Amount</label>
            <input type="number" name="expenseamount" id="expenseamount" className="input" placeholder="Enter the amount..."  onChange={amountHandler}/>
            <br></br>
            <label for="expenselocation">Location</label>
            <input type="text" name="expenselocation" id="expenselocation" class="input" placeholder="Enter the location..." onChange={locationHandler}/>
            <br></br>
            <label for="date">Date</label>
            <input type="date" name="date" id="date" className="input" onChange={dateHandler}/>
            <br></br>
            <input type="submit" value="Add Expense" className="submit"/>
        </form>
        </div>

    )
}

export default ExpenseForm;