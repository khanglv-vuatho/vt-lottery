import { memo } from 'react'
import { twMerge } from 'tailwind-merge'

const Ball = ({ item, className }: { item: string; className?: string }) => {
  return (
    <div
      className={twMerge('flex size-11 items-center justify-center gap-0.5 rounded-full text-sm font-bold', className)}
      style={{
        background: 'radial-gradient(100% 100% at 0% 0%, #FFFFFF 0%, #FFFFFF 70.5%, #BFBFBF 100%)'
      }}
    >
      {item.split('').map((item, index) =>
        item === '?' ? (
          <span
            style={{
              borderStyle: 'inset'
            }}
            key={index}
            className='rounded-[2px] border border-gray-200 px-[2px] text-transparent'
          >
            {item}
          </span>
        ) : (
          <span key={index}>{item}</span>
        )
      )}
    </div>
  )
}

export default memo(Ball)
