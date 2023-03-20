import './App.css';
import SharedLayout from './pages/sharedLayout/SharedLayout';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import { useState } from 'react';
import Dashboard from './pages/dashboard/Dashboard';
import Create from './pages/create/Create';
import Update from './pages/update/Update';
import Delete from './pages/delete/Delete';

function App() {
  const [user, setUser] = useState()
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<SharedLayout/>}>
              <Route index element={<Home />} />
              <Route path="login" element={<Login setUser={setUser}/>} />
          </Route>
          <Route path="dashboard" element={<Dashboard user={user}/>} >             
              <Route index element={<Create/>}/>
              <Route path="update" element={<Update/>}/>
              <Route path="delete" element={<Delete/>}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
