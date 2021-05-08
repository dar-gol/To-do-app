import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

// import '../style/components/DataAdd.scss';
import 'react-datepicker/dist/react-datepicker.css';

const DataAdd = (props) => {
  const [active, setActive] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <div className="add-task__form">
        <input
          name="newTaskInput"
          className="text-input"
          id="new"
          onKeyDown={props.addTask}
          type="text"
          placeholder={props.change ? 'Zmień zadanie' : 'Nowe zadanie'}
          onChange={props.addTask}
          value={props.value}
        />
        <button className="button" onClick={props.addTask}>
          {props.change ? 'Zmień' : 'Dodaj'}
        </button>
        <button
          className="button"
          onClick={() => (active === '' ? setActive('active') : setActive(''))}
        >
          opcje
        </button>
      </div>
      <div className={`add-task__extends add-task__extends--${active}`}>
        <div>
          <DatePicker
            className="text-input"
            selected={startDate}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div>
          <label htmlFor="checkbox">
            <input
              type="checkbox"
              className="add-task__checkbox"
              onChange={props.addTask}
              checked={props.priority}
            />
            Wyższy priorytet
          </label>
        </div>
      </div>
    </>
  );
};

export default DataAdd;
