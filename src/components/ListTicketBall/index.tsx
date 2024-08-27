import Ball from '../Ball'
import { memo } from 'react'

const ListTicketBall = ({ item }: { item: string[] }) => {
  const isNotFullNumberOfTicket = item.some((element) => element.includes('?'))

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
        className='absolute inset-0 blur-md'
        style={{
          background: 'linear-gradient(90deg, #00C070 0%, #2865FF 100%)',
          width: isNotFullNumberOfTicket ? 0 : '100%'
        }}
      />
    </div>
  )
}

export default memo(ListTicketBall)
