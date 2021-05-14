import React from 'react';

export default function TodoItem({
  todo,
  buttonShowBackground,
  completed,
  remove,
  crossed,
}) {
  return (
    <li className='todo-item-container' key={todo.id}>
      <button
        onClick={() => completed(todo.id)}
        className={buttonShowBackground}>
        {' '}
        {todo.completed && (
          <img
            src={`${process.env.PUBLIC_URL}/images/icon-check.svg`}
            alt='background day'
          />
        )}
      </button>
      <span className={crossed}>{todo.name}</span>
      <button onClick={() => remove(todo.id)}>
        <img
          src={`${process.env.PUBLIC_URL}/images/icon-cross.svg`}
          alt={'background night'}></img>
      </button>
    </li>
  );
}
