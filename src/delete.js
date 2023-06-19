import axios from 'axios';
import './delete.css';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Delete = () =>{
    const nav = useNavigate(); 
    const [title,setTitle] = useState("");
    const handlelogin = async(e) =>{
        axios.delete(`http://localhost:8080/deleteMovies?title=${title}`)
             nav("/main");
    }
    return(
        <div className='xml'>
        <div className='idx'> 
        <form onSubmit={handlelogin}>
        <h2 className='odx'><span>  
            <TextField id="demo-helper-text-misaligned-no-helper" label="delete movies" type="text" required onChange={(e)=>{
                setTitle(e.target.value) }}/>
            </span>
            </h2>
             <button className="wox">
                    Enter
            </button>
         </form>
        </div>
          
      </div>
      
    )
}

export default Delete;