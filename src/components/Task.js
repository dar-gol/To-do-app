import React from 'react';

const Task = (props) => {
  const { date } = props.task;
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
      {props.task.isChanged ? (
        <p className="to-do-list__text">...</p>
      ) : (
        <p className="to-do-list__text">
          {' '}
          {typeof date === 'boolean'
            ? props.task.name
            : `${props.task.name} (do dnia ${
                date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
              }.${
                date.getMonth() + 1 < 10
                  ? '0' + (date.getMonth() + 1)
                  : date.getMonth() + 1
              }.${date.getFullYear()} roku)`}
        </p>
      )}
    </div>
  );
};

export default Task;
