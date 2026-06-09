import { Sandpack, SandpackProvider, SandpackPreview, SandpackLayout } from "@codesandbox/sandpack-react";
import { Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const Preview = ({ EditPrompt, EditorValue }) => {
  const [editDetails, setEditDetails] = useState(EditPrompt.current)
  console.log(EditorValue);

  return (
    <div className="w-full h-full flex flex-col items-center justify-between px-10 py-5">
      <div className="w-full bg-amber-500 flex-1 min-h-0 rounded-2xl my-10 overflow-hidden">
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
              "motion": "latest"
            }
          }}
          style={{
            "--sp-layout-height": "700px",
          }}
        >
          <SandpackLayout className="h-full"
          >
            <SandpackPreview className="h-full" />
          </SandpackLayout>
        </SandpackProvider>
      </div>
      <div className="bg-(--bg) dark:border-t-1 dark:outline outline-(--border) dark:border-(--highlight) shadow-(--shadow-btn)  w-full max-w-200 rounded-2xl flex flex-col gap-5 p-5">
        <div className="flex items-end gap-5" >
          <textarea name="" className="text-(--text-muted) resize-none outline-none w-full " value={editDetails}
            onChange={(e) => {
              setEditDetails(e.target.value);
              EditPrompt.current = e.target.value;
              e.target.style.height = "auto";
              e.target.style.height = `${Math.min(e.target.scrollHeight, 100)}px`
            }} id="" placeholder="Make quick edit to component"></textarea>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} className="bg-blue-400 p-1 rounded-md hover:cursor-pointer"><Send fill="white" /></motion.button>
        </div>
      </div>
    </div>
  )
}
export default Preview