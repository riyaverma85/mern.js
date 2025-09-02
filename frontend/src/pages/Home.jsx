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




























import axios from "axios";

import { useState } from "react";

const Home=()=>{
  const [image,setImage]=useState("")
  const handleImage=(e)=>{
    setImage(e.target.files[0]);
    // console.log(file)
  }
  const handleSubmit=async()=>{
    let api="https://api.cloudinary.com/v1_1/dxu8qers5/image/upload";
    const formData=new FormData();
    formData.append("file",image)
    formData.append("upload_preset","riyaphoto");
    formData.append("cloud_name","dxu8qers5");
    const response=await axios.post(api,formData);
    console.log(response);
    console.log(response.data.url)

     
  }
  return(
    <>
     <h3>Welcome to home page!!</h3>
    Upload your images: <input type="file" onChange={handleImage}/><br/><br/>
     <button onClick={handleSubmit}>Upload</button>
    </>
  )
}
export default Home;