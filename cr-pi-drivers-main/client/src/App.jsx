import React from 'react';
import {  Routes, Route, useLocation } from 'react-router-dom'; // Importa BrowserRouter
//importo las views
import Landing from './views/LandingPage';
import Home from './views/HomePage';
import Detail from './views/DetailPage';
import Form from './views/FormPage';
//{location.pathname !== '/' && (<NavBar />)}{/*gracias a esto puedo mostrar o no el NavBar en el pathname*/}
    
function App() {
  const location = useLocation()
  return (
     <div>
    
        <Routes>
          <Route path='/' element={<Landing />} />{/*seteo las rutas*/}
          <Route path='/home' element={<Home />} />
          <Route path='/detail/:idDriver' element={<Detail/>} />
          <Route path="/form" element={<Form />} />

        </Routes>
      </div>
  )
}

export default App;

