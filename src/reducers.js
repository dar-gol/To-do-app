import { combineReducers } from 'redux';

import tasksReducer from './reducers/tasks';

const rootReducers = combineReducers({
  tasks: tasksReducer,
});

export default rootReducers;
