import axios from 'axios';
import './forget.css';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Forget = () =>{
    const nav = useNavigate(); 
    const [username,setUser] = useState("");
    const [password,setPassword] = useState("");
    const [data,setData] = useState("");


    const handlelogin = async(e) =>{
        e.preventDefault();
        try{
            const response = await axios.put(`http://localhost:8080/updateByPassword?username=${username}&password=${password}`)
            console.log(response.data);
            setData(response.data);
            if(response.data==="updated"){
                alert("Reseted in successfully");
                setData("");
                nav("/login");
            }
            else{
                setData("Invalid UserName/Password")
            }
        }
        catch(error){
            console.log(error);
        }
    }
    return(
        
        <div className='madhu2'>
        <div className='box2'>
        <form onSubmit={handlelogin}>
         <center>
            <blur>
            <span><center><h1 className="yyy">Reset Password</h1></center></span>
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
             <button className="oyu" variant="contained" color="success">
                    RESET
            </button>
            </center>
            </blur>
         </center>
         </form>
        </div>
          
      </div>
      
    )
}

export default Forget;
