import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { X } from "lucide-react"

const CreateWorkspaceModal = ({ isOpen, onClose, onCreate }) => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")

  const handleCreate = () => {
    if (!name.trim()) return
    onCreate({ name: name.trim(), description: description.trim() || undefined })
    setName("")
    setDescription("")
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-(--bg-dark) border border-(--border) rounded-2xl p-6 w-full max-w-md shadow-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-(--text) text-xl font-semibold">New Workspace</h2>
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="cursor-pointer p-1 rounded-lg hover:bg-(--bg-light) transition-colors"
              >
                <X className="dark:invert" size={20} />
              </motion.button>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-(--text-muted) text-sm mb-1.5">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="My Awesome Project"
                  className="w-full bg-(--bg) dark:border dark:border-(--border) dark:border-t-2 dark:border-t-(--highlight) text-(--text) rounded-xl px-4 py-2.5 outline-none placeholder:text-(--text-muted)/50"
                  autoFocus
                />
              </div>
              <div>
                <label className="block text-(--text-muted) text-sm mb-1.5">Description (optional)</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="What's this workspace about?"
                  rows={3}
                  className="w-full bg-(--bg) dark:border dark:border-(--border) dark:border-t-2 dark:border-t-(--highlight) text-(--text) rounded-xl px-4 py-2.5 outline-none resize-none placeholder:text-(--text-muted)/50"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 py-2.5 rounded-xl bg-(--bg) dark:border-t dark:border-(--highlight) text-(--text) shadow-(--shadow-btn) cursor-pointer hover:brightness-95 dark:hover:brightness-125 transition-all"
              >
                Cancel
              </motion.button>
              <motion.button
                onClick={handleCreate}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 py-2.5 rounded-xl bg-blue-500 text-white shadow-(--shadow-btn) cursor-pointer hover:bg-blue-600 transition-all"
              >
                Create
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CreateWorkspaceModal
