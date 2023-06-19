import axios from 'axios';
import './update.css';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Update = () =>{
    const [title,setTitle] = useState("");
    const [lang,setLang] = useState("");
    const[data,setData]=useState("");
    const nav = useNavigate();

    const handleUpdate= async(e) =>{
        e.preventDefault();
        try{
            const response = await axios.put(`http://localhost:8080/updateMoviesByTitle?lang=${lang}&title=${title}`)
            console.log(response.data);
            setData(response.data);
            if(response.data==="updated"){
                alert("updated in successfully");
                setData("");
                nav("/main");
            }
            else{
                setData("not updated")
            }
        }
        catch(error){
            console.log(error);
        }
    }
    return(
        <div className='madhu6'>
        <div className='box6'>
        <form onSubmit={handleUpdate}>
        <center>
            <blur>
            <span><center><h1>Update Movies</h1></center></span>
            <h2>   <span>  
            <TextField id="demo-helper-text-misaligned-no-helper" label="title" type="title" required onChange={(e)=>{
                setTitle(e.target.value) }}/>
            </span>
            </h2>
            <h2><span>  
            <TextField id="demo-helper-text-misaligned-no-helper" label="language" type="language" required onChange={(e)=>{
                setLang(e.target.value) }}/>
            </span>
            </h2>
            
             <center>
             <button className="yor">
                    update
            </button>
            </center>
           
            </blur>
         </center>
         </form>
        </div>
          
      </div>
    )
}
export default Update;