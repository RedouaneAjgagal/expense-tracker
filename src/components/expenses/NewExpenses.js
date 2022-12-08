import React, { useState } from 'react';
import ExpensesFilter from "../../ExpensesFilter/ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from './ExpenseChart';
import Card from '../UI/Card';
import './NewExpenses.css';
function NewExpenses(props) {
    const [filteredYear, setFilterdYear] = useState('2020');
    const selectYear = (yearSelected) => {
        setFilterdYear(yearSelected);
    }
    const filteredItems = props.data.filter(item => item.date.getFullYear().toString() === filteredYear);

    return (
        <Card className="expenses">
            <ExpensesFilter getSelectedYear={selectYear} selected={filteredYear} />
            <ExpenseChart expenses={filteredItems} />
            <ExpenseList item={filteredItems} />
        </Card>
    );
}
export default NewExpenses;