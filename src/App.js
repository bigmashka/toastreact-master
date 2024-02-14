
import './App.css';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css'
import {useEffect, useState} from 'react';
import axios from 'axios'

function App() {

  useEffect(()=>{
    axios.get('http://localhost:3001/').then((data)=>{
      const message = data.data.message;
      toast.success(message);
    }).catch((e)=>{
      toast.error(e.message)
    })
  }, [])

  const handleClick = () =>{
    // toast("Всплывающее окно");

    axios.post('http://localhost:3001/login',{login:login, password:password}).then((data)=>{
      const message = data.data.message;
      toast.success(message);
    }).catch((e) => {
      toast.error(e.response);


      if(e.response.status == 404){
        toast.warning(e.response.data.message)
      }
    })
  }

  const[login,setLogin] = useState('');
  const[password,setPassword] = useState('');

  return (
    <div className="App">

      <input type='text' placeholder='логин' value={login} onChange={(e)=>setLogin(e.target.value)}></input>
      <input type='placeholder' placeholder='пароль' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
      <button onClick={handleClick}>Click me</button>
      <ToastContainer/>
    </div>
  );
}

export default App;
