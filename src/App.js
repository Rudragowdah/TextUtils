// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';



function App() {
  const [mode, setMode] = useState('light'); // Weather Dark Mode is enabled are not
  
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const settingMode = (color)=>{
    setMode(color);
  }

  const toggleMode = ()=>{
    if(mode==='light') {
      setMode('dark');
      document.body.style.backgroundColor = '#202020';
      showAlert('Dark mode has been set successfully',"success");
      // document.title = "TextUtils - Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been set successfully',"success");
      // document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
      <Router>
        <Navbar settingMode={settingMode} title='TextUtils' mode = {mode} toggleMode={toggleMode}/>
        <Alert alert = {alert}/>
        <div className="container my-3">
          <Routes>
            <Route path='/' element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter | Character Counter | Remove extra spaces" mode={mode}/>}/>
            <Route path='/About' element={<About mode={mode}/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;