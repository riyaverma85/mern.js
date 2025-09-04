// // import axios from "axios";
// // import { useEffect } from "react";
// // import BackendUrl from "../utils/BackendUrl";
// // import { useNavigate } from "react-router-dom";

// import axios from "axios";
// import BackendUrl from "../utils/BackendUrl";

// // const Home=()=>{
// // const navigate = useNavigate();

// //  let api=`${BackendUrl}user/userauth`;

// //   const userAuntehticate=async()=>{
// //    const token = localStorage.getItem("token");
   
// //     if (token)
// //     {
// //       const response = await axios.post(api, null, {headers: { "x-auth-token": token }} );
// //       console.log(response);
      
// //       localStorage.setItem("username", response.data.name);
// //       localStorage.setItem("useremail", response.data.email);
// //      navigate("/dashboard");
// //     }
// //    }
// //  useEffect(()=>{
// //     userAuntehticate();
// //  }, [])
// // return(
// //         <>
// //           <h2 className="h2"> Welcome To Home Page</h2>
// //         </>
// //     )
// // }

// // export default Home;
















// const Home=()=>{
// //   const handleSubmit=async()=>{
// //     const api=`${BackendUrl}`
// //     const response=await axios.get(api)
// //     console.log(response)
// //   }
   
// //   const handleSubmit1=async()=>{
// //     try{
// //       const api=`${BackendUrl}about`
// //     const response=await axios.get(api)
// //     console.log(response)
// //     }catch(error){
// //       console.log(error.response.data)
// //       alert(error.response.data)
// //     }
    
// //   }
// // const handleSubmit2=async()=>{
// //     const api=`${BackendUrl}service`
// //     try{
// //     const response=await axios.get(api)
// //     console.log(response.data)
// //     }catch(error){
// //     console.log(error.response.data)
// //     alert(error.response.data)
// //     }
// //   }
//   return(
//     <>
//      <h3>Welcome to home page!!</h3>
//     {/* <button onClick={handleSubmit}>Click Here</button>
//      <button onClick={handleSubmit1}>About page</button>
//      <button onClick={handleSubmit2}>Service Page</button>*/}
//      Upload your images: <input type="fie" /><br/><br/>
//      <button>Upload</button>
//     </>
//   )
// }
// export default Home;




// import axios from "axios";
// import { useEffect } from "react";
// import BackendUrl from "../utils/BackendUrl";
// import { useNavigate } from "react-router-dom";

// import axios from "axios";
// import BackendUrl from "../utils/BackendUrl";
// import { useState } from "react";

// const Home=()=>{
// const navigate = useNavigate();

//  let api=`${BackendUrl}user/userauth`;

//   const userAuntehticate=async()=>{
//    const token = localStorage.getItem("token");
   
//     if (token)
//     {
//       const response = await axios.post(api, null, {headers: { "x-auth-token": token }} );
//       console.log(response);
      
//       localStorage.setItem("username", response.data.name);
//       localStorage.setItem("useremail", response.data.email);
//      navigate("/dashboard");
//     }
//    }
//  useEffect(()=>{
//     userAuntehticate();
//  }, [])
// return(
//         <>
//           <h2 className="h2"> Welcome To Home Page</h2>
//         </>
//     )
// }

// export default Home;














// import axios from "axios";
// import BackendUrl from "../utils/BackendUrl";
// import { useState } from "react";

// const Home=()=>{
//   const [file,setFile]=useState("")
//   const onChangeHandler=(e)=>{
//     setFile(e.target.files[0]);
//     console.log(file)
//   }
//   const onsubmitHandler=async()=>{
//     const formData=new FormData();
//     formData.append("file",file)
//      let api=`${BackendUrl}upload`;
//      try {
//         const response = await axios.post(api, formData);
//         console.log(response)
//         alert(`File: + response.data.filename+"successfully uploaded`)
//      } catch (error) {
//        console.log(error)
//      }  
//   }
//   return(
//     <>
//      <h3>Welcome to home page!!</h3>
    
//      Upload your images: <input type="file" onChange={onChangeHandler}/><br/><br/>
//      <button onClick={onsubmitHandler}>Upload</button>
//     </>
//   )
// }
// export default Home;




























// import axios from "axios";

// import { useState } from "react";

// const Home=()=>{
//   const [image,setImage]=useState("")
//   const handleImage=(e)=>{
//     setImage(e.target.files[0]);
//     // console.log(file)
//   }
//   const handleSubmit=async()=>{
//     let api="https://api.cloudinary.com/v1_1/dxu8qers5/image/upload";
//     const formData=new FormData();
//     formData.append("file",image)
//     formData.append("upload_preset","riyaphoto");
//     formData.append("cloud_name","dxu8qers5");
//     const response=await axios.post(api,formData);
//     console.log(response);
//     console.log(response.data.url)
// }
//   return(
//     <>
//      <h3>Welcome to home page!!</h3>
//     Upload your images: <input type="file" onChange={handleImage}/><br/><br/>
//      <button onClick={handleSubmit}>Upload</button>
//     </>
//   )
// }
// export default Home;












// import { useState } from "react";
// import axios from "axios";
// const Home=()=>{
//   const [files, setFiles] = useState([]);
//  const [uploadedUrls, setUploadedUrls] = useState([]);
//  const handleUpload = async () => {
//   if (!files.length) return alert("Please select files");
//  const formData = new FormData();
//  for (let i = 0; i < files.length; i++) {
//  formData.append("files", files[i]);
//  }
//  try {
//  const res = await axios.post("http://localhost:5000/upload-multiple",
// formData, {
//  headers: { "Content-Type": "multipart/form-data" },
//  });
//  setUploadedUrls(res.data.files);
//  } catch (err) {
//  console.error(err);
//  }
//  };
//  return (
//  <div>
//  <h2>Upload Multiple Files to Cloudinary</h2>
//  <input type="file" multiple onChange={(e) => setFiles([...e.target.files])}/>
//  <button onClick={handleUpload}>Upload</button>


//  {uploadedUrls.length > 0 && (
//  <div>
//  <h3>Uploaded Files:</h3>
//  {uploadedUrls.map((url, index) => (
//  <div key={index} style={{ margin: "10px 0" }}>
//  <a href={url} target="_blank" rel="noreferrer">{url}</a>
//  <br />
//  {url.match(/\.(jpg|jpeg|png)$/) && (
//  <img src={url} alt="uploaded" style={{ width: "200px", marginTop:"5px" }} />
//  )}
//  </div>
//  ))}
//  </div>
//  )}
//  </div>
//  );
// }
// export default Home;









const Home=()=>{
  return(
    <>
    <h2 className='h2'> User Registration </h2>
           <Form id="from">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" name="name" onChange={handleInput} />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="email" name="email"  onChange={handleInput} />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Password</Form.Label>
        <Form.Control type="password" name="password"  onChange={handleInput} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    </>
  )
}
export default Home;