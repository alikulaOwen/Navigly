import React from 'react';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
//import { MainApp } from './views/main';



import { Counter } from './features/counter/Counter';
import Login from './main/auth/login';
import Register from './main/auth/register';
import MainApp from './main/main';
import PrivateRoute from './main/privateRoute';


function App() {
  return (
    <div className="w-screen min-h-screen bg-[#ffffff] flex justify-center items-center p-0 ">
      
      <Router>
        <Routes>
          <Route path='/app/*' element={<PrivateRoute page={<MainApp />} />} />
          <Route path='register' element={<Register />} />
          <Route path='signin' element={<Login />} />
          <Route path='*' element={<Navigate to='/register' />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
