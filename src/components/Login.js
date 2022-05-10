import React, { useState } from 'react'
import {Navigate} from 'react-router-dom';
import Cookies from 'universal-cookie';

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [redirect,setRedirect] = useState(false);


    // For Client side field validation
    const [emailErr,setEmailErr] = useState("");
    const [passwordErr,setPasswordErr] = useState("");

    const formValidation = () =>{
        const emailErr={};
        const passwordErr={};
        let isValid = true


        if(email.trim().length < 2){
            emailErr.emailShort = "Invalid Email Entered!";
            isValid = false
        }

        if(password.trim().length < 2){
            passwordErr.passwordShort = "Password too short ";
            isValid = false
        }

        setEmailErr(emailErr);
        setPasswordErr(passwordErr);

        return isValid
    }

    const submit = async (e)=>{
        e.preventDefault();
        //const cookies = Cookies();

        // console.log("Login")
        const isValid = formValidation()
        if(isValid){
            const axios = require('axios');

            try {
                const res = await axios.post('http://127.0.0.1:8000/api/login',{
                    email : email,
                    password : password
                }, {WithCredentials:true});
                console.log(res);
                let  status  = res.status
                if(status === 200){
                    setRedirect(true);
                }
            } catch (error) {
                let detail = error.response.data['detail']
                console.log(error.response);
                console.log(detail);
            }
        }
    }

    if(redirect){
        return <Navigate to="/" />
    }

  return (
        <form onSubmit={submit}>
            <div className="container mt-5">
            <div className="row d-flex justify-content-center">
                <div className="col-md-6">
                    <div className="card px-5 py-5" id="form1">
                        <div className="form-data" >
                            <div className="forms-inputs mb-4"> <span>Email</span> <input  className="w-100 px-2" placeholder='Enter Email' type="text"
                                onChange={(e)=> setEmail(e.target.value)}
                            />
                                <div className="invalid-feedback">A valid email is required!</div>
                            </div>
                            <div className="forms-inputs mb-4"> <span>Password</span> <input  className="w-100 px-2" placeholder='Enter Password' type="password"   
                                onChange={(e)=> setPassword(e.target.value)}
                            />
                                {Object.keys(passwordErr).map((key)=>{
                                    return <div  key={key} className="text-danger">{passwordErr[key]}</div>
                                })}
                                <div className="invalid-feedback">Password must be 8 character!</div>
                            </div>
                            <div className="mb-3"> <button className="btn btn-dark w-100">Login</button> </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
        </form>
  )
}

export default Login