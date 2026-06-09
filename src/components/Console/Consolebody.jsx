import { motion } from "motion/react"
import { Editor } from "@monaco-editor/react"
import { useRef, useState } from "react"
import { Code, Code2 } from "lucide-react"
import Preview from "./preview"
import Wireframe from "./wireframe"
const ConsoleBody = ({theme})=>{
  const [leftwidth,setleftwidth] = useState(50)
  const [EditorValue,setEditorValue] = useState("")
  console.log(EditorValue);
  
  const [leftwindowMode,setleftwinndowMode] = useState(0)
  const WireframePrompt = useRef("");
  const EditPrompt = useRef("");

  const handleMouseDown = () => {
    const handleMouseMove = (e) => {
      setleftwidth(Math.max(30, Math.min(80,(e.clientX / window.innerWidth)*100)));
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };
  return(
    <div className="flex items-center text-(--text)">
      <div className="bg-(--bg-dark) flex flex-col items-center min-w-0 h-screen" style={{width:`${leftwidth}%`}}>
        <div className="flex gap-5">
          <button onClick={()=>{setleftwinndowMode(0)}} className={`${leftwindowMode == 0?"bg-red-500":""}`}>Preview</button>
          <button onClick={()=>{setleftwinndowMode(1)}} className={`${leftwindowMode == 1?"bg-red-500":""}`}>Wireframe</button>
        </div>
        {leftwindowMode == 0?<Preview EditPrompt={EditPrompt} EditorValue={EditorValue}/>:<Wireframe WireframePrompt={WireframePrompt}/>}
      </div>
      <div onMouseDown={(e)=>{e.preventDefault();handleMouseDown()}}   className="h-screen w-2 cursor-col-resize"></div>
      <div className="bg-[#1E1E1E] h-screen rounded-3xl overflow-hidden flex-1 min-w-0 flex flex-col " >
        <h1 className="py-5 px-6 flex gap-2 text-white"><Code2 size={25} color="white" className="bg-red-500 rounded-[6px]"/>Code editor</h1>
        <Editor onChange={(value,e)=>{setEditorValue(value)}} defaultLanguage="javascript" width="100%" height="100%" theme={`${theme == "dark"?"vs-dark":"light"}`} defaultValue="//Your code will appear here"></Editor>
      </div>
    </div>
  )
}
export default ConsoleBody