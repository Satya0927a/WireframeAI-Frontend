import { motion } from "motion/react"
import { BoxesIcon, LeafIcon, Search, Settings, User } from "lucide-react"
import { BiQuestionMark } from "react-icons/bi"
import { RiAiGenerate } from "react-icons/ri"
import { CgDarkMode } from "react-icons/cg"

const Sidebar = ({theme,settheme}) => {
  const handleDarkmode = ()=>{
    theme == "dark"?settheme("light"):settheme("dark")
  }
  return (
    <div className=" bg-(--bg-dark) border-r-1 border-(--border) flex flex-col w-15 py-5 h-screen justify-between items-center">
      <div className="flex flex-col gap-5 *:bg-(--bg)   dark:*:border-t-1 dark:*:border-t-(--highlight) dark:*:border-(--border)  *:shadow-(--shadow-btn) *:rounded-full  *:h-10 *:w-10 *:flex *:justify-center *:items-center">
        <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.9}} className="cursor-pointer">
          <LeafIcon className="dark:invert"/>
        </motion.button>

        <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.9}} className="cursor-pointer">
          <Search  className="dark:invert"/>
        </motion.button>

        <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.9}} className="cursor-pointer">
          <RiAiGenerate  size={20} className="dark:invert"/>
        </motion.button>

        <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.9}} className="cursor-pointer">
          <BoxesIcon className="dark:invert"/>
        </motion.button>

        <motion.button onClick={handleDarkmode} whileHover={{scale:1.1}} whileTap={{scale:0.9}} className="cursor-pointer">
          <CgDarkMode className="dark:invert"/>
        </motion.button>
      </div>
      <div className="flex flex-col gap-5 *:bg-(--bg) dark:*:border-t-1 dark:*:border-(--highlight) *:shadow-(--shadow-btn)  *:rounded-full *:h-10 *:w-10 *:flex *:justify-center *:items-center">

        <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.9}} className="cursor-pointer">
          <Settings className="dark:invert"/>
        </motion.button>

        <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.9}} className="cursor-pointer">
          <BiQuestionMark className="dark:invert"/>
        </motion.button>

        <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.9}} className="cursor-pointer">
          <User className="dark:invert"/>
        </motion.button>
      </div>
    </div>
  )
}
export default Sidebar