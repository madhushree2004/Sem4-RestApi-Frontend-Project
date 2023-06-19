import axios from 'axios';
import './login.css';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Login = () =>{
    const nav = useNavigate(); 
    const [user,setUser] = useState("");
    const [password,setPassword] = useState("");
    const [data,setData] = useState("");


    const handlelogin = async(e) =>{
        e.preventDefault();
        try{
            const response = await axios.get(`http://localhost:8080/Login?user=${user}&password=${password}`)
            console.log(response.data);
            setData(response.data);
            if(response.data==="Login sucessfull"){
                alert("Logged in successfully");
                nav("/main");
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
        
        <div className='madhu1'>
        <div className='box1'>
        <form onSubmit={handlelogin}>
         <center>
            <blur>
            <span><center><h1 className="uuu">Login</h1></center></span>
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
             <span><span><h4><Link to ="/forget"><h4 className="www">forget password?</h4></Link></h4></span></span>
             <center>
             <button className="bbb" variant="contained" color="inherit">
                    LOGIN
            </button>
            </center>
            <center>
            <span>
            <h3  className="sss">New  user?</h3>
            <button className="eee" variant="contained" color="inherit">
            <Link to ="/signup"><h3>SignUp</h3></Link>
            </button>

            </span>
            </center>
           
            </blur>
         </center>
         </form>
        </div>
          
      </div>
      
    )
}

export default Login;