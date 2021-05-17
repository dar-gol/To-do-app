import React from 'react';

const Task = (props) => {
  return (
    <div
      className={`to-do-list__task to-do-list__task${
        props.task.during
          ? props.task.isChanged
            ? '--changing'
            : '--during'
          : '--done'
      }`}
      style={{ backgroundColor: props.task.priority }}
    >
      <div className="to-do-list__container-btn">
        <button
          className="button to-do-list__button"
          name="ButtonDuring"
          onClick={(e) => props.modify(props.index, e)}
        >
          {props.task.during ? 'SKOŃCZONE' : 'W TRAKCIE'}
        </button>
        <button
          className="button to-do-list__button"
          name="ButtonChange"
          onClick={(e) => props.modify(props.index, e)}
        >
          ZMIEŃ
        </button>
        <button
          className="button to-do-list__button"
          onClick={() => props.delete(props.index)}
        >
          USUŃ
        </button>
      </div>
      <p className="to-do-list__text">{props.task.title}</p>
    </div>
  );
};

export default Task;
