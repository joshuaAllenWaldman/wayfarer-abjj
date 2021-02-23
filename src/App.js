import React from 'react'
import routes from './config/routes';
import Header from './components/Header'


function App() {
  return (
   <div>
    <Header />
    <div>
      { routes }
    </div>
  </div>
  );

}

export default App;
