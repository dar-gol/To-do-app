import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';

import actions from '../../actions/tasks';

import DatePickerField from './DatePickerField';
import Input from './Input';
import Textarea from './Textarea';

const taskColor = [
  'white',
  'Bisque',
  'BurlyWood',
  'CadetBlue',
  'LightBlue',
  '#3ab0df',
];

const TaskForm = ({add}) => {
  const [currentTaskColor, setCurrentTaskColor] = useState('white');

  const handleSetCurrentTaskColor = (color) => setCurrentTaskColor(color);

  return (
    <header className="add-task">
      <h2 className="add-task__title">Lista zadań </h2>
      <Formik
        initialValues={{ title: '', date: new Date(), description: ''}}
        onSubmit={(values, {resetForm}) => {
          const { title, date, description } = values;
          add({ title, date, color: currentTaskColor, during: true, description })
          resetForm({});
        }}>
          {
        ({
          handleSubmit,
        }) => (
          <form className="add-task__form" onSubmit={handleSubmit}>
            <div className="add-task__form-row">
              <Input className="text-input add-task__task-input" name="title" placeholder={'Nowe zadanie'}/>
              <button className="button" type="submit">
                  <i className="fas fa-plus"></i>
              </button>
            </div>
            <div className="add-task__form-row">
              <Textarea name='description' className='add-task__task-input add-task__task-textarea' placeholder="Opisz zadanie"/>
            </div>
            <div className="add-task__form-row">
              <DatePickerField
                name="date"
              />
              {taskColor.map((color, index) => {
                return (
                  <button
                    type="button"
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
          </form>
        )
      }
      </Formik>
    </header>
  );
};

const mapDispatchToProps = (dispatch) => ({
  add: task => dispatch(actions.addTask(task)),
})

export default connect(null, mapDispatchToProps)(TaskForm);
