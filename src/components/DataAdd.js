import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

// import '../style/components/DataAdd.scss';
import 'react-datepicker/dist/react-datepicker.css';

const taskColor = [
  'white',
  'Bisque',
  'BurlyWood',
  'CadetBlue',
  'LightBlue',
  '#3ab0df',
];

const DataAdd = (props) => {
  const [active, setActive] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [currentTaskColor, setCurrentTaskColor] = useState('white');

  const handleSetCurrentTaskColor = (color) => setCurrentTaskColor(color);

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
        <button
          className="button"
          onClick={(e) => props.addTask(e, currentTaskColor)}
        >
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
          {taskColor.map((color, index) => {
            return (
              <button
                key={index}
                onClick={() => handleSetCurrentTaskColor(color)}
                name="taskColor"
                className={`add-task__bg-button ${
                  currentTaskColor === color
                    ? `add-task__bg-button--active`
                    : ''
                }`}
                style={{ backgroundColor: color }}
              ></button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DataAdd;
