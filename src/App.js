import React from 'react'
import { Switch, Route } from 'react-router-dom';
import routes from './config/routes';
import Header from './components/Header'
import Footer from './components/Footer';


function App() {
  return (
   <div>
    <Header />
    <div>
      { routes }
    </div>
    <Footer />
  </div>
  );

}

export default App;
