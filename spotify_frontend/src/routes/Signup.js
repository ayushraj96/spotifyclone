import { useState } from "react";
import { Icon } from "@iconify/react";
import TextInput from "../shared/TextInput";
import PasswordInput from "../shared/PasswordInput"
import { Link } from "react-router-dom";
import { makeunauthenticatedPOSTRequest } from "../utils/serverHelpers";



const SignupComponent =()=>{
  const [email,setEmail]=useState("");
  const [ConfirmEmail,setConfirmEmail]=useState("");
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");

  const signUp=async ()=>{
    if(email !=ConfirmEmail){
      alert("Email and confirm email fiels match,please cheak again");
      return ;

    }
    const data={email,password,username,firstName,lastName};
    const response =await makeunauthenticatedPOSTRequest("/auth/register",data);
    if(response && !response.err){
      console.log(response);
      alert("Success");
    }
    else{
      alert("Failure");
    }
  }

  return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="logo p-5 border-b border-solid border-gray-200 w-full flex justify-center">

            <Icon icon="logos:spotify" width="150"/>
            </div>
            <div className="inputRegion w-1/3 py-10 flex items-center justify-center flex-col">
            <div className="font-bold mb-4 text-21l">
              Sign up for free to start listening.

            </div>
              <TextInput 
              label="Email address " 
              placeholder="Email address"
              className="my-6"
              value={email}
              setValue={setEmail}
              />
              <TextInput 
              label="Enter your email again " 
              placeholder="Confirm Email address "
              className="mb-6"
              value={ConfirmEmail}
              setValue={setConfirmEmail}
              />
               <TextInput 
              label="Username" 
              placeholder=" Enter your username "
              className="my-6"
              value={username}
              setValue={setUsername}
              />
              <PasswordInput
              label="Create Password" 
              placeholder="Enter a strong password here"
              value={password}
              setValue={setPassword}
              />
              
              <div className="w-full flex justify-between items-center space-x-8">
              <TextInput 
              label="First Name" 
              placeholder=" Enter your First Name "
              className="my-6"
              value={firstName}
              setValue={setFirstName}
              />
               <TextInput 
              label="Last Name" 
              placeholder=" Enter your Last Name "
              className="my-6"
              value={lastName}
              setValue={setLastName}
              />
              
              </div>


              <div className="w-full flex items-center justify-center my-8">
              <button className="bg-green-400 font-semibold p-3 px-10 rounded-full"
               onClick ={(e)=>{e.preventDefault();
                SignupComponent();

              }}>
                Sign up
              </button>
              </div>
              <div className="w-full border border-solid border-gray-300"></div>
              <div className="my-6 font-semibold text-lg">
                Already have an account?
              </div>
              <div className="border border-gray-500  text-gray-500 w-full flex items-center justify-center py-4 rounded-full font-bold">
                <Link to="/Login">LOG IN INSTEAD</Link>
              </div>
            </div>
            </div>
    );
};
export default SignupComponent;