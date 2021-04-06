import './App.css';
import React from 'react';
import ServiceAdd from './components/ServiceAdd/ServiceAdd';
import ServiceList from './components/ServiceList/ServiceList';

function App() {
  return (
    <div className="container">
      <ServiceAdd />
      <ServiceList />
    </div>
  );
}

export default App;
