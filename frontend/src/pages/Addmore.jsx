import { useParams } from "react-router-dom";
import { useState } from "react";
const Addmore=()=>{
    const{id}=useParams();
    const[name,setName]=useState("")
    const[price,setPrice]=useState("")
    return(
        <>
        <h3>Add More</h3>
        Enter Bookname: <input type="text" value={name} onChange={(e)=>{setName(e.target.name)}}/><br/><br/>
        Enter Bookname: <input type="text" value={price} onChange={(e)=>{setPrice(e.target.name)}}/><br/><br/>
        </>
    )
}
export default Addmore;