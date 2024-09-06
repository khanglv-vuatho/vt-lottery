import { LotteryTicket } from '@/types'
import Ball from '../Ball'
import UserInfo from '../UserInfo'
import { memo } from 'react'

const TicketDetail = ({ item }: { item: LotteryTicket }) => {
  console.log({ item })
  return (
    <div className='flex items-center justify-center px-3'>
      <div className='relative flex size-[92px] max-h-[92px] min-h-[92px] min-w-[92px] max-w-[92px] items-center justify-center rounded-s-lg border-1 border-r-0 border-[#FFB05D] bg-gradient-to-r from-[#FEAB0B] to-[#FFE86D]'>
        <Ball isActive={item?.num.includes('?')} number={item?.num} className='size-16 text-4xl' />
        {/* start line  */}
        <div className='absolute right-0 h-[68%] translate-x-1/2 border-r-1 border-dashed border-r-[#FFB05D]' />
        {/* end line  */}
        <div className='absolute bottom-0 right-0 size-[24px] translate-x-1/2 translate-y-1/2 rounded-full bg-white ring-1 ring-[#FFB05D] after:absolute after:bottom-0 after:right-0 after:h-[13px] after:w-[60px] after:translate-x-[20px] after:translate-y-[3px] after:bg-white' />
        <div className='absolute right-0 top-0 size-[24px] -translate-y-1/2 translate-x-1/2 rounded-full bg-white ring-1 ring-[#FFB05D] after:absolute after:right-0 after:top-0 after:h-[13px] after:w-[60px] after:-translate-y-[3px] after:translate-x-[20px] after:bg-white' />
      </div>
      <div className={`w-full rounded-e-lg border-1 border-l-0 border-[#FFB05D] ${item?.num.includes('?') ? 'bg-white' : 'bg-gradient-to-r from-[#FFFDF3] to-[#FFF1C6]'}`}>
        <div className='flex h-full flex-col justify-center gap-2 py-3 pl-3'>
          {item.numbers.map((number) => {
            return <UserInfo key={number.user_id} info={{ number: number.number, user_name: number.user_name, avatar: number.avatar, user_id: number.user_id }} />
          })}
        </div>
      </div>
    </div>
  )
}

export default memo(TicketDetail)
