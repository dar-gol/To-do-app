import React, { useState } from 'react';
import '../style/Component/DataAdd.css';

const DataAdd = (props) => {
  const [active, setActive] = useState('deactive');
  return (
    <>
      <div className="inputData">
        <input
          // autoFocus={props.change ? "on" : "off"}
          name="newTaskInput"
          className="addData"
          id="new"
          onKeyDown={props.addTask}
          type="text"
          placeholder={props.change ? 'Zmień zadanie' : 'Nowe zadanie'}
          onChange={props.addTask}
          value={props.value}
        />
        <button className="addButton" onClick={props.addTask}>
          {props.change ? 'Zmień' : 'Dodaj'}
        </button>
        <button
          className="addButton"
          onClick={() =>
            active === 'deactive' ? setActive('active') : setActive('deactive')
          }
        >
          opcje
        </button>
      </div>
      <div className={`${active}`}>
        <input
          className="addData"
          placeholder="Do (RRRR-MM-DD)"
          name="time"
          value={props.date}
          onChange={props.addTask}
        />
        <label htmlFor="checkbox">
          <input
            type="checkbox"
            id="priority"
            onChange={props.addTask}
            checked={props.priority}
          />
          Wyższy priorytet
        </label>
      </div>
    </>
  );
};

export default DataAdd;
