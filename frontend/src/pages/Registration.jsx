// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import BackendUrl from '../utils/BackendUrl';
// import axios from "axios";
// import {ToastContainer,toast} from "react-toastify"
// const Registration=()=>{
// const [input, setInput] = useState({});

// const handleInput=(e)=>{
//   let name=e.target.name;
//   let value=e.target.value;
//   setInput(values=>({...values, [name]:value}));
//   console.log(input);
// }
// const handleSubmit=async(e)=>{
//   e.preventDefault();
//   let api=`${BackendUrl}user/registration`;
//   const response = await axios.post(api, input);
//   console.log(response);
//   toast.success(response.data.msg);
// }
// return(
//         <>
//           <h2 className='h2'> User Registration </h2>
//            <Form id="from">
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter Name</Form.Label>
//         <Form.Control type="text" name="name" onChange={handleInput} />
//       </Form.Group>
//        <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter Email</Form.Label>
//         <Form.Control type="email" name="email"  onChange={handleInput} />
//       </Form.Group>
//        <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter Password</Form.Label>
//         <Form.Control type="password" name="password"  onChange={handleInput} />
//       </Form.Group>
//       <Button variant="primary" type="submit" onClick={handleSubmit}>
//         Submit
//       </Button>
//     </Form>
//     <ToastContainer/>
//         </>
//     )
// }
// export default Registration;













// //============================================================ONE-TO-ONE RELATION====================================================================================
// import { useState, useEffect } from "react";
// import Table from 'react-bootstrap/Table';
// import axios from "axios";
// const Registration=()=>{
//   const [mydata, setMydata] = useState([]);
    
  
//     const loadData = async () => {
//       let api ="http://localhost:8000/display";
//        const response  = await axios.get(api);
//       console.log(response.data);
//       setMydata(response.data);
//     }
//     useEffect(() => {
//       loadData();
//     }, []);
   
  
//   const ans = mydata.map((key) => {
//     return (
//       <>
//         <tr>
//           <td> {key.firstname} </td>
//           <td> {key.lastname} </td>
//           <td> {key.userid.email} </td>
//           <td> {key.userid.username} </td>
          
//         </tr>
//       </>
//     )
//   })
//   return (
//     <>
//       <h1 align="center">User data</h1>
//       <Table striped bordered hover align="center" >
//         <thead>
//           <tr>
//             <th>FIRSTNAME</th>
//             <th>LASTNAME</th>
//             <th>EMAIL</th>
//             <th>USERNAME</th>
//           </tr>
//         </thead>
//         <tbody>
//           {ans}
//         </tbody>
//       </Table>
//     </>
//   )
// }
// export default Registration;








//============================================================ONE-TO-MANY RELATION====================================================================================
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Registration=()=>{
  const [mydata, setMydata] = useState([]);
  const navigte=useNavigate();
  
    const loadData = async () => {
      let api ="http://localhost:8000/autherdisplay";
       const response  = await axios.get(api);
      console.log(response.data);
      setMydata(response.data);
    }
    useEffect(() => {
      loadData();
    }, []);
   
  const addBook=(id)=>{
    navigte(`/addmore/${id}`)
  }
  const ans = mydata.map((key) => {
    return (
      <>
        <tr>
          <td> {key.authername} </td>
          <td> {key.email} </td>
          <td> {
               key.booksid?.map((key1)=>{
            return(
              <>
              <p>
                <span>{key1.bookname}-{key1.price}</span>
              </p>
              </>
            )
          })
           } 
          </td>
          
          <td>
            <button onClick={()=>{addBook(key._id)}}>Addmore book</button>
          </td>
        </tr>
      </>
    )
  })
  return (
    <>
      <h1 align="center">User data</h1>
      <Table striped bordered hover align="center" >
        <thead>
          <tr>
            <th>AUTHERNAME</th>
            <th>EMAIL</th>
            <th>BOOKS DETAILS/PRICE</th>
            <th>USERNAME</th>
          </tr>
        </thead>
        <tbody>
          {ans}
        </tbody>
      </Table>
    </>
  )
}
export default Registration;