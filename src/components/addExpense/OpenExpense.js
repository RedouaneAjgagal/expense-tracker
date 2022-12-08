import './OpenExpense.css';
const OpenExpense = (props) => {
    const openExpenseHandler = (e) => {
        props.open()
    }
    return (
        <button className='openExpense' onClick={openExpenseHandler}>Add New Expense</button>
    )
}
export default OpenExpense;