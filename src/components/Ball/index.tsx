import { memo } from 'react'
import { twMerge } from 'tailwind-merge'

const Ball = ({ item, className }: { item: string; className?: string }) => {
  return (
    <div
      className={twMerge('flex size-[38px] items-center justify-center gap-[1px] rounded-full text-sm font-bold', className)}
      style={{
        background: 'radial-gradient(100% 100% at 0% 0%, #FFFFFF 0%, #FFFFFF 70.5%, #BFBFBF 100%)'
      }}
    >
      {item.split('').map((item, index) =>
        item === '?' ? (
          <span
            style={
              {
                // borderStyle: 'inset'
              }
            }
            key={index}
            className='rounded-[2px] border border-[#a6a6a6] px-[2px] text-primary-black'
          >
            {item}
          </span>
        ) : (
          <span key={index} className='font-bold text-primary-black'>
            {item}
          </span>
        )
      )}
    </div>
  )
}

export default memo(Ball)
