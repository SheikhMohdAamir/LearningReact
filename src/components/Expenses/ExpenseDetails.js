import {useState} from "react";
import "./Button.css";

const ExpenseDetails=(props)=>{
    const [amount, setAmount] = useState(props.amount);
    const changeHandler = ()=>{
        setAmount(100);
    }

    const [title, setTitle] = useState(props.title);
    const clickHandler = ()=>{
        setTitle("Updated");
    }

    return(
        <div className="expense-item__description">
            <h2>{title}</h2>
            <h2>{props.location}</h2>
            <div className="expense-item__price">Rs {amount}</div>
            <button className="button2" onClick={changeHandler}>Change</button>
            <button className="button" onClick={clickHandler}>Delete</button>
        </div>
    )
}

export default ExpenseDetails;