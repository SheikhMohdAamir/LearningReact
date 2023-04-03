import "./ExpenseForm.css";

function ExpenseForm(){

    const def= (event)=>{
        event.preventDefault();

        // Creating  variables of input values
        const title= document.getElementById("expensetitle").value;
        const amount= document.getElementById("expenseamount").value;
        const date= document.getElementById("date").value;

        console.log(`Expense Title - ${title}, Expense Amount - ${amount}, Date - ${date}`);
        }



    return(
        <div className="formdiv">
        <h2 className="formh2">Expense Form</h2>
        <form onSubmit={def}>
            <label for="expensetitle">Expense Title</label>
            <input type="text" name="expensetitle" id="expensetitle" className="input" placeholder="Enter the title..."></input>
            <br></br>
            <label for="expenseamount">Expense Amount</label>
            <input type="number" name="expenseamount" id="expenseamount" className="input" placeholder="Enter the amount..."></input>
            <br></br>
            <label for="date">Date</label>
            <input type="date" name="date" id="date" className="input"></input>
            <br></br>
            <input type="submit" value="Submit" className="submit"></input>
        </form>
        </div>

    )
}

export default ExpenseForm;