import { motion } from "framer-motion";

export default function Window({ children, scale }) {
  return (
    <motion.div
      drag={window.innerWidth < 1024 ? false : true}
      dragMomentum={false}
      animate={{ scale: scale, originY: 0.1 }}
      className="w-full max-w-3xl border-2 border-gray-900 pb-4 rounded-lg h-full
     bg-white overscroll-none"
    >
      {children}
    </motion.div>
  );
}
