import logo from './logo.svg';
import './App.css';
import Project from './project';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Sid from './test';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hello from './param';
import SignUp from './signup';
import Signin from './signin';
import Fetch from './fetch';
import Param from './para';


function App() {
  return (
    <>
    {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<Project/>}/>
      <Route path='/dashboard' element={<Sid/>}/>
      <Route path="/products/:id" element={<Hello/>}/>
    </Routes>
    </BrowserRouter> */}
    {/* <Project/> */}
<BrowserRouter>
<Routes>
  <Route path="/" element={<SignUp/>}/>
  <Route path="/signin" element={<Signin/>}/>
  <Route path="/products" element={<Fetch/>}/>
  <Route path="/products/:id" element={<Param/>}/>
  
  </Routes>
  </BrowserRouter>
    {/* <SignUp/> */}
    
    </>
  );
}

export default App;
