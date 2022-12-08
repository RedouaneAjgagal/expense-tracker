import React, { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) => {
    const minDate = '2019-01-01';
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    let currentDay = new Date().getDate();
    currentDay.length < 2 ? currentDay = `0 ${new Date().getDate()}` : currentDay = new Date().getDate();
    const maxDate = `${currentYear}-${currentMonth + 1}-0${currentDay}`;
    const [onTitle, setOnTitle] = useState('');
    const [onPrice, setOnPrice] = useState('');
    const [onDate, setOnDate] = useState('');
    const onChangeTitle = (e) => {
        setOnTitle(e.target.value);
    }
    const onChnagePrice = (e) => {
        setOnPrice(e.target.value);
    }
    const onChangeDate = (e) => {
        setOnDate(e.target.value);
    }
    const sumbitExpenses = (e) => {
        e.preventDefault();
        if (onTitle.trim() === '' || onPrice === '' || onDate === '') {
            return;
        }
        const expenseDetails = {
            title: onTitle,
            price: Number(onPrice),
            date: new Date(onDate)
        }
        props.onSaveExpense(expenseDetails);
        setOnTitle('');
        setOnPrice('');
        setOnDate('');
    }
    const closeForm = () => {
        props.closeFormHandler();
    }
    return (
        <form onSubmit={sumbitExpenses}>
            <div className='expenseForm__Container'>
                <div className='expenseForm__Control'>
                    <label htmlFor='title'>Title</label>
                    <input type='text' id='title' onChange={onChangeTitle} value={onTitle} />
                </div>
                <div className='expenseForm__Control'>
                    <label htmlFor='price'>Price</label>
                    <input type='number' id='price' onChange={onChnagePrice} value={onPrice} min={0.1} step={0.1} />
                </div>
                <div className='expenseForm__Control'>
                    <label htmlFor='date'>Date</label>
                    <input type='date' id='date' max={maxDate} min={minDate} onChange={onChangeDate} value={onDate} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={closeForm}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}
export default ExpenseForm;