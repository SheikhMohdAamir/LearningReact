import React,{ useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(){

    // On Submission of the form the input details will get console logged. And Add this(onSubmit={def}) to form tag to run the code.
    // const def= (event)=>{
    //     event.preventDefault();

    //     // Creating  variables of input values
    //     const title= document.getElementById("expensetitle").value;
    //     const amount= document.getElementById("expenseamount").value;
    //     const date= document.getElementById("date").value;

    //     console.log(`Expense Title - ${title}, Expense Amount - ${amount}, Date - ${date}`);
    //     }

        const [title, updatedTitle] = useState();
        const [amount, updatedAmount] = useState();
        const [date, updatedDate] = useState();
    
        const titleHandler = (event)=>{
            console.log(updatedTitle(event.target.value))
        }

        const amountHandler = (event)=>{
            console.log(updatedAmount(event.target.value))
        }

        const dateHandler = (event)=>{
            console.log(updatedDate(event.target.value))
        }
        
    return(
        <div className="formdiv">
        <h2 className="formh2">Expense Form</h2>
        <form > 
            <label for="expensetitle">Expense Title</label>
            <input type="text" name="expensetitle" id="expensetitle" className="input" placeholder="Enter the title..." onChange={titleHandler}/>
            <br></br>
            <label for="expenseamount">Expense Amount</label>
            <input type="number" name="expenseamount" id="expenseamount" className="input" placeholder="Enter the amount..." onChange={amountHandler}/>
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