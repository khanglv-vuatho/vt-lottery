import instance from '@/services/axiosConfig'
import { LotteryData, Tickets } from '@/types'
import DropDownMenu from '@/components/DropDownMenu'
import { Button } from '@nextui-org/react'
import { ArrowLeft2 } from 'iconsax-react'
import TicketDetail from '@/components/TicketDetail'
import { memo, useEffect, useState } from 'react'
import { Ticket } from '@/components/Icons'
import Ball from '@/components/Ball'
import ToastComponent from '../ToastComponent'
import BackgroundGradient from '@/components/BackgroundGradient'

const ListTicketNumber = ({ index, ticket, isDisable }: { index: number; ticket: Tickets; isDisable: boolean }) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isFetchingDetail, setIsFetchingDetail] = useState(false)
  const [ticketDetail, setTicketDetail] = useState<LotteryData | null>(null)
  const handleCloseModal = () => {
    setIsOpenModal(false)
  }

  const handleOpenModal = () => {
    if (isDisable) {
      ToastComponent({
        message: 'Hiện tại bạn chưa có số nào',
        type: 'info'
      })
      return
    }
    setIsOpenModal(true)
    setIsFetchingDetail(true)
  }

  const handleGetDetailTicket = async () => {
    try {
      const response = await instance.get<LotteryData>(`/referral/detail-lottery/${ticket?.id}`)
      // thêm num vào ticket
      const transformedData = {
        ...response.data,
        tickets: response.data.tickets.map((ticket) => ({
          ...ticket,
          num: ticket.numbers.map((number) => number?.number).join('')
        }))
      }
      setTicketDetail(transformedData)
    } catch (error) {
      console.log(error)
    } finally {
      setIsFetchingDetail(false)
    }
  }

  useEffect(() => {
    isFetchingDetail && handleGetDetailTicket()
  }, [isFetchingDetail])

  console.log({ ticketDetail })

  return (
    <div onClick={handleOpenModal} className='flex w-fit items-center justify-center gap-2'>
      <DropDownMenu direction='right' isOpen={isOpenModal} onClose={handleCloseModal} className='size-full bg-white'>
        <header className='flex items-center justify-between'>
          <Button onClick={handleCloseModal} className='flex items-center gap-2 bg-transparent font-bold'>
            <ArrowLeft2 />
            <p>Chi tiết dãy số {index + 1}</p>
          </Button>
          <div />
        </header>
        <div className='flex h-full w-full flex-col gap-2'>
          <div className='flex h-full w-full flex-col gap-4 overflow-auto pb-20'>{ticketDetail?.tickets?.map((item, index) => <TicketDetail item={item} key={index} />)}</div>
        </div>
      </DropDownMenu>
      <div
        className='flex size-[30px] items-center justify-center rounded-full text-white'
        style={{
          background: 'linear-gradient(180deg, #76ADF3 0%, #3051FF 20.21%)',
          boxShadow: '0px 9.16px 14.25px 0px #FFFFFF4D inset'
        }}
      >
        {index + 1}
      </div>
      <div className='relative mx-auto'>
        <Ticket className='size-full' />
        <div className='absolute inset-0 flex w-full items-center justify-center'>
          <div className='absolute grid w-full max-w-[90%] grid-cols-6 gap-1'>
            {ticket?.data?.map((item, index) => {
              return (
                <BackgroundGradient isHiddenAnimation={!item?.toString()?.includes('?')}>
                  <Ball isActive={item?.toString()?.includes('?')} key={index} number={item} />
                </BackgroundGradient>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(ListTicketNumber)
