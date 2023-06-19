import axios from 'axios';
import './signup.css';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const SignUp = () =>{
    const [firstname,setFirstname] = useState("");
    const [lastname,setLastname] = useState("");
    const [gender,setGender] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [mobileno,setMobileno] = useState("");
    const [age,setAge] = useState("");
    const nav = useNavigate();

    const handleSignUp = async(e) =>{
        e.preventDefault();
        const data={
	    firstname:firstname,
        lastname:lastname,
        gender:gender,
        email:email,
        password:password,
        mobileno:mobileno,
        age:age
        };
        console.log(data);
        try{
            const response = await axios.post("http://localhost:8080/saveuser",data);
            console.log(response.data);
            alert("signed up successfully");
            nav("/main");
        }
        catch(error){
            if(error.response.status===500){
                alert("User Already Exsist");
            }
            console.log(error);
        }
    }
    return(
        <div className='madhu'>
        <div className='box'>
        <form onSubmit={handleSignUp}>
        <center>
            <blur>
            <span><center><h1>SignUp</h1></center></span>
            <h2>FirstName  :  <span>  
            <TextField id="demo-helper-text-misaligned-no-helper" label="firstname" required onChange={(e)=>{
                setFirstname(e.target.value) }}/>
            </span>
            </h2>
            <h2>LastName  :  <span>  
            <TextField id="demo-helper-text-misaligned-no-helper" label="lastname" required onChange={(e)=>{
                setLastname(e.target.value) }}/>
            </span>
            </h2>
            <h2>Gender  :  <span>  
            <TextField id="demo-helper-text-misaligned-no-helper" label="gender" required onChange={(e)=>{
                setGender(e.target.value) }}/>
            </span>
            </h2>
            <h2>Email  :  <span>
            <TextField 
             id="standard-email"
             label="email"
             type="email"
             placeholder="johndoe@email.com" required onChange={(e)=>{
                setEmail(e.target.value) }}/>
             </span>
             </h2>
            <h2>Password  : <span>
            <TextField 
             id="outlined-password-input"
             label="password"
             type="password"
             autoComplete="current-password"  required onChange={(e)=>{
                setPassword(e.target.value)}} />
             </span>
             </h2>
             <h2>Mobile no : <span>
             <TextField
             id="outlined-number"
             label="number"
             type="number"
             InputLabelProps={{
             shrink: true,}} required onChange={(e)=>{
                setMobileno(e.target.value) }}/>
             </span>
             </h2>
             <h2>Age  : <span>
             <TextField
             id="outlined-number"
             label="age"
             type="number"
             InputLabelProps={{shrink: true,}} required onChange={(e)=>{
                setAge(e.target.value) }}/></span>
             </h2>
             <center>
             <button className="haa">
                    SIGNUP
            </button>
            </center>
           
            </blur>
         </center>
         </form>
        </div>
          
      </div>
    )
}
export default SignUp;