import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseForm from './ExpenseForm';
import OpenExpense from './OpenExpense';
import './NewExpense.css';
const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const saveExpense = (expnseDetails) => {
        const expenseData = {
            ...expnseDetails,
            id: Math.floor(Math.random() * 20000) + 1
        }
        props.onSaveData(expenseData);
        setIsEditing(false);
    }
    const closeForm = () => {
        setIsEditing(false);
    }
    const openForm = () => {
        setIsEditing(true);
    }
    return (
        <Card className='newEpense__Container'>
            {isEditing && <ExpenseForm onSaveExpense={saveExpense} closeFormHandler={closeForm}/>}
            {!isEditing && <OpenExpense open={openForm} />}
        </Card>
    )
}
export default NewExpense;