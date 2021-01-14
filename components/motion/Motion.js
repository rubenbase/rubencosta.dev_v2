import { motion } from 'framer-motion'
const Motion = ({ children }) => {
  const spring = {
    type: 'spring',
    damping: 10,
    stiffness: 0.5,
  }

  //   resdelta has to be lower
  return (
    <motion.div transition={spring} animate={{ x: 100 }}>
      {children}
    </motion.div>
  )
}

export default Motion
