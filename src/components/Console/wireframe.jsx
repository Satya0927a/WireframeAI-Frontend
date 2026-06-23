import { motion } from "motion/react";
import 'tldraw/tldraw.css'
import { Tldraw} from "tldraw";
import { FileIcon, FilePlusCorner, FolderIcon, Send } from "lucide-react";
import {  useRef, useState } from "react"
import { CgFileAdd } from "react-icons/cg";
import { Generate } from "../../services/backend/generate";
const Wireframe = ({WireframePrompt,setEditorValue,isHidden,TLeditorRef}) => {
  const [text, settext] = useState(WireframePrompt.current)
  async function handleGenerate(){
    const shapes = TLeditorRef.current.getCurrentPageShapeIds();
    if(shapes.size === 0){
      alert("No shapes on the canvas")
      return
    }
    const {blob} = await TLeditorRef.current.toImage([...shapes],{
      format:"png",
      background:"true"
    })
    
    try {
      await Generate(blob,text,setEditorValue)
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div className={`w-full h-full ${isHidden?"hidden":"flex"} flex-col items-center justify-between px-10 py-5`}>
      <div className=" w-full h-full rounded-2xl py-10 relative z-0">
        <Tldraw className="rounded-2xl" persistenceKey="DefaultKeyForNow" autoFocus={false} onMount={(e)=>{
          TLeditorRef.current = e;
        }}/>
      </div>
      <div className="bg-(--bg) dark:border-t dark:outline outline-(--border) dark:border-(--highlight) shadow-(--shadow-btn)  w-full max-w-200 rounded-2xl flex flex-col gap-5 p-5">
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
            <motion.button onClick={handleGenerate} whileHover={{scale:1.1}} whileTap={{scale:0.8}} className="bg-blue-400 p-1 rounded-md hover:cursor-pointer"><Send fill="white"/></motion.button>
        </div>
      </div>
    </div>
  )
}
export default Wireframe