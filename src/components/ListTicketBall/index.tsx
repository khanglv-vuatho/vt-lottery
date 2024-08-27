import Ball from '@/components/Ball'
import { calculateQuestionMarkPercentage } from '@/utils'
import { Avatar } from '@nextui-org/react'
import { ArrowLeft2 } from 'iconsax-react'
import { memo, useEffect, useState } from 'react'
import { ButtonOnlyIcon } from '../Buttons'
import DropDownMenu from '../DropDownMenu'
import { LotteryData, LotteryTicket, Ticket, TNumberInfo } from '@/types'
import instance from '@/services/axiosConfig'

const ListTicketBall = ({ item, ticketId }: { item: Ticket; ticketId: number }) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const percentage = calculateQuestionMarkPercentage(item as string[])
  const [isFetchingDetail, setIsFetchingDetail] = useState(false)
  const [ticketDetail, setTicketDetail] = useState<LotteryData | null>(null)
  console.log({ item })

  const handleOpenModal = () => {
    setIsFetchingDetail(true)
    setIsOpenModal(true)
  }

  const handleCloseModal = () => {
    setIsOpenModal(false)
  }

  const handleGetTicketDetail = async () => {
    try {
      const response = await instance.get<LotteryData>(`/referral/detail-lottery/${ticketId}`)
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
    isFetchingDetail && handleGetTicketDetail()
  }, [isFetchingDetail])

  return (
    <>
      <div className='relative w-full overflow-hidden rounded-2xl bg-[#C33636]' onClick={handleOpenModal}>
        <div className='relative z-50 flex w-full items-center justify-center p-4'>
          <div className='grid w-fit grid-cols-6 items-center justify-center gap-4'>
            {item.map((itemNumber, index) => (
              <Ball key={index} item={itemNumber.toString()} />
            ))}
          </div>
        </div>
        <div
          className='absolute inset-0 -translate-x-3 -translate-y-3 blur-md'
          style={{
            background: 'linear-gradient(90deg, #1646C0 0%, #1F51D3 100%)',
            width: `calc(${percentage}% + 24px)`,
            height: 'calc(100% + 24px)'
          }}
        />
      </div>
      <DropDownMenu direction='right' isOpen={isOpenModal} className='size-full bg-white'>
        <div className='flex h-full w-full flex-col gap-2'>
          <div className='flex items-center gap-2' onClick={handleCloseModal}>
            <ButtonOnlyIcon>
              <ArrowLeft2 />
            </ButtonOnlyIcon>
            <p className='font-bold'>Chi tiết dãy số</p>
          </div>
          <div className='flex h-full flex-col gap-4 overflow-auto'>
            {ticketDetail?.tickets.map((item, index) => <TicketDetail key={index} item={item} isFullQuestionNumber={item.num === '??'} isHasQuestionNumber={item.num.includes('?')} />)}
          </div>
        </div>
      </DropDownMenu>
    </>
  )
}

const TicketDetail = memo(({ item, isHasQuestionNumber, isFullQuestionNumber }: { item: LotteryTicket; isHasQuestionNumber: boolean; isFullQuestionNumber: boolean }) => {
  console.log({ isHasQuestionNumber })
  return (
    <div
      className={`flex w-full items-center gap-2 rounded-2xl border p-4 ${
        isFullQuestionNumber ? 'border-transparent bg-[#F8F8F8]' : isHasQuestionNumber ? 'border-primary-blue text-primary-black' : 'bg-primary-blue text-white'
      }`}
    >
      <Ball item={item.num} className='text-primary-black' />
      <div className={`h-[56px] w-[23px] border-1 ${isHasQuestionNumber ? 'border-black' : 'border-white'} border-r-transparent`} />
      <div className='flex flex-col justify-between gap-4'>
        {item.numbers.map((item, index) => (
          <UserInfo key={index} info={item} isHasQuestionNumber={isHasQuestionNumber} />
        ))}
      </div>
    </div>
  )
})

const UserInfo = memo(({ info, isHasQuestionNumber }: { info: TNumberInfo; isHasQuestionNumber: boolean }) => {
  return (
    <div className='flex items-center gap-2'>
      <div className={`flex size-6 items-center justify-center rounded-full border font-bold ${isHasQuestionNumber ? 'border-primary-black' : 'border-white'}`}>{info?.number}</div>
      {info?.avatar ? <Avatar src={info?.avatar || ''} size='md' /> : <div className='size-10 rounded-full bg-[#E4E4E4]' />}
      <p className={`text-sm ${!!info.user_name ? 'font-bold' : 'font-normal'}`}>{info?.user_name || 'Chưa có'}</p>
    </div>
  )
})

export default memo(ListTicketBall)
