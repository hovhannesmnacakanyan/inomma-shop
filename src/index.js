import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from 'store/store';

import DateAdapter from '@mui/lab/AdapterDateFns';
import { LocalizationProvider } from '@mui/lab';

import App from './App';

import './index.css';

ReactDOM.render(
  <StrictMode>
    <LocalizationProvider dateAdapter={DateAdapter}>
      <Provider store={store}>
        <App />
      </Provider>
    </LocalizationProvider>
  </StrictMode>,
  document.getElementById('root'),
);
