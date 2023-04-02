import "./Button.css";

const ExpenseDetails=(props)=>{
    return(
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <h2>{props.location}</h2>
            <div className="expense-item__price">Rs {props.amount}</div>
            <button className="button">Delete</button>
        </div>
    )
}

export default ExpenseDetails;