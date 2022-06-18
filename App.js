import FormInput from './Components/FormInput';
import './App.css';
import {useRef, useState} from 'react'

function App() {
  //const [username, setUsername] = useState('');
  //can use useRef hook to stop re-rendering... const usernameRef=useRef()
  //console.log(usernameRef)
  //pass as refer={usernameRef} instead of setUsername
  //change in forminput
  //use e.preventDefault() to keep from losing data

  //const usernameRef = useRef() ... in FormInput refer={usernameRef}


  const handleSubmit = (e)=>{
    e.preventDefault();
    const data = new FormData(e.target)
    console.log(Object.fromEntries(data.entries()))
  }


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <FormInput name='username' placeholder='Username'  />  
        <FormInput name='email' placeholder='Email'/>
        <FormInput name='fullname' placeholder='Full Name'/>
        <FormInput name='address' placeholder='Address'/>
        <button>Submit</button>
      </form>
      
    </div>
  );
}

export default App;
