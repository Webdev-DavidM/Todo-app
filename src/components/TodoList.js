import React, { useState, useEffect } from 'react';
import '../App.scss';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ToDoItem from './ToDoItem';

export default function TodoList({
  todos,
  markCompleted,
  removeToDo,
  clearComplete,
}) {
  const [toDoToDisplay, setDoTodisplay] = useState([]);
  const [button, setButton] = useState('all');

  useEffect(() => {
    setDoTodisplay(todos);
  }, [todos]);

  const filter = (filter) => {
    if (filter === 'all') {
      setDoTodisplay((prevTodo) => [...todos]);
      setButton('all');
    }
    if (filter === 'active') {
      setDoTodisplay((prevTodos) => [
        ...todos.filter((todo) => todo.completed === false),
      ]);
      setButton('active');
    }
    if (filter === 'completed') {
      setDoTodisplay((prevTodos) => [
        ...todos.filter((todo) => todo.completed === true),
      ]);
      setButton('completed');
    }
  };

  return (
    <TransitionGroup className='todo-container'>
      {toDoToDisplay.map((todo) => {
        const buttonShowBackground = todo.completed
          ? 'circle-check button-pressed'
          : 'circle-check';
        const crossedOff = todo.completed ? 'crossed-off' : '';

        return (
          <CSSTransition key={todo.id} timeout={300} classNames='item'>
            <ToDoItem
              todo={todo}
              buttonShowBackground={buttonShowBackground}
              completed={markCompleted}
              remove={removeToDo}
              crossed={crossedOff}
            />
          </CSSTransition>
        );
      })}

      <div className='controls-flex-container'>
        <span>{todos.length} items left</span>
        <button onClick={() => clearComplete()}>Clear Completed</button>
        <div className='section-container'>
          <button
            style={button === 'all' ? { color: 'hsl(220, 98%, 61%)' } : null}
            onClick={() => filter('all')}>
            All
          </button>
          <button
            style={button === 'active' ? { color: 'hsl(220, 98%, 61%)' } : null}
            onClick={() => filter('active')}>
            Active
          </button>
          <button
            style={
              button === 'completed' ? { color: 'hsl(220, 98%, 61%)' } : null
            }
            onClick={() => filter('completed')}>
            Completed
          </button>
        </div>
      </div>
    </TransitionGroup>
  );
}
