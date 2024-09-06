import { memo } from 'react'
import { twMerge } from 'tailwind-merge'

const Ball = ({ number, isActive, className }: { number: string | number; isActive: boolean; className?: string }) => {
  return (
    <div
      style={{
        boxShadow: isActive ? '0px 2px 2px 0px #00000033 inset' : 'none'
      }}
      className={twMerge('fontCarena flex size-10 flex-shrink-0 items-center justify-center rounded-full font-bold text-[#C86700]', isActive ? 'bg-[#C86700] text-white' : 'bg-white', className)}
    >
      <p className=''>{number}</p>
    </div>
  )
}

export default memo(Ball)
