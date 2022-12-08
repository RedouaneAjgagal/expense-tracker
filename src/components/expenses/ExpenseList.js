import './ExpenseList.css';
import Expenses from './Expenses';
const ExpenseList = (props) => {
    if (props.item.length === 0) {
        return <h2 className='lists__container__fallback'>Found No Expenses.</h2>
    }
    return (
        <ul className='lists__container'>
            {props.item.map((item) => {
                return <Expenses date={item.date} title={item.title} price={(item.price).toFixed(2)} key={item.id} />
            })}
        </ul>
    );
}
export default ExpenseList;