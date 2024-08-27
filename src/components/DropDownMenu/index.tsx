import { AnimatePresence, motion, Variants } from 'framer-motion'
import { useEffect } from 'react'
import { twMerge } from 'tailwind-merge'

type Direction = 'left' | 'top' | 'right'

type Props = {
  isOpen: boolean
  children: React.ReactNode
  direction?: Direction
  className?: string
}

const DropDownMenu: React.FC<Props> = ({ isOpen, children, className, direction = 'top' }) => {
  const menuVariants: Variants = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 }
  }

  const originClass: Record<Direction, string> = {
    top: 'origin-top',
    left: 'origin-left',
    right: 'origin-right'
  }

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial='initial'
          animate='animate'
          exit='exit'
          variants={menuVariants}
          transition={{ duration: 0.2 }}
          className={twMerge(
            `3xl:top-[80px] 3xl:h-[calc(100dvh-80px)] fixed inset-x-0 top-[70px] z-[1000] flex h-[calc(100dvh-70px)] flex-col items-start gap-4 overflow-hidden p-2 ${originClass[direction]}`,
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default DropDownMenu
