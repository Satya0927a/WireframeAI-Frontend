import axios from "axios";

const url = "http://localhost:3000"
axios.defaults.withCredentials = true;

async function FetchUserData(){
  const response = await axios.get(`${url}/user`,{
    withCredentials:true
  })
  return response.data
}

async function LoginReq(email,password){
  const response = await axios.post(`${url}/auth/login`,{
    email:email,
    password:password
  })
  return response.data
}

async function OtpVerifyReq(email,otp,endpoint){
  console.log(`${url}${endpoint}`);
  
  const response = await axios.post(`${url}${endpoint}`,{
    email:email,
    otp:otp
  })
  return response.data
}

async function LogOutReq() {
  const response = await axios.post(`${url}/auth/logout`)
  return response.data
}
export {FetchUserData, LoginReq,OtpVerifyReq,LogOutReq}
