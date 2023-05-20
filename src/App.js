
import './App.css';
import Main from './components/Main';

import { Login } from './components/login';
import { Register } from './components/Register';
import React, {useState} from "react"
// import Reg from './components/Reg';
function App() {
  const [currentForm, setCurrentForm] = useState('login');
  return (
    
   
    <div className="App">
      <Main/>
      {/* {
      currentForm === "login" ? <Login/> : <Register/> 
      } */}
    </div>  
  
  );
}

export default App;
