import axios from 'axios';
import './post.css';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Post = () =>{
    const [title,setTitle] = useState("");
    const [relese,setRelese] = useState("");
    const [lang,setLang] = useState("");
    const [time,setTime] = useState("");
    const [category,setCategory] = useState("");
    const [rate,setRate] = useState("");
    const nav = useNavigate();

    const handlePost = async(e) =>{
        e.preventDefault();
        const data={
	    title:title,
        relesedate:relese,
        language:lang,
        runningtime:time,
        category:category,
        rating:rate,
        };
        console.log(data);
        try{
            const response = await axios.post("http://localhost:8080/saveMovies",data);
            console.log(response.data);
            alert("Posted successfully");
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
        <div className='madhu5'>
        <div className='box5'>
        <form onSubmit={handlePost}>
        <center>
            <blur>
            <span><center><h1>Add Movies</h1></center></span>
            <h2>   <span>  
            <TextField id="demo-helper-text-misaligned-no-helper" label="title" type="title" required onChange={(e)=>{
                setTitle(e.target.value) }}/>
            </span>
            </h2>
            <h2 ><span>  
            <TextField id="demo-helper-text-misaligned-no-helper" label="" type="date" required onChange={(e)=>{
                setRelese(e.target.value) }}/>
            </span>
            </h2>
            <h2><span>  
            <TextField id="demo-helper-text-misaligned-no-helper" label="language" type="language" required onChange={(e)=>{
                setLang(e.target.value) }}/>
            </span>
            </h2>
            <h2><span>
            <TextField 
             id="standard-time"
             label="duration"  required onChange={(e)=>{
                setTime(e.target.value) }}/>
             </span>
             </h2>
            <h2><span>
            <TextField 
             id="standard-name"
             label="category"
             type="text" required onChange={(e)=>{
                setCategory(e.target.value)}} />
             </span>
             </h2>
             <h2><span>
             <TextField
             id="outlined-rating"
             label="rating"
             type="number"
             InputLabelProps={{
             shrink: true,}} required onChange={(e)=>{
                setRate(e.target.value) }}/>
             </span>
             </h2>
             <center>
             <button className="bor">
                    Add
            </button>
            </center>
           
            </blur>
         </center>
         </form>
        </div>
          
      </div>
    )
}
export default Post;