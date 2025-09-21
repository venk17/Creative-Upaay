import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Dashboard from './pages/Dashboard';
import './index.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;