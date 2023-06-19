import './App.css';
import { Route,Routes } from 'react-router-dom';
import Login from './login';
import SignUp from './signup';
import Home from './home';
import Forget from './forget';
import Signout from './signout';
import Main from './main';
import Delete from './delete';
import Post from './post';
import Update from './update';
function App() {
  return (
    <Routes>

      <Route path="/home" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/forget" element={<Forget/>}></Route>
      <Route path="/main" element={<Main/>}></Route>
      <Route path="/signout" element={<Signout/>}></Route>
      <Route path="/delete" element={<Delete/>}></Route>
      <Route path="/post" element={<Post/>}></Route>
      <Route path="/update" element={<Update/>}></Route>
  </Routes>
   );
}

export default App;
