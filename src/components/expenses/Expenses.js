import './Expenses.css';
import ExpensesCalendar from './ExpensesCalendar';
import Card from '../UI/Card';
function Expenses(props) {
    return (
        <li>
            <Card className='expenses__container'>
                <div className='expenses__details'>
                    <ExpensesCalendar date={props.date} />
                    <h2>{props.title}</h2>
                </div>
                <div className='expenses__price'>
                    <p>${props.price}</p>
                </div>
            </Card>
        </li>
    )
}
export default Expenses;