import React, {useState} from 'react';
import NewExpenses from './components/expenses/NewExpenses';
import NewExpense from './components/addExpense/NewExpense';
function App() {
  const expensesItem = [
    {
      id: 1,
      date: new Date(2020, 7, 16),
      title: 'Car Insurance',
      price: 249
    },
    {
      id: 2,
      date: new Date(2020, 3, 8),
      title: 'Wifi contract',
      price: 29.50
    },
    {
      id: 3,
      date: new Date(2022, 11, 25),
      title: 'New clothes',
      price: 22
    }
  ];
  const [expenseData, setExpenseData] = useState(expensesItem);
  const saveData = (expenseDetails) => {
    setExpenseData((prevExpense) => {
      return [expenseDetails, ...prevExpense];
    });
  }
  return (
    <div className="App">
      <NewExpense onSaveData={saveData} />
      <NewExpenses data={expenseData} />
    </div>
  );
}
export default App;
