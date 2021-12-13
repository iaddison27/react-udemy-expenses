import React, { useState } from "react";
import "./Expenses.css";
import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
    const [year, setYear] = useState('2020');

    const yearChangeHandler = (year) => {
        setYear(year);
    };

    const filteredExpenses = props.items.filter((expense) => expense.date.getFullYear() === Number(year));

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selectedYear={year} onChangeYear={yearChangeHandler} />
                <ExpensesChart filteredExpenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;
