import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './Layout/Routes';

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
