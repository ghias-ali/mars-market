import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'antd/dist/antd.css';
import UserDashboard from './container/userDashboard/UserDashboard';

ReactDOM.render(
  <React.StrictMode>
  
    <UserDashboard />
  </React.StrictMode>,
  document.getElementById('root')
);
