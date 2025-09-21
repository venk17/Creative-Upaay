import { combineReducers } from 'redux';
import tasksReducer from './tasksReducer';
import filtersReducer from './filtersReducer';
import uiReducer from './uiReducer';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
  ui: uiReducer,
});

export default rootReducer;