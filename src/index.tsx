import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './redux/store';

import App from './components/App';
import './styles/global.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <BrowserRouter basename='/movieOn'>
      <App />
    </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>
);
