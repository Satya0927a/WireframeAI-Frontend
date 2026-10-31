import axios from "axios";

const url = "http://localhost:3000"
axios.defaults.withCredentials = true;

async function FetchUserData() {
  const response = await axios.get(`${url}/user`);
  return response.data;
}

async function LoginReq(email, password, remember) {
  const response = await axios.post(`${url}/auth/login`, {
    email: email,
    password: password,
    remember: remember
  })
  return response.data
}

async function SignupReq(name, email, password) {
  const response = await axios.post(`${url}/auth/signup`, {
    name: name,
    email: email,
    password: password
  })
  return response.data
}

async function OtpVerifyReq(otp, challenge) {
  const response = await axios.post(`${url}/auth/verify/otpchallenge`, {
    otp: otp,
    challenge: challenge
  })
  return response.data
}

async function ResendOtpReq(challenge) {
  const response = await axios.post(`${url}/auth/otp/resend-request`, {
    challenge: challenge
  })
  return response.data
}

async function ForgotPasswordReq(email) {
  const response = await axios.post(`${url}/auth/forgot-password`, {
    email: email
  })
  return response.data
}

async function ResetPasswordReq(newPassword, session) {
  const response = await axios.post(`${url}/auth/password-reset`, {
    newPassword: newPassword,
    session: session
  })
  return response.data
}

async function LogOutReq() {
  const response = await axios.post(`${url}/auth/logout`)
  return response.data
}
export { FetchUserData, ResetPasswordReq, LoginReq, SignupReq, OtpVerifyReq, ResendOtpReq, ForgotPasswordReq, LogOutReq }
