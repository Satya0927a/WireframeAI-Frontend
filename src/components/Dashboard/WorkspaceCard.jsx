import { motion } from "motion/react"
import { Trash2, FolderOpen } from "lucide-react"

const WorkspaceCard = ({ workspace, onDelete, onOpen }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      onClick={() => onOpen(workspace.id)}
      className="bg-(--bg) dark:border dark:border-(--border) dark:border-t-2 dark:border-t-(--highlight) shadow-(--shadow-btn) rounded-2xl p-5 flex flex-col gap-3 group cursor-pointer hover:brightness-95 dark:hover:brightness-125 transition-all"
    >
      <div className="flex items-start justify-between">
        <div className="bg-(--bg-light) dark:border-t dark:border-(--highlight) rounded-xl p-3 shadow-(--shadow-btn)">
          <FolderOpen className="dark:invert" size={24} />
        </div>
        <motion.button
          onClick={(e) => { e.stopPropagation(); onDelete(workspace.id) }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer p-2 hover:bg-red-500/10 rounded-lg"
        >
          <Trash2 size={18} className="text-red-400" />
        </motion.button>
      </div>
      <h3 className="text-(--text) font-semibold text-lg mt-2">{workspace.name}</h3>
      {workspace.description && (
        <p className="text-(--text-muted) text-sm line-clamp-2">{workspace.description}</p>
      )}
    </motion.div>
  )
}

export default WorkspaceCard
