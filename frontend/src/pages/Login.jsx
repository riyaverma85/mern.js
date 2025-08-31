import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BackendUrl from '../utils/BackendUrl';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import {ToastContainer,toast} from "react-toastify"
const Login=()=>{
const [input, setInput] = useState({});
const navigate = useNavigate();
const handleInput=(e)=>{
  let name=e.target.name;
  let value=e.target.value;
  setInput(values=>({...values, [name]:value}));
  console.log(input);
} 
const handleSubmit=async(e)=>{
  e.preventDefault();
  let api=`${BackendUrl}user/login`;
  const response = await axios.post(api, input);
  // if (response.status==202)
  // {
  //   localStorage.setItem("username", response.data.user.email);
  //   localStorage.setItem("useremail", response.data.user.name)
  //   toast.success("You are Loged in");
  //    navigate("/dashboard");
  //  }
  //  console.log(response.data.user.email);
  
  console.log(response.data);

  localStorage.setItem("token", response.data.token);
  navigate("/home");  
 
}
return(
        <>
          <h2 className='h2'> User Login </h2>
           <Form id="from">
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="email" name="email"  onChange={handleInput} />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Password</Form.Label>
        <Form.Control type="password" name="password"  onChange={handleInput} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
       Login
      </Button>
    </Form>
    <ToastContainer/>
        </>
    )
}
export default Login;