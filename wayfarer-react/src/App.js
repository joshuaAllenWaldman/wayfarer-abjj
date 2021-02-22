import React from 'react'
import { Switch, Route } from 'react-router-dom';
import routes from './config/routes';
import Header from './components/Header'


function App() {
  return (
   <div className="container">
    <Header />
    <div>
      { routes }
    </div>
   </div>
  );

}

export default App;
