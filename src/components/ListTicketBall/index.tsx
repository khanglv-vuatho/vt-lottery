import { calculateQuestionMarkPercentage } from '@/utils'
import { memo } from 'react'
import Ball from '../Ball'

const ListTicketBall = ({ item }: { item: string[] }) => {
  const percentage = calculateQuestionMarkPercentage(item)
  return (
    <div className='relative w-full overflow-hidden rounded-2xl bg-[#e4e4e4]'>
      <div className='relative z-50 flex w-full items-center justify-center p-4'>
        <div className='grid w-fit grid-cols-6 items-center justify-center gap-4'>
          {item.map((item, index) => (
            <Ball key={index} item={item} />
          ))}
        </div>
      </div>
      <div
        className='absolute inset-0 w-[50%] blur-md'
        style={{
          background: 'linear-gradient(90deg, #00C070 0%, #2865FF 100%)',
          width: `${percentage}%`
        }}
      />
    </div>
  )
}

export default memo(ListTicketBall)
