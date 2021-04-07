import './App.css';
import React from 'react';
import ServiceAdd from './components/ServiceAdd/ServiceAdd';
import ServiceList from './components/ServiceList/ServiceList';
import ServiceFilter from './components/ServiceFilter/ServiceFilter';

function App() {
  return (
    <div className="container">
      <ServiceFilter />
      <ServiceAdd />
      <ServiceList />
    </div>
  );
}

export default App;
