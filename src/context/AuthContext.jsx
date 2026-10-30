import { createContext, useEffect, useRef, useState } from "react";
import { FetchUserData } from "../services/backend/auth";
import DashboardLoading from "../components/Dashboard/DashboardLoading";

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null)
  const [loading, setloading] = useState(true)
  const challenge = useRef("");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await FetchUserData()
        setuser(data.data);
      } catch (error) {
        console.log(error);
      }
      finally {
        setloading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <AuthContext.Provider value={{ user, setuser, loading, challenge }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext }