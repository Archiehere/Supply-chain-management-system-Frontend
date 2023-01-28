import Nav from "../navbar/navbar";
import Input from "../Authentication/components/authinput";
import { useEffect, useState } from "react";
import BaseUrl from "../util/BaseUrl";

function EditWarehouse(){

    let token= localStorage.getItem("accesstoken")
    const config ={
        headers:{
          Authorization:`Bearer ${token}`,
        }
      }

// useEffect(()=>{
// BaseUrl.get("/w/warehouse" , config)
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })
// } ,[])

const [name , setName]= useState('');
const [volm , setVolm] = useState('');

function handleName(e){
    setName(e.target.value);
}

function handleVolm(e){
    setVolm(e.target.value);
}

function handleApi(){

}
return(
    <>
    <Nav />
    <h1 id='Itemhead'>Edit Warehouse</h1>
<div id='createinps'>
    <div id='padder'>
<Input inp="inputArr" err_id="log" 
value={name}
onchange={handleName}
type="text" lable='Warehouse Name' placeholder='Enter Warehouse Name' />
</div>
<div id='padder'>
<Input inp="inputArr" err_id="log" 
value={volm}
onchange={handleVolm}
type="text" lable='Maximum Volume(m^3)' placeholder='Enter Volume of Warehouse' />
</div>
<button id='SubmitBtn' onClick={handleApi}>Save Changes</button>
</div>
    </>
)
}
export default EditWarehouse;