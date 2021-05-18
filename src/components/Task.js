import React from 'react';

const Task = ({ task, modify, index, deleteTask }) => {
  const { during, isChanged, priority, title } = task;
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
          onClick={() =>
            modify(
              {
                date: '2021-12-01',
                during: true,
                title: 'Zrobić zakupy',
                description:
                  'Coś na sniadanko: pomidorek, kiełbasa, cebula, jaja, sałata',
                color: 'white',
              },
              index
            )
          }
        >
          ZMIEŃ
        </button>
        <button
          className="button to-do-list__button"
          onClick={() => deleteTask(index)}
        >
          USUŃ
        </button>
      </div>
      <p
        className={`to-do-list__text to-do-list__text${during ? '' : `--done`}`}
      >
        {title}
      </p>
    </div>
  );
};

export default Task;
