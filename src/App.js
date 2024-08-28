import './App.css';
import { useState } from 'react';

function App() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSignIn = () => {
      console.log("username is ", username)
      console.log("Password is ", password)
  }

  const handleUserInputs = (event) => {
    if(event.target.name === "user"){
      setUsername(event.target.value)
    } else if(event.target.name === "pass") {
      setPassword(event.target.value)
    }
  }

  return (
    <div className='login-container'>
      <h1 className='login-title'>Login</h1>
      <div>
        <label className='login-label'>Username: 
          <input className='login-input' type="text" name="user" value={username} onChange={handleUserInputs}/>
        </label>
      </div>
      
      <div>
        <label>Password: 
          <input className='login-input' type="password" name="pass" value={password} onChange={handleUserInputs}/>
          </label>
      </div>
      
      <button className='login-button' onClick={handleSignIn}>Sign In</button>
    </div>
  );
}

export default App;
