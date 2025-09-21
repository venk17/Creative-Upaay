import { createStore } from 'redux';
import rootReducer from './reducers';

const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem('taskDashboardState', JSON.stringify(state));
  } catch (e) {
    console.warn('Could not save state to localStorage', e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem('taskDashboardState');
    return data ? JSON.parse(data) : undefined;
  } catch (e) {
    console.warn('Could not load state from localStorage', e);
    return undefined;
  }
};

const store = createStore(
  rootReducer,
  loadFromLocalStorage()
);

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;