import './main.css';
import Im from './assoc/mov.png';
import { Link } from "react-router-dom";
const Main =() =>{
    return(
        <div className='KKK'>
            <div>
            <Link to ="/signout"><h3 className='jjj'>SIGNOUT</h3></Link>
            <Link to ="/delete"><h3 className='zzz'>__________________</h3></Link>
            <button className='borbe'><Link to ="/post"><h3 className='pet'>ADD MOVIES</h3></Link></button>
            <button className='borby'><Link to ="/update"><h3 className='petty'>UPDATE MOVIES</h3></Link></button>
            <h1 className='DDD'><img src={Im}/></h1>
            </div>
        </div>
    )
}
export default Main;