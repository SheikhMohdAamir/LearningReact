import "./ExpenseItem.css";

function ExpenseItem(){
    return <div className="expense-item">
        <div>Date</div>
        <div className="expense-item__description">
            <h2>Expense Item</h2>
            <div className="expense-item__price">Rs100</div>
        </div>
    </div>
}

export default ExpenseItem;    