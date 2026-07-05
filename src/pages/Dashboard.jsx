import { useEffect, useState } from "react"
import Sidebar from "../components/Dashboard/sidebar"
import DashboardBody from "../components/Dashboard/DashboardBody"

const DashboardPage = () => {
  const [theme, settheme] = useState("dark")

  useEffect(() => {
    document.documentElement.className = theme
  }, [theme])

  return (
    <div className="flex bg-(--bg-dark)">
      <section>
        <Sidebar theme={theme} settheme={settheme} />
      </section>
      <section className="flex-1">
        <DashboardBody />
      </section>
    </div>
  )
}

export default DashboardPage
