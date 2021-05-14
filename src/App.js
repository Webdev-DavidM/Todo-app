import './App.scss';
import AddToDo from './components/AddToDo';
import React, { useState } from 'react';
import TodoList from './components/TodoList';
import { v4 as uuid } from 'uuid';

function App() {
  const [todos, setTodos] = useState([]);
  const [displayNight, setDisplay] = useState(false);
  // const [todosToDisplay, setTodosToDisplay] = useState([]);

  const changeImage = () => {
    setDisplay((oldDisplay) => !oldDisplay);
  };

  const markAsCompleted = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
          return todo;
        } else {
          return todo;
        }
      })
    );
  };

  const addTodoItem = (name) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: uuid(),
        name: name,
        completed: false,
      },
    ]);
  };

  const clearCompleted = () => {
    let newArrayWithCompletedItems = todos.filter(
      (todo) => todo.completed === false
    );
    setTodos(newArrayWithCompletedItems);
  };

  const removeTodoItem = (id) => {
    setTodos((items) => items.filter((item) => item.id !== id));
  };

  //This section will change the classes based on whether the theme is light or dark
  const backgroundColor = displayNight
    ? 'App App-dark-theme-background'
    : 'App';

  return (
    <div className={backgroundColor}>
      <div className='image-container'>
        {!displayNight ? (
          <picture>
            {' '}
            <source
              srcSet={`${process.env.PUBLIC_URL}/images/bg-mobile-light.jpg`}
              media={'(max-width: 768px)'}></source>
            <img
              src={`${process.env.PUBLIC_URL}/images/bg-desktop-light.jpg`}
              alt=''
            />
          </picture>
        ) : (
          <picture>
            {' '}
            <source
              srcset={`${process.env.PUBLIC_URL}/images/bg-mobile-dark.jpg`}
              media={'(max-width: 768px)'}></source>
            <img
              src={`${process.env.PUBLIC_URL}/images/bg-desktop-dark.jpg`}
              alt=''
            />
          </picture>
        )}
      </div>

      <div className='main-todo-container'>
        <div className='todo-title-and-btn'>
          <h1>TODO</h1>
          <button onClick={changeImage}>
            <svg xmlns='http://www.w3.org/2000/svg' width='26' height='26'>
              <path
                fill='#FFF'
                fillRule='evenodd'
                d='M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z'
              />
            </svg>
          </button>
        </div>
        <AddToDo addToDo={addTodoItem} />
        <TodoList
          clearComplete={clearCompleted}
          markCompleted={markAsCompleted}
          todos={todos}
          removeToDo={removeTodoItem}
        />
      </div>
    </div>
  );
}

export default App;
