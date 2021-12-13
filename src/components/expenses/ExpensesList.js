import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
    const filteredExpenses = props.items;

    if (filteredExpenses.length === 0) {
        return <h2 className="expenses-list__fallback">No expenses found</h2>;
    }
    return (
        <ul className="expenses-list">
            <li>
                {filteredExpenses.map((expense) => (
                    <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
                ))}
            </li>
        </ul>
    );
}

export default ExpensesList;
