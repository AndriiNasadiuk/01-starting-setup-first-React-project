import React, { useState } from "react";

import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2023');

    const filterChangeHandler = pickedYear => {
        setFilteredYear(pickedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onFilterChange={filterChangeHandler}
                />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    )
}

export default Expenses;