import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Plus, Sparkles } from "lucide-react"
import WorkspaceCard from "./WorkspaceCard"
import CreateWorkspaceModal from "./CreateWorkspaceModal"

const greetings = [
  "Back in action, Satya",
  "Ready to build something great, Satya?",
  "Satya — your wireframes are waiting",
  "Good to see you, Satya",
  "Let's make some magic, Satya",
]

const subtitles = [
  "What are we building today?",
  "Your workspaces are ready to go",
  "Pick up where you left off",
  "Time to turn ideas into reality",
  "Let's get those creative juices flowing",
]

const dummyWorkspaces = [
  { id: 1, name: "Landing Page Redesign", description: "Modern landing page with hero, features, and pricing sections" },
  { id: 2, name: "Dashboard UI", description: "Admin dashboard with charts and data tables" },
  { id: 3, name: "E-commerce Store", description: "Product listing, cart, and checkout flow" },
  { id: 4, name: "Blog Platform", description: "Responsive blog with markdown support and comments" },
]

const DashboardBody = () => {
  const [workspaces, setWorkspaces] = useState(dummyWorkspaces)
  const [showModal, setShowModal] = useState(false)
  const [deleteTarget, setDeleteTarget] = useState(null)
  const greeting = useMemo(() => greetings[Math.floor(Math.random() * greetings.length)], [])
  const subtitle = useMemo(() => subtitles[Math.floor(Math.random() * subtitles.length)], [])

  const handleDelete = (id) => {
    setWorkspaces((prev) => prev.filter((w) => w.id !== id))
    setDeleteTarget(null)
  }

  const handleCreate = ({ name, description }) => {
    const newWorkspace = {
      id: Date.now(),
      name,
      description,
    }
    setWorkspaces((prev) => [newWorkspace, ...prev])
    setShowModal(false)
  }

  const handleOpen = (id) => {
    console.log("Opening workspace:", id)
  }

  return (
    <div className="flex-1 h-screen overflow-y-auto">
      <div className="max-w-6xl mx-auto px-8 py-8">
        {/* Header */}
        <div className="mb-14 mt-6">
          <div className="flex items-center gap-4 mb-3">
            <h1 className="text-(--text) text-5xl font-bold tracking-tight">{greeting}</h1>
            <Sparkles className="dark:invert text-(--text-muted)" size={32} />
          </div>
          <p className="text-(--text-muted) text-lg">{subtitle}</p>
        </div>

        {/* Workspaces Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-(--text) text-xl font-semibold">Workspaces</h2>
          <motion.button
            onClick={() => setShowModal(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-blue-500 text-white px-5 py-2.5 rounded-xl shadow-(--shadow-btn) cursor-pointer hover:bg-blue-600 transition-all text-sm font-medium"
          >
            <Plus size={18} />
            New Workspace
          </motion.button>
        </div>

        {/* Workspaces Grid */}
        {workspaces.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            <AnimatePresence>
              {workspaces.map((workspace) => (
                <WorkspaceCard
                  key={workspace.id}
                  workspace={workspace}
                  onDelete={setDeleteTarget}
                  onOpen={handleOpen}
                />
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="bg-(--bg) dark:border-t dark:border-(--highlight) rounded-full p-6 shadow-(--shadow-btn) mb-4">
              <Plus className="dark:invert" size={32} />
            </div>
            <h3 className="text-(--text) text-lg font-medium mb-1">No workspaces yet</h3>
            <p className="text-(--text-muted) text-sm mb-6">Create your first workspace to get started</p>
            <motion.button
              onClick={() => setShowModal(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-xl shadow-(--shadow-btn) cursor-pointer hover:bg-blue-600 transition-all text-sm font-medium"
            >
              <Plus size={18} />
              Create Workspace
            </motion.button>
          </div>
        )}
      </div>

      <CreateWorkspaceModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onCreate={handleCreate}
      />

      <AnimatePresence>
        {deleteTarget && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={() => setDeleteTarget(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-(--bg-dark) border border-(--border) rounded-2xl p-6 w-full max-w-sm shadow-2xl"
            >
              <h3 className="text-(--text) text-lg font-semibold mb-2">Delete workspace?</h3>
              <p className="text-(--text-muted) text-sm mb-6">
                This will permanently delete this workspace and all its contents.
              </p>
              <div className="flex gap-3">
                <motion.button
                  onClick={() => setDeleteTarget(null)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 py-2.5 rounded-xl bg-(--bg) dark:border-t dark:border-(--highlight) text-(--text) shadow-(--shadow-btn) cursor-pointer hover:brightness-95 dark:hover:brightness-125 transition-all text-sm"
                >
                  Cancel
                </motion.button>
                <motion.button
                  onClick={() => handleDelete(deleteTarget)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 py-2.5 rounded-xl bg-red-500 text-white shadow-(--shadow-btn) cursor-pointer hover:bg-red-600 transition-all text-sm"
                >
                  Delete
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default DashboardBody
