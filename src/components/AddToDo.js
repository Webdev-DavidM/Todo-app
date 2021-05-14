import React, { useRef, useState } from 'react';

export default function AddToDo({ addToDo }) {
  let [buttonClicked, setButtonClicked] = useState(false);

  let name = useRef();

  const toDoButtonClicked = () => {
    setButtonClicked(true);
    addToDo(name.current.value);
    name.current.value = '';
    setButtonClicked(false);
  };

  const buttonShowBackground = buttonClicked
    ? 'circle-check button-pressed'
    : 'circle-check';

  return (
    <div className='add-todo-container'>
      <button onClick={toDoButtonClicked} className={buttonShowBackground}>
        {buttonClicked && (
          <img src={`${process.env.PUBLIC_URL}/images/icon-check.svg`} alt='' />
        )}
      </button>

      <label htmlFor=''></label>
      <input ref={name} type='text' placeholder='Create a new todo....' />
    </div>
  );
}
