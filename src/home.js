import './home.css';
import { Link } from "react-router-dom";
const Home =() =>{
    return(
        <div className='deeps'>
            <div>
            <Link to ="/login"><h3 className='ooo'>LOGIN</h3></Link>
            <Link to ="/signup"><h3 className='iii'>SIGNUP</h3></Link>
            <Link to ="/login"><h4 className='mmm'>_________________</h4></Link>
            </div>
        </div>
    )
}
export default Home;