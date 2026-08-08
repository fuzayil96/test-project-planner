import React, { useState } from 'react';

// const allTodos = [
//   {
//     id: 1,
//     title: "3 soat code yozish",
//     isCompleted: false,
//   },
//   {
//     id: 2,
//     title: "1 soat kitob oqish",
//     isCompleted: false,
//   },
//   {
//     id: 3,
//     title: "1.5 soat sport bilan shug'ullanish",
//     isCompleted: false,
//   },
// ]

let idCounter = 1;

const App = () => {
  const [inputValue, setInputValue] = useState('')
  const [todoItems, setTodoItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: idCounter++,
      title: inputValue,
      isCompleted: false
    }

    if(inputValue !== ""){
       setTodoItems([...todoItems, newTodo])
    }

    setInputValue('');
  }

  return (
    <div className='app-wrapper'>
      <div className='todo-container'>

        <div className='todo-header'>
          <div className='header-badge'>Vazifalar ro'yxati</div>
          <h1>Kuningizni Rejalashtiring</h1>
          <p className='header-sub'>Bugungi vazifalaringizni belgilang va kuzating</p>
          {todoItems.length > 0 && (
            <div className='stats-bar'>
              <span className='stat-chip'>{todoItems.length} ta vazifa</span>
            </div>
          )}
        </div>

        <form className='todo-form' onSubmit={handleSubmit}>
          <div className='input-wrapper'>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value)
              }}
              placeholder="Yangi vazifa qo'shing..." />
          </div>
          <button type="submit" className='add-btn'>Qo'shish</button>
        </form>

        <div className="todo-list">
          {
            todoItems.length > 0 ? (todoItems.map((value, index, array) => {
              return (
                <div className='todo-item' key={value.id}>
                  <div className='item-left'>
                    <span className='item-number'>{index + 1}</span>
                    <span className='item-title'>{value.title}</span>
                  </div>
                  <div className='item-actions'>
                    <button className='btn-done'>✓</button>
                    <button className='btn-delete'>✕</button>
                    <button className='btn-edit'>✎</button>
                  </div>
                </div>
              );
            })) : (
              <div className='empty-state'>
                <div className='empty-icon'>📋</div>
                <h2>Hech qanday plan yo'q</h2>
                <p>Yuqoridagi formadan yangi vazifa qo'shing</p>
              </div>
            )
          }
        </div>

      </div>
    </div>
  )
}

export default App;


// if(shart){

// }else{

// }

// syntax sugar for if else
// ternary
// shart ? 'agar true bolsa amaliyot' : 'agar false bolsa amaliyot'