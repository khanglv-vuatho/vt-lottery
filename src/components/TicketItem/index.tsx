import { memo } from 'react'
import ListTicketBall from '../ListTicketBall'
import { countNumbersAndQuestionMarks } from '@/utils'
import { Ticket } from '@/types'

const TicketItem = ({ item, ticketId }: { item: Ticket; ticketId: number }) => {
  console.log({ ticketId })
  const { numbers, questionMarks } = countNumbersAndQuestionMarks(item)
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex w-full items-center justify-between text-sm'>
        <p>
          Đã giới thiệu: <span className='font-bold'>{numbers}</span>
        </p>
        <p>
          Còn lại: <span className='font-bold'>{questionMarks}</span>
        </p>
      </div>

      <ListTicketBall item={item} ticketId={ticketId} />
    </div>
  )
}

export default memo(TicketItem)
