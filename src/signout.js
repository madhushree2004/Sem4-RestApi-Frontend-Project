import axios from 'axios';
import './signout.css';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signout = () =>{
    const nav = useNavigate(); 
    const [user,setUser] = useState("");
    const [password,setPassword] = useState("");

    const handlelogin = async(e) =>{
           axios.delete(`http://localhost:8080/delete?username=${user}&password=${password}`)
                nav("/home");
    }
    return(
        
        <div className='madhu3'>
        <div className='box3'>
        <form onSubmit={handlelogin}>
         <center>
            <blur>
            <span><center><h1 className="FFF">Remove Account</h1></center></span>
            <h2>UserName  :  <span>  
            <TextField id="demo-helper-text-misaligned-no-helper" label="Name" required onChange={(e)=>{
                setUser(e.target.value) }}/>
            </span>
            </h2>
            <h2>Password  : <span>
            <TextField 
             id="outlined-password-input"
             label="Password"
             type="password"
             autoComplete="current-password"  required onChange={(e)=>{
                setPassword(e.target.value)}} />
             </span>
             </h2>
             <center>
             <button className="ttt">
                    SIGNOUT
            </button>
            </center>
            </blur>
         </center>
         </form>
        </div>
          
      </div>
      
    )
}

export default Signout;