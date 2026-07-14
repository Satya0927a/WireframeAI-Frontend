import { createContext, useEffect, useState } from "react";
import { FetchUserData } from "../services/backend/auth";
import DashboardLoading from "../components/Dashboard/DashboardLoading";

const AuthContext = createContext()

const AuthProvider = ({children})=>{
  const [user,setuser] = useState(null)
  const [loading,setloading] = useState(true)

  useEffect(()=>{
    async function fetchData() {
      try{
        const data = await FetchUserData()
        console.log(data);
        setuser(data.data);
      }catch(error){
        const data = error.response?.data
        data?console.log(data) : null;
      }
      finally {
        setloading(false)
      }
    }
    fetchData()
  },[])

  return(
    <AuthContext.Provider value={{user,setuser,loading}}>
      {children}
    </AuthContext.Provider>
  )
}

export {AuthProvider, AuthContext}