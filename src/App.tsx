import { motion } from "motion/react";

function App() {

  return <div className="min-h-screen
  [background-image:radial-gradient(theme(colors.gray.300)_1px,transparent_1px)]
  [background-size:theme(spacing.6)_theme(spacing.6)]
  grid place-items-center
  ">
    <div className="h-80 w-80 relative">
      <motion.div
        className="bg-sky-300 p-2 rounded-lg w-max -translate-x-1/2 left-3/4 top-1/5 absolute"
        whileTap={{ scale: 1.1 }}
        drag
        dragMomentum={false}
      >
        <span className="">opa, joia?</span>
        <div className="h-4 w-4 -z-10 -translate-y-1 bg-sky-300 absolute rotate-45"></div>
      </motion.div>

      <motion.pre
        className="bg-orange-50 p-2 w-max absolute top-46 -left-2"
        whileTap={{ scale: 1.1 }}
        drag
        dragMomentum={false}
      >
        - fullstack dev @ cef<br />
        - dj @ nights ;)
      </motion.pre>

      <motion.div
        aria-comment="uma IA nunca ficaria mexendo nesses valores até alinhar que nem eu fiz"
        className="absolute -top-4 -left-4 w-44 h-42 bg-position-[right_-48px_center] bg-size-[auto_254px] bg-[url(/self2.png)] active:bg-[url(/click2.png)] "
        whileTap={{ scale: 1.1 }}
        drag
        dragMomentum={false}
      >
      </motion.div>
    </div>
  </div>
}

export default App
