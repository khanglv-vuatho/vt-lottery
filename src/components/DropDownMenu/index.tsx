import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useCallback } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  direction?: 'left' | 'top' | 'right' | 'bottom'
  className?: string | undefined
}

const DropDownMenu: React.FC<Props> = ({ isOpen, onClose, children, className, direction = 'top' }) => {
  const menuVariants = {
    initial: direction === 'left' || direction === 'right' ? { x: direction === 'left' ? '-100%' : '100%' } : { scaleY: 0 },
    animate: {
      x: direction === 'left' || direction === 'right' ? 0 : undefined,
      scaleY: direction === 'top' || direction === 'bottom' ? 1 : undefined,
      transition: { ease: 'easeInOut', duration: 0.2 }
    },
    exit: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : undefined,
      scaleY: direction === 'top' || direction === 'bottom' ? 0 : undefined,
      opacity: 0,
      transition: { ease: 'easeInOut', duration: 0.2 }
    }
  }

  const origin = { top: 'origin-top', left: 'origin-left', right: 'origin-right', bottom: 'origin-bottom' }

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    },
    [onClose]
  )

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'auto'
      document.removeEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, handleKeyDown])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial='initial'
          animate='animate'
          exit='exit'
          variants={menuVariants}
          className={twMerge(`fixed bottom-0 left-0 right-0 z-[1000] flex flex-col items-start gap-4 overflow-hidden p-2 ${origin[direction]}`, className)}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default DropDownMenu
