import React, { useState , useEffect } from 'react';
import logo from './logo.png';
import './App.css';
import AdPatternLock from "ad-pattern-lock";
import 'ad-pattern-lock/dist/main.css';

import Swal from 'sweetalert2'

function App() {
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    if(authorized == true){
      setTimeout(() => {
        setAuthorized(false);
      }, 60000);
    }
  }, [authorized]);

  let takePattern =(pattern)=>{
    if(pattern === '321456987')
    {
      // Swal.fire({
      //   position: 'top-end',
      //   icon: 'success',
      //   title: 'Unlocked successfully.',
      //   showConfirmButton: false,
      //   timer: 1500
      // });
      setAuthorized(true);
    }
    else
    {
      // Swal.fire({
      //   position: 'top-end',
      //   icon: 'error',
      //   title: 'Unable to unlock , please try again.',
      //   showConfirmButton: false,
      //   timer: 1500
      // });
      setAuthorized(false);
    }
  }
  return (
    <div className="App">
      {authorized == false?(
      <header className="App-header" style={{minHeight:'100vh'}}>
        <img src={logo} className="App-logo" alt="logo" />
        <br/>
        <p>
          Welcome to <code>Sarahhigtech</code> accesss info panel.
        </p>

          <a className="App-link" href="#" target="_blank" rel="noopener noreferrer">
            Enter pattern to unlock
          </a>
          <AdPatternLock backgroundColor="#0b163f" onCompletePattern={(pattern) => takePattern(pattern)} />
      </header>
      ):(
      <header className="App-header" style={{minHeight:'60vh'}}>
        <img src={logo} className="App-logo" alt="logo" />
        <br/>
        <p>
          Welcome to <code>Sarahhigtech</code> accesss info panel.
        </p>
          <p className="App-link" >
            Welcome to infomation access panel
          </p>
      </header>
      )}

      {authorized == true?(<>
        <center>
        <div className="card" style={{maxWidth:'600px',margin:'10px'}}>
            <div className="card-body">
              <h4 className="card-title">Project name : Inventory system</h4>
              <hr/>
              <p >
                <b>Project link:</b> <a href="https://inventory.sarahhightech.com/login" target="_blank">https://inventory.sarahhightech.com/login</a><br/>
                <b>Project demo:</b> <a href="https://inventory.sarahhightech.com/login" target="_blank">https://www.youtube.com/watch?v=H1y_S-E1f1Q</a><br/>
                <b>Project access:</b> Username and password - admin@admin.com<br/>
              </p>
            </div>
          </div>
          <br/>
          <div className="card" style={{maxWidth:'600px',margin:'10px'}}>
            <div className="card-body">
              <h4 className="card-title">Project name : Newsportal</h4>
              <hr/>
              <p >
                <b>Project link:</b> <a href="https://newsportal.sarahhightech.com" target="_blank">https://newsportal.sarahhightech.com</a><br/>
                <b>Project adminpanel:</b> <a href="https://newsportal.sarahhightech.com/login" target="_blank">https://newsportal.sarahhightech.com/login</a><br/>
                <b>Project access:</b> Username and password - admin@newsportal.com and password<br/>
              </p>
            </div>
          </div>
          </center>
      </>):("")}
      <br/><br/>
    </div>
  );
}

export default App;
