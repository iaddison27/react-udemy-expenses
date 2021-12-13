import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
    const [isEditing, setIsEditing] = useState(false);

    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }

    const saveExpenseHandler = (expenseData) => {
        const formData = {
            ...expenseData,
            id: Math.random().toString(),
        }
        stopEditingHandler();
        props.onAddExpense(formData);
    };

    let formContent = <ExpenseForm onSaveExpense={saveExpenseHandler} onCancel={stopEditingHandler}/>;
    if (!isEditing) {
        formContent = <button onClick={startEditingHandler}>Add New Expense</button>;
    }

    return (
        <div className="new-expense">
            {formContent}
        </div>
    );
}

export default NewExpense;
