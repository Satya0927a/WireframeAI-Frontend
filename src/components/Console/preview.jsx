import { Sandpack, SandpackProvider, SandpackPreview, SandpackLayout } from "@codesandbox/sandpack-react";
import { Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { Edit } from "../../services/backend/generate";

const Preview = ({ setEditorValue,EditorValue,isHidden ,iframe,isGenerating,setisGenerating}) => {

  return (
    <div className={`w-full h-full ${isHidden?"hidden":"flex"} flex-col items-center justify-between px-10 py-5`}>
      <div className="w-full bg-amber-500 h-fit rounded-2xl my-10 overflow-hidden">
        <SandpackProvider
          options={{
            recompileMode: "delayed",
            recompileDelay: 500,
            externalResources: [
              "https://cdn.tailwindcss.com",
            ],
          }}
          template="react"
          files={{
            "/App.js": EditorValue
          }}
          customSetup={{
            dependencies: {
              "motion": "latest",
              "lucide-react":"latest"
            }
          }}
          style={{
            "--sp-layout-height": "550px",
          }}
        >
          <SandpackLayout className="h-full"
          >
            <SandpackPreview className="h-full"  onLoad={()=>{iframe.current = document.querySelector('iframe')}} />
          </SandpackLayout>
        </SandpackProvider>
      </div>
      <GenerateInput Current_code={EditorValue} setEditorValue={setEditorValue} setisGenerating={setisGenerating} isGenerating={isGenerating}/>
    </div>
  )
}


const GenerateInput = ({Current_code,setEditorValue,isGenerating,setisGenerating}) => {
  const [editDetails, setEditDetails] = useState("")
  //?sends Edit request to the server
  async function handleReqSendEdit() {
    if(!editDetails || !Current_code){
      alert("Edit description or Code invalid")
      return
    }
    try {
      setisGenerating(true)
      const data = await Edit(Current_code,editDetails)
      setisGenerating(false)
      setEditorValue(data)
      setEditDetails("")
    } catch (error) {
      console.log(error.response);
    }
    
  }

  return (
    <div className="relative p-1 rounded-2xl w-full max-w-2xl mx-auto ">
      {/* Animated Rainbow Glow Background */}
      <motion.div
        className="absolute -inset-0.5 rounded-2xl opacity-75 blur-lg"
        animate={{
          background: [
            "linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3, #ff0000)",
            "linear-gradient(180deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3, #ff0000)",
            "linear-gradient(270deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3, #ff0000)",
            "linear-gradient(360deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3, #ff0000)",
            "linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3, #ff0000)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Main Input Container */}
      <div className="relative flex items-center bg-(--bg) dark:border-t dark:outline outline-(--border) dark:border-(--highlight) rounded-xl px-6 py-4 shadow-2xl">
        <input
          type="text"
          placeholder="Edit your component quickly..."
          onChange={(e)=>{setEditDetails(e.target.value)}}
          value={editDetails}
          className={`w-full bg-transparent text-white placeholder-gray-500 text-lg outline-none font-medium `}
        />
        
        {/* Generate Button */}
        <motion.button
          onClick={handleReqSendEdit}
          disabled={isGenerating}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center justify-center w-12 h-12 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors ${isGenerating ? "hover:cursor-not-allowed opacity-50" : "hover:cursor-pointer"}`}
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="white" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </motion.button>
      </div>
    </div>
  );
};

export default Preview