import Card from '../UI/Card';
import './ExpensesCalendar.css';
function ExpensesCalendar(props) {
    const day = props.date.toLocaleString('en-US', { day: 'numeric' });
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const year = props.date.toLocaleString('en-US', { year: 'numeric'});
    return (
        <Card className='expenses__Calendar'>
            <div>
                <p>{month}</p>
                <p>{year}</p>
            </div>
            <p>{day}</p>
        </Card>
    )
}
export default ExpensesCalendar;