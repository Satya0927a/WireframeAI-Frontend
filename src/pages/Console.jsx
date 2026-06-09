import { motion } from "motion/react"
import Sidebar from "../components/Console/sidebar"
import ConsoleBody from "../components/Console/Consolebody"
import { useEffect, useEffectEvent, useState } from "react"
const Console = () => {
  const [theme,settheme] = useState("dark");
  useEffect(()=>{
      document.documentElement.className = theme
  },[theme])

  return (
    <div className="flex bg-(--bg-dark)">
      <section>
        <Sidebar theme={theme} settheme={settheme}/>
      </section>
      <section className="flex-1">
        <ConsoleBody theme={theme}/>
      </section>
    </div>
  )
}
export default Console