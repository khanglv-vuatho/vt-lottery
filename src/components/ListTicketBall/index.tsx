import Ball from '@/components/Ball'
import instance from '@/services/axiosConfig'
import { LotteryData, LotteryTicket, Ticket, TNumberInfo } from '@/types'
import { calculateQuestionMarkPercentage } from '@/utils'
import { Avatar, Button } from '@nextui-org/react'
import { ArrowLeft2 } from 'iconsax-react'
import { memo, useEffect, useState } from 'react'
import { ButtonOnlyIcon } from '../Buttons'
import DropDownMenu from '../DropDownMenu'
import ToastComponent from '../ToastComponent'

const ListTicketBall = ({ item, ticketId }: { item: Ticket; ticketId: number }) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const percentage = calculateQuestionMarkPercentage(item as string[])
  const [isFetchingDetail, setIsFetchingDetail] = useState(false)
  const [ticketDetail, setTicketDetail] = useState<LotteryData | null>(null)

  const queryParams = new URLSearchParams(location.search)
  const isClient = queryParams.get('isClient') === 'true'

  const ONE_HUNDRED_PERCENT = 100
  const WITDH_OF_BORDER_DOTS = 4
  const PADDING_OF_TICKET_DETAIL = 8

  const handleOpenModal = () => {
    if (ticketId === 0) return ToastComponent({ message: 'Bạn chưa có dãy số nào', type: 'info' })
    setIsFetchingDetail(true)
    setIsOpenModal(true)
  }

  const handleCloseModal = () => {
    setIsOpenModal(false)
  }

  const handleGetTicketDetail = async () => {
    try {
      const response = await instance.get<LotteryData>(`/referral/detail-lottery/${ticketId}`)
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
    isFetchingDetail && handleGetTicketDetail()
  }, [isFetchingDetail])

  return (
    <div>
      <div className={`relative mx-auto flex w-fit items-center overflow-hidden p-2 ${percentage === ONE_HUNDRED_PERCENT ? '' : 'bg-[#C33636]'} `} onClick={handleOpenModal}>
        <div className='relative z-50 flex w-full items-center justify-center'>
          <div
            style={{
              padding: PADDING_OF_TICKET_DETAIL
            }}
            className='grid w-fit grid-cols-6 items-center justify-center gap-4 border-1 border-white'
          >
            {item.map((itemNumber, index) => (
              <Ball key={index} item={itemNumber.toString()} />
            ))}
          </div>
        </div>
        <div
          className='absolute inset-0 -translate-x-3 -translate-y-3 blur-md'
          style={{
            background: isClient ? 'linear-gradient(90deg, #F4B807 0%, #FFAA00 100%)' : 'linear-gradient(90deg, #1646C0 0%, #1F51D3 100%)',
            width: percentage === 0 ? '0px' : `calc(${percentage}% + 32px)`,
            height: 'calc(100% + 32px)'
          }}
        />
        {/*  */}
        <div
          style={{
            borderTop: `${WITDH_OF_BORDER_DOTS}px dotted #fff`,
            borderBottom: `${WITDH_OF_BORDER_DOTS}px dotted #fff`,
            height: `calc(100% + ${WITDH_OF_BORDER_DOTS}px)`,
            transform: `translateY(-${WITDH_OF_BORDER_DOTS / 2}px) translateX(${PADDING_OF_TICKET_DETAIL}px)`,
            width: `calc(100% - ${PADDING_OF_TICKET_DETAIL * 2}px)`,
            position: 'absolute',
            inset: 0
          }}
          className={`absolute inset-0 w-[90%] border-dotted`}
        />
        <div className='absolute left-0 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white' />
        <div className='absolute right-0 top-1/2 size-3 -translate-y-1/2 translate-x-1/2 rounded-full bg-white' />
      </div>
      <DropDownMenu direction='right' isOpen={isOpenModal} onClose={handleCloseModal} className='size-full bg-white'>
        <div className='flex h-full w-full flex-col gap-2'>
          <Button disableAnimation startContent={<ArrowLeft2 />} className='w-fit bg-transparent px-2' onClick={handleCloseModal}>
            <p className='font-bold text-primary-black'>Chi tiết dãy số</p>
          </Button>
          <div className='flex h-full flex-col gap-4 overflow-auto'>
            {ticketDetail?.tickets.map((item, index) => <TicketDetail key={index} item={item} isFullQuestionNumber={item.num === '??'} isHasQuestionNumber={item.num.includes('?')} />)}
          </div>
        </div>
      </DropDownMenu>
    </div>
  )
}

const TicketDetail = memo(({ item, isHasQuestionNumber, isFullQuestionNumber }: { item: LotteryTicket; isHasQuestionNumber: boolean; isFullQuestionNumber: boolean }) => {
  const queryParams = new URLSearchParams(location.search)
  const isClient = queryParams.get('isClient') === 'true'

  // Nếu chỉ isFullQuestionNumber thì không cần có border và bg màu xám
  // Nếu isHasQuestionNumber thì có border
  // Nếu số hoàn chỉnh thì fill màu background

  return (
    <div
      className={`flex w-full items-center gap-2 rounded-2xl border p-4 ${
        isFullQuestionNumber
          ? 'border-transparent bg-[#F8F8F8]'
          : isHasQuestionNumber
            ? `${isClient ? 'border-primary-yellow' : 'border-primary-blue'} text-primary-black`
            : `bg-gradient-to-r ${isClient ? 'from-[#F4B807] to-[#FFAA00]' : 'from-[#1646C0] to-[#1F51D3]'} text-white`
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
