import { useState } from "react"
import { LayoutDashboard, Settings, Moon, Sun, HelpCircle, LogOut, ChevronUp, User } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
]

const Sidebar = ({ theme, settheme }) => {
  const [showUserMenu, setShowUserMenu] = useState(false)

  const handleDarkmode = () => {
    theme == "dark" ? settheme("light") : settheme("dark")
  }

  return (
    <div className="bg-(--bg) border-r border-(--border) flex flex-col w-60 h-screen">
      {/* Header */}
      <div className="px-5 py-4 border-b border-(--border)">
        <h2 className="text-(--text) font-semibold text-sm tracking-wide">WireframeAI</h2>
      </div>

      {/* Navigation */}
      <div className="flex-1 px-3 py-4 space-y-0.5">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors cursor-pointer
              ${item.active
                ? "bg-(--bg-light) text-(--text) font-medium"
                : "text-(--text-muted) hover:bg-(--bg-light)/50 hover:text-(--text)"
              }`}
          >
            <item.icon size={18} />
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      {/* Bottom */}
      <div className="px-3 py-3 border-t border-(--border) space-y-0.5">
        <button
          onClick={handleDarkmode}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-(--text-muted) hover:bg-(--bg-light)/50 hover:text-(--text) transition-colors cursor-pointer"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          <span>{theme === "dark" ? "Light mode" : "Dark mode"}</span>
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-(--text-muted) hover:bg-(--bg-light)/50 hover:text-(--text) transition-colors cursor-pointer">
          <Settings size={18} />
          <span>Settings</span>
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-(--text-muted) hover:bg-(--bg-light)/50 hover:text-(--text) transition-colors cursor-pointer">
          <HelpCircle size={18} />
          <span>Help</span>
        </button>

        {/* User */}
        <div className="relative pt-2 mt-2 border-t border-(--border)">
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-(--text-muted) hover:bg-(--bg-light)/50 hover:text-(--text) transition-colors cursor-pointer"
          >
            <div className="w-7 h-7 rounded-md bg-(--bg-light) dark:border dark:border-(--border) flex items-center justify-center">
              <User size={14} className="dark:invert" />
            </div>
            <span className="flex-1 text-left text-(--text)">Satya</span>
            <ChevronUp size={14} className={`transition-transform ${showUserMenu ? "rotate-180" : ""}`} />
          </button>

          <AnimatePresence>
            {showUserMenu && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="absolute bottom-full left-0 right-0 mb-1 rounded-lg dark:border dark:border-(--border) bg-(--bg) p-1 shadow-xl"
              >
                <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm text-(--text-muted) hover:bg-(--bg-light)/50 hover:text-(--text) transition-colors cursor-pointer">
                  <User size={16} />
                  <span>Account</span>
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm text-red-400 hover:bg-red-500/10 transition-colors cursor-pointer">
                  <LogOut size={16} />
                  <span>Logout</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
