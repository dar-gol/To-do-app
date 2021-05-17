import types from '../types/tasks.js';

const { ADD_TASK, DELETE_TASK, MODIFY_TASK, RESET_TASKS } = types;

const addTask = (task) => ({ type: ADD_TASK, payload: { task } });
const modifyTask = (task, modifyId) => ({
  type: MODIFY_TASK,
  payload: { modifyId, task },
});
const deleteTask = (deleteId) => ({
  type: DELETE_TASK,
  payload: { deleteId },
});
const resetTasks = () => ({ type: RESET_TASKS });

export default { addTask, modifyTask, deleteTask, resetTasks };
