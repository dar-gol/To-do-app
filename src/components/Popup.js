import React from 'react';

import TaskForm from './TaskForm/TaskForm';

const Popup = ({ togglePopup, isChangeTask }) => {
  return (
    <div className="popup">
      <button className="popup__exit" onClick={() => togglePopup(false)}>
        <i className="fas fa-times popup__exit-icon"></i>
      </button>
      {typeof isChangeTask === 'number' ? (
        <TaskForm index={isChangeTask} togglePopup={togglePopup} />
      ) : (
        <h2>{isChangeTask}</h2>
      )}
    </div>
  );
};
export default Popup;
