import React, { useState } from 'react';

import TaskForm from '../components/TaskForm/TaskForm';
import Popup from '../components/Popup';
import TasksContainer from '../components/TasksContainer';

import '../style/main.scss';
const App = () => {
  const [popup, setPopup] = useState(false);

  const togglePopup = (error) => {
    setPopup(error);
  };

  return (
    <>
      {popup !== false && (
        <Popup togglePopup={togglePopup} isChangeTask={popup} />
      )}
      <div
        className={`container ${
          popup !== false ? 'container--blur-filter' : ''
        }`}
      >
        <TaskForm togglePopup={togglePopup} />
        <TasksContainer togglePopup={togglePopup} />
      </div>
    </>
  );
};

export default App;
