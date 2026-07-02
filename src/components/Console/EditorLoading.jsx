import React from 'react';
import { motion } from 'framer-motion';

const EditorLoadingScreen = () => {
  return (
    <div className="absolute z-10 w-full h-full bg-gray-900/20 backdrop-blur-[1px] rounded-3xl overflow-hidden border border-gray-800 shadow-2xl flex items-center justify-center">
      {/* Container Background */}
      <div className="absolute inset-0 bg-linear-to-br from-gray-900/20 to-black/20" />

      {/* Sun Beam Animation */}
      <motion.div
        initial={{ left: '-100%', top: '-100%' }}
        animate={{ 
          left: ['-100%', '100%'], 
          top: ['-100%', '100%'] 
        }}
        transition={{
          duration: 2.5,
          ease: "linear",
          repeat: Infinity,
        }}
        className="absolute w-24 h-[500%] bg-white opacity-10 rotate-45 blur-xl -translate-x-1/2 -translate-y-1/2"
      />

      {/* Subtle Border Glow */}
      <div className="absolute inset-0 border border-white/5 rounded-3xl pointer-events-none" />
      
      {/* Decorative center icon or branding */}
      <div className="relative z-10 flex flex-col items-center gap-3 animate-pulse">
        <div className="w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center">
          <div className="w-6 h-6 bg-white/20 rounded-full" />
        </div>
        <p className="text-white/30 text-xs font-medium tracking-widest uppercase">Generating...</p>
      </div>
    </div>
  );
};

export default EditorLoadingScreen;