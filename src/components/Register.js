/* eslint-disable no-unused-vars */
import React, { useState , SyntheticEvent } from 'react'
import {Navigate} from 'react-router-dom';


const Register = () => {
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [passwordConfirm,setPasswordConfirm] = useState("");
    const [redirect,setRedirect] = useState(false);

    // Errors

    const [firstNameErr,setFirstNameErr] = useState("");
    const [lastNameErr,setLastNameErr] = useState("");
    const [emailErr,setEmailErr] = useState("");
    const [passwordErr,setPasswordErr] = useState("");
    const [cpasswordErr,setCPasswordErr] = useState("");

    // Client side form validation
    const formValidation = () =>{
        const firstNameErr = {};
        const lastNameErr={};
        const emailErr={};
        const passwordErr={};
        const cpasswordErr={};
        let isValid = true;



        if(firstName.trim().length < 2){
            firstNameErr.firstNameShort = "First Name too short or empty";
            isValid = false
        }

        if(lastName.trim().length < 2){
            lastNameErr.lastNameShort = "First Name too short or empty";
            isValid = false
        }
        if(email.trim().length < 2){
            emailErr.emailShort = "Invalid Email Entered!";
            isValid = false
        }
        if(password.trim().length < 2){
            passwordErr.passwordShort = "Password too short ";
            isValid = false
        }
        if(passwordConfirm.trim() !== password.trim()){
            cpasswordErr.passwordNotMatch = "Passwords didn't match!";
            isValid = false
        }

        setFirstNameErr(firstNameErr);
        setLastNameErr(lastNameErr);
        setEmailErr(emailErr);
        setPasswordErr(passwordErr);
        setCPasswordErr(cpasswordErr);

        return isValid;
        
    }

    // Submit Data to Register API
    const submit = async (e) =>{
        e.preventDefault();  
        const isValid = formValidation()
        if(isValid){
        const axios = require('axios');
        // Sending Post Request via axios...
        try {
        const res = await axios.post('http://127.0.0.1:8000/api/register',{
            first_name : firstName,
            last_name : lastName,
            email,
            password,
            password_confirm: passwordConfirm
        });
        console.log(res.data);

        setRedirect(true);

        } catch (error) {
            console.log(error.response.data);
        }
    }
    else{
        console.log("Invalid Data")
    }

    }
    if(redirect){
        return <Navigate to="/login" />
    }

  return (
            <form onSubmit={submit}>
            <div className="container mt-5">
            <div className="row d-flex justify-content-center">
                <div className="col-md-6">
                    <div className="card px-5 py-5" id="form1">
                        <div className="form-data" >
                            <div className="forms-inputs mb-4"> <span>First Name</span> 
                                <input className="w-100 px-2" placeholder='First Name' type="text" 
                                onChange={(e) => setFirstName(e.target.value)}
                                />
                                {Object.keys(firstNameErr).map((key)=>{
                                    return <div  key={key} className="text-danger">{firstNameErr[key]}</div>
                                })}
                            </div>
                            <div className="forms-inputs mb-4"> <span>Last Name</span> 
                                <input  className="w-100 px-2" placeholder='Last name' type="text" 
                                onChange={(e) => setLastName(e.target.value)}
                                />
                                {Object.keys(lastNameErr).map((key)=>{
                                    return <div key={key} className="text-danger">{lastNameErr[key]}</div>
                                })}
                            </div>
                            <div className="forms-inputs mb-4"> <span>Email</span> 
                                <input  className="w-100 px-2" placeholder='Enter Email' type="text" 
                                onChange={(e) => setEmail(e.target.value)}
                                />
                                {Object.keys(emailErr).map((key)=>{
                                    return <div key={key} className="text-danger">{emailErr[key]}</div>
                                })}
                            </div>
                            <div className="forms-inputs mb-4"> <span>Password</span> 
                                <input  className="w-100 px-2" placeholder='Enter Password' type="password"   
                                onChange={(e) => setPassword(e.target.value)}
                                
                                />
                                {Object.keys(passwordErr).map((key)=>{
                                    return <div key={key} className="text-danger">{passwordErr[key]}</div>
                                })}
                                <div className="invalid-feedback">Password must be 8 character!</div>
                            </div>
                            <div className="forms-inputs mb-4"> <span>Confirm Password</span> 
                                <input  className="w-100 px-2" placeholder='Enter Password' type="password"   
                                onChange={(e) => setPasswordConfirm(e.target.value)}
                                
                                />
                                {Object.keys(cpasswordErr).map((key)=>{
                                    return <div key={key} className="text-danger">{cpasswordErr[key]}</div>
                                })}
                            </div>
                            <div className="mb-3"> <button className="btn btn-dark w-100">Register</button> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        </form>

    
         )
}

export default Register