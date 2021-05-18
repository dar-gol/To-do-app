import React, { useState } from 'react';

import TaskForm from '../components/TaskForm/TaskForm';
import Popup from '../components/Popup';
import TasksContainer from '../components/TasksContainer';

import '../style/main.scss';
const App = () => {
  const [popup, setPopup] = useState('');

  const togglePopup = (error) => {
    setPopup({ popup: error });
  };

  return (
    <>
      {popup && <Popup togglePopup={togglePopup} error={this.state.popup} />}
      <div className={`container ${popup ? 'container--blur-filter' : ''}`}>
        <TaskForm />
        <TasksContainer />
      </div>
    </>
  );
};

export default App;
