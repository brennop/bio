import { motion } from "motion/react";

export default function Card() {
  return <motion.div
    className="bg-emerald-300 p-2 rounded-lg w-32"
    whileTap={{ scale: 1.1 }}
    drag
    dragMomentum={false}
  >
    opa, joia?
  </motion.div>
}
