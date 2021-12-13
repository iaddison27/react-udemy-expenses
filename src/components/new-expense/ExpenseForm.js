import React, { useState } from "react";
import "./ExpenseForm.css";

// This is a "controlled component" as it has 2 way binding (value and changes to values handled into parent rather than component itself)
function ExpenseForm(props) {

    // could also have individual states e.g:
        // const [title, setTitle] = useState('');
        // const [amount, setAmount] = useState('');
        // const [date, setDate] = useState('');
    const [formState, setFormState] = useState({
        title: '',
        amount: '',
        date: '',
    });

    const titleChangeHandler = (e) => {
        setFormState((prevState) => {
            return { ...prevState, title: e.target.value };
        });
    };
    const amountChangeHandler = (e) => {
        setFormState((prevState) => {
            return { ...prevState, amount: e.target.value };
        });
    };
    const dateChangeHandler = (e) => {
        // Do it like this as React schedules state updates rather than doing immediately. If you use the following approach:
            // setFormState({
            //     ...formState,
            //     date: e.target.value,
            // });
        // you may end up with outdated state in the formState variable
        // You can use the above form if your state update doesn't depend on the previous state
        setFormState((prevState) => {
            return { ...prevState, date: e.target.value };
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const data = {
            title: formState.title,
            amount: +formState.amount,
            date: new Date(formState.date),
        }
        props.onSaveExpense(data);
        setFormState({
            title: '',
            amount: '',
            date: '',
        });
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={formState.title} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={formState.amount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={formState.date} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
