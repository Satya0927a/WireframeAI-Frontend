import { motion } from "motion/react"
import { Editor } from "@monaco-editor/react"
import { useRef, useState } from "react"
import { Code, Code2 } from "lucide-react"
import Preview from "./preview"
import Wireframe from "./wireframe"
import AIModelSelector from "./modelDropdownbtn"

const DefaultEditorValue = `//Your code will appear here
//you can directly edit the code, the changes will reflect on the preview 
const Welcome  = ()=>{
    return(
        <section className={"h-screen flex justify-center items-center flex flex-col"}>
            <div className={"text-5xl max-sm:text-4xl"}>Welcome to wireframe</div>
            <p>The Generated code will be previewed here</p>
        </section>
    )
}
export default Welcome`

const ConsoleBody = ({ theme }) => {
  const [leftwidth, setleftwidth] = useState(50)
  const [EditorValue, setEditorValue] = useState(DefaultEditorValue)
  console.log(EditorValue);

  const [leftwindowMode, setleftwinndowMode] = useState(0)
  const WireframePrompt = useRef("");
  const EditPrompt = useRef("");

  const handleMouseDown = () => {
    const handleMouseMove = (e) => {
      setleftwidth(Math.max(30, Math.min(80, (e.clientX / window.innerWidth) * 100)));
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };
  return (
    <div className="flex items-center text-(--text)">
      <div className="bg-(--bg-dark) flex flex-col items-center min-w-0 h-screen" style={{ width: `${leftwidth}%` }}>
        <div className="flex items-center mt-5  justify-center relative w-[94%]">
          <div className="flex bg-(--bg) dark:border-1 dark:border-(--border) shadow-(--shadow-btn)    h-10 w-50 justify-evenly rounded-full py-1 px-1 relative">
            <button onClick={() => { setleftwinndowMode(0) }} className={` z-[1] hover:cursor-pointer ${leftwindowMode == 0 ? "text-(--text)" : "text-(--text-muted)"}`}>Preview</button>
            <button onClick={() => { setleftwinndowMode(1) }} className={`z-[1] hover:cursor-pointer ${leftwindowMode == 1 ? "text-(--text)" : "text-(--text-muted)"}`}>Wireframe</button>
            <motion.div animate={leftwindowMode == 0 ? { left: 4 } : { left: 85, width: "55%" }} className="absolute bg-(--bg-light) dark:border-1 dark:border-(--border) dark:border-t-1 dark:border-t-(--highlight) shadow-(--shadow-btn) top-1  h-[80%] w-[45%] rounded-full"></motion.div>
          </div>
          <div className="absolute right-0">
            <AIModelSelector/>
          </div>
        </div>
        {leftwindowMode == 0 ? <Preview EditPrompt={EditPrompt} EditorValue={EditorValue} /> : <Wireframe WireframePrompt={WireframePrompt} setEditorValue={setEditorValue} />}
      </div>
      <div onMouseDown={(e) => { e.preventDefault(); handleMouseDown() }} className="h-screen w-2 cursor-col-resize"></div>
      <div className="bg-[#1E1E1E] h-screen rounded-3xl overflow-hidden flex-1 min-w-0 flex flex-col " >
        <div className="py-5 px-6 flex gap-2 items-center">
          <div className="bg-(--bg-light) p-1 dark:border-t-1 dark:border-(--highlight) rounded-[6px]">
            <Code2 size={20} color="black" className="dark:invert" />
          </div>
          <h1 className=" text-white">Code editor</h1>
        </div>
        <Editor onChange={(value, e) => { setEditorValue(value) }} value={EditorValue} defaultLanguage="javascript" width="100%" height="100%" theme={`${theme == "dark" ? "vs-dark" : "light"}`} defaultValue="//Your code will appear here"></Editor>
      </div>
    </div>
  )
}
export default ConsoleBody