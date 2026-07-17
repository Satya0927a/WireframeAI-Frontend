import useAuth from "../../context/Hooks/AuthHook"
import { Navigate, useNavigate } from "react-router-dom"
import DashboardLoading from "../Dashboard/DashboardLoading"
const Protected = ({children})=>{
  const {user,loading} = useAuth()
  if(loading){
    return <DashboardLoading/>
  }
  else if(!user){
    return <Navigate to={'/login'}></Navigate>
  }
  else{
    return children;
  }
}

export default Protected