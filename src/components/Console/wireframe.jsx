import { motion } from "motion/react";
import 'tldraw/tldraw.css'
import { Tldraw } from "tldraw";
import { FileIcon, FilePlusCorner, FolderIcon, Send } from "lucide-react";
import {  useState } from "react"
import { CgFileAdd } from "react-icons/cg";

const Wireframe = ({WireframePrompt}) => {
  const [text, settext] = useState(WireframePrompt.current)
  
  return (
    <div className="w-full h-full flex flex-col items-center justify-between px-10 py-5">
      <div className=" w-full h-full rounded-2xl py-10">
        <Tldraw className="rounded-2xl"/>
      </div>
      <div className="bg-(--bg) dark:border-t-1 dark:outline outline-(--border) dark:border-(--highlight) shadow-(--shadow-btn)  w-full max-w-200 rounded-2xl flex flex-col gap-5 p-5">
        <div>
          <FilePlusCorner />
        </div>
        <div className="flex items-end gap-5" >
          <textarea name="" className="text-(--text-muted) resize-none outline-none w-full " value={text}
            onChange={(e) => {
              settext(e.target.value);
              WireframePrompt.current = e.target.value
              e.target.style.height = "auto";
              e.target.style.height = `${Math.min(e.target.scrollHeight, 100)}px`
            }} id="" placeholder="Describe Your Design(Optional)"></textarea>
            <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.8}} className="bg-blue-400 p-1 rounded-md hover:cursor-pointer"><Send fill="white"/></motion.button>
        </div>
      </div>
    </div>
  )
}
export default Wireframe