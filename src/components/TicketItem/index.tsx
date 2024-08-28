import { memo } from 'react'
import ListTicketBall from '../ListTicketBall'
import { countNumbersAndQuestionMarks } from '@/utils'
import { Ticket } from '@/types'

const TicketItem = ({ item, ticketId }: { item: Ticket; ticketId: number }) => {
  console.log({ ticketId })
  return (
    <div className='flex flex-col gap-2'>
      <ListTicketBall item={item} ticketId={ticketId} />
    </div>
  )
}

export default memo(TicketItem)
