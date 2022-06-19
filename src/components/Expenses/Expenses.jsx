import { useState } from 'react';
import NewExpense from '../New Expense/NewExpense';
import Card from '../UI/Card';
import ExpensesList from './ExpenseList';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12), },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];

function Expenses(_props) {

    const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = (selectedYear) => {
        // console.log(selectedYear);
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    const addNewExpense = (expense) => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        })
    }

    return (
        <li>
            <Card>
                <NewExpense onAddExpense={addNewExpense} />
                <Card className='expenses'>
                    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                    <ExpensesList items={filteredExpenses} />
                </Card>
            </Card>
        </li>
    )
}

export default Expenses;