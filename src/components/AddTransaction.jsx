import { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState('income'); 

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount * (type === 'expense' ? -1 : 1)
    }

    addTransaction(newTransaction);
    setText('');
    setAmount(0);
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control" style={{ margin: '4px' }}>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Description" />
        </div>
        <div className="form-control" style={{ margin: '4px' }}>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <div className="form-control">
          <label>Transaction Type:</label>
          <label htmlFor="income">
            <input type="radio" name="type" value="income" checked={type === 'income'} onChange={() => setType('income')} />
            Income
          </label>
          <label htmlFor="expense">
            <input type="radio" name="type" value="expense" checked={type === 'expense'} onChange={() => setType('expense')} />
            Expense
          </label>
        </div>
        
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}
