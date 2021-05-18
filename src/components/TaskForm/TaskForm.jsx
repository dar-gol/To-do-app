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

const TaskForm = ({add, modify, togglePopup,  index, tasks}) => {
  const [currentTaskColor, setCurrentTaskColor] = useState('white');

  const handleSetCurrentTaskColor = (color) => setCurrentTaskColor(color);

  const isChangeTask = typeof index === 'number'

  const startValues = {
    title: isChangeTask ? tasks[index].title : '',
    date: isChangeTask ? tasks[index].date : new Date(),
    description: isChangeTask ? tasks[index].description : '',
    color: 'white'
  }

  return (
    <header className="add-task">
      <h2 className="add-task__title">{isChangeTask ? 'Zmień zadanie' : 'lista zadań'}</h2>
      <Formik
        initialValues={startValues}
        onSubmit={(values, {resetForm}) => {
          const { title, date, description } = values;
          resetForm({});
          if (isChangeTask) {
            modify({ title, date, color: currentTaskColor, during: true, description }, index)
            togglePopup(false);
          } else {
            add({ title, date, color: currentTaskColor, during: true, description })
          }
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
                label="Data wykonania:"
                id="date"
                className="text-input"
              />
              </div>
              <div className="add-task__form-row">
              <label className="label">Kolor trwającego zadania: </label>
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
  modify: (task, modifyId) => dispatch(actions.modifyTask(task, modifyId)),
})

const mapStateToProps = state => ({
  tasks: state.tasks.list,
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
