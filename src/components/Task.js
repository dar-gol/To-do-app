import React from 'react';

const Task = ({ task, modify, index, deleteTask, togglePopup }) => {
  const { during, isChanged, description, priority, title } = task;
  return (
    <div
      className={`to-do-list__task to-do-list__task${
        during ? (isChanged ? '--changing' : '--during') : '--done'
      }`}
      style={{ backgroundColor: priority }}
    >
      <div className="to-do-list__container-btn">
        <button
          className="button to-do-list__button"
          name="ButtonDuring"
          onClick={(e) => modify(index, e)}
        >
          {during ? 'SKOŃCZONE' : 'W TRAKCIE'}
        </button>
        <button
          className="button to-do-list__button"
          name="ButtonChange"
          onClick={() => {
            return togglePopup(index);
          }}
        >
          ZMIEŃ
        </button>
        <button
          className="button to-do-list__button"
          onClick={(e) => deleteTask(index)}
        >
          USUŃ
        </button>
      </div>
      <button
        className={`to-do-list__text to-do-list__text${during ? '' : `--done`}`}
        onClick={() => togglePopup(description)}
      >
        {title}
      </button>
    </div>
  );
};

export default Task;
