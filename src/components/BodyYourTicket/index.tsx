import { memo } from 'react'
import ListTicketNumber from '@/components/ListTicketNumber'
import { Tickets } from '@/types'

const BodyYourTicket = ({ tickets }: { tickets: Tickets[] | null }) => {
  return (
    <>
      <div className='flex min-h-10 items-center justify-between'>
        <p className='font-bold'>Vé của bạn ({tickets?.length || 0})</p>
      </div>
      <div className={`flex flex-col gap-4 overflow-auto`}>
        {tickets?.map((ticket, index) => (
          <div className='flex flex-col justify-center bg-white'>
            <ListTicketNumber index={index} ticket={ticket} />
          </div>
        ))}
      </div>
    </>
  )
}

export default memo(BodyYourTicket)
