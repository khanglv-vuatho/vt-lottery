import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

const BackgroundGradient = ({ children, className, isHiddenAnimation }: { children: React.ReactNode; className?: string; isHiddenAnimation?: boolean }) => {
  return (
    <div className={twMerge('relative', className)}>
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.2, 0.9], zIndex: -1 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        className={twMerge('absolute inset-0 rounded-full bg-white blur-sm', isHiddenAnimation ? 'hidden' : '')}
      />
      {children}
    </div>
  )
}

export default BackgroundGradient
