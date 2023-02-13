import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './css/index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed  to fidn the root element');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
