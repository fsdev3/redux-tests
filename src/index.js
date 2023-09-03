import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  cash: 0,
};

// action = { type: '', payload: '' };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'addCash':
      return { ...state, cash: state.cash + action.payload };
    case 'getCash':
      return { ...state, cash: state.cash - action.payload };

    default:
      return state;
  }
};

const store = createStore(reducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
