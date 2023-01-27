import React, { useState } from 'react';
import './setpass.css';
import Authblock from "../components/authblock";
import Input from "../components/authinput";
import Heading from "../components/heading";
import axios from 'axios';
import Loader from "../../loader";
import { useNavigate } from "react-router-dom";
import BaseUrl from '../../util/BaseUrl';

const illustration = require("../images/setpass.svg").default;



function Passwordset(){
    const Navhandler = useNavigate();
    const [password,setpassword] =useState("");
    const [password2,setpassword2] =useState("");
    const [businessname,setbusinessname] =useState("");
    const email = localStorage.getItem("email");
    const [loading,setLoading]=useState(false);
    const otp = localStorage.getItem("otp")

    function handlepass(e){
        setpassword(e.target.value);
        if((/^(?=.*[0-9])(?=.*[!@#$%^_=&*])[a-zA-Z0-9!@#$%_=^&*]{8,100}$/).test(e.target.value) || e.target.value==="")
        {
            document.getElementById("pass").style.visibility = "hidden";
            if(e.target.value==="")
            document.getElementById("passb").style.borderColor = "white";
            else
            document.getElementById("passb").style.borderColor = "#66DF98";
        }
        else{
            document.getElementById("pass").style.visibility = "visible";
            document.getElementById("passb").style.borderColor = "#CF6679";
        }
    }

    function handlepass2(e){
        setpassword2(e.target.value);
        if(password===(e.target.value) || e.target.value==="")
        {
            document.getElementById("pass2").style.visibility = "hidden";
            if(e.target.value==="")
            document.getElementById("pass2b").style.borderColor = "white";
            else
            document.getElementById("pass2b").style.borderColor = "#66DF98";
        }
        else{
            document.getElementById("pass2").style.visibility = "visible";
            document.getElementById("pass2b").style.borderColor = "#CF6679";
        }
    }

    function handleapi(){
        setLoading(true);
        let token= sessionStorage.getItem("token")
        let config ={
            header:token
        }
        if(password===password2 && password)
        {
            BaseUrl.post("/signup",config,{
            password:password,
            businessname:businessname
            }).then((res) => {
                console.log(res);
                if (res.data.message === "User Created Successfully") {
                    localStorage.clear();
                    Navhandler("/login");
                    localStorage.clear();
                  } else {
                    console.log("f");
                  }
                setLoading(false);
              })
                .catch((err) => {
                  console.log(err);
                  setLoading(false);
                }
                );
            
        }
        else
        {console.log("passwords not matching");
        setLoading(false);}
    }

    return <div>
    {loading?<Loader />:
    <div>
       <Heading /> 
       <img className='svgsetpass' id='svg1' src={illustration} alt="" />
       <div id="setpass" >
       <div><h1 className='topline'>Set password?</h1>
            <p className='middle'>No worries, set password</p></div>
            <Input inp='passb'  onchange={handlepass} type="password" lable="Password" placeholder="Enter Password" message="Must be at least 8 characters with 1 special character,1 number,1 capital,1 small alphabet" err_id='pass' />
            <Input inp='pass2b' onchange={handlepass2} type="password" lable="Confirm-Password" placeholder="Enter Password" message="Passwords Must Match" err_id='pass2'/>
            <br />
            <Authblock onclick={handleapi} name="Save"/>
            <pre>Cancel</pre>
            
       </div>
       <img className='svgsetpass' id='svg2' src={illustration} alt="" />
    </div>}</div>
}
export default Passwordset;