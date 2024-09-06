import { ButtonOnlyIcon } from '@/components/Buttons'
import DropDownMenu from '@/components/DropDownMenu'
import { ArrowDownSvg, Ticket } from '@/components/Icons'
import ImageCustom from '@/components/ImageCustom'
import { keyPossmessage } from '@/constants'
import instance from '@/services/axiosConfig'
import { LotteryData, LotteryTicket, TicketData, Tickets, TNumberInfo } from '@/types'
import { postMessageCustom } from '@/utils'
import { Button, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { ArrowLeft2, Filter } from 'iconsax-react'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

const Test = () => {
  const [isFetching, setIsFetching] = useState(false)
  const [isExpand, setIsExpand] = useState(true)
  const [ticketData, setTicketData] = useState<TicketData | null>(null)

  const handleGetTicket = async (): Promise<void> => {
    try {
      const response = await instance.get<TicketData>('/referral/get-lottery')

      //if tickets is empty, set tickets to [{ data: ['??', '??', '??', '??', '??', '??'], id: 0 }]
      const tickets = response?.data?.tickets?.length === 0 ? [{ data: ['??', '??', '??', '??', '??', '??'], id: 0 }] : [...response.data.tickets].reverse()

      setTicketData({
        ...response.data,
        tickets: tickets
      })
    } catch (error) {
      console.log(error)
    } finally {
      setIsFetching(false)
    }
  }
  const handleToggleExpand = () => {
    setIsExpand(!isExpand)
  }

  const handleCloseWebview = () => {
    postMessageCustom({
      message: keyPossmessage.CAN_POP
    })
  }

  useEffect(() => {
    isFetching && handleGetTicket()
  }, [isFetching])

  useEffect(() => {
    setIsFetching(true)
  }, [])

  return (
    <div className='h-dvh'>
      <div className='relative mx-auto h-full max-w-[440px]'>
        <div
          style={{
            backgroundImage: 'url(./bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 10,
            position: 'absolute',
            inset: 0
          }}
        >
          <header className='flex w-full items-center justify-between p-4 font-bold'>
            <ButtonOnlyIcon onClick={handleCloseWebview} className='text-white'>
              <ArrowLeft2 />
            </ButtonOnlyIcon>
          </header>
        </div>
        <div className={`absolute bottom-0 left-0 right-0 z-[100] flex w-full flex-col gap-4 bg-white p-5 py-12 pb-5 duration-200 ${isExpand ? 'h-[70dvh]' : 'h-[40dvh] delay-100'}`}>
          <ButtonOnlyIcon onClick={handleToggleExpand} className='absolute -top-[28px] left-1/2 z-[200] flex w-fit -translate-x-1/2 -translate-y-[100%]'>
            <ArrowDownSvg className={`${isExpand ? '' : 'rotate-180'} h-[10px] w-[25px] text-white duration-200`} />
          </ButtonOnlyIcon>
          <div className='absolute left-1/2 top-0 z-[200] flex -translate-x-1/2 -translate-y-1/2 flex-col gap-2'>
            <div
              style={{
                boxShadow: '0px 9.16px 14.25px 0px #FFFFFF4D inset',
                zIndex: 40
              }}
              className='rounded-full bg-gradient-to-r from-[#76ADF3] to-[#3051FF] p-2 text-white'
            >
              <p className={`relative z-10 w-fit rounded-full bg-white p-3 px-10 text-center text-[#3263E2]`}>Vé của bạn</p>
            </div>
          </div>
          <BodyYourTicket tickets={ticketData?.tickets || null} />
        </div>
      </div>
    </div>
  )
}

const Ball = ({ number, isActive, className }: { number: string | number; isActive: boolean; className?: string }) => {
  return (
    <div
      style={{
        boxShadow: isActive ? '0px 2px 2px 0px #00000033 inset' : 'none'
      }}
      className={twMerge('fontCarena flex size-10 flex-shrink-0 items-center justify-center rounded-full font-bold text-[#C86700]', isActive ? 'bg-[#C86700] text-white' : 'bg-white', className)}
    >
      <p className='translate-y-[2px]'>{number}</p>
    </div>
  )
}

const UserInfo = ({ info }: { info: TNumberInfo }) => {
  return (
    <div className='flex items-center gap-2'>
      {info?.number !== '?' ? (
        <p className='flex size-[24px] flex-shrink-0 items-center justify-center text-xl text-[#C86700]'>{info.number}</p>
      ) : (
        <div className='flex size-[24px] flex-shrink-0 items-center justify-center rounded-full bg-[#C86700] text-sm text-white'>?</div>
      )}
      {info?.avatar ? (
        <ImageCustom src={info?.avatar || ''} height={30} width={30} className='size-[30px] max-h-[30px] max-w-[30px] rounded-full object-cover' />
      ) : (
        <div className='flex size-[30px] flex-shrink-0 rounded-full bg-[#C86700]' />
      )}
      <p className={`line-clamp-1 text-sm font-semibold text-[#824300]`}>{info?.user_name || 'Chưa có'}</p>
    </div>
  )
}

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
      <div className='w-full rounded-e-lg border-1 border-l-0 border-[#FFB05D] bg-gradient-to-r from-[#FFFDF3] to-[#FFF1C6]'>
        <div className='flex h-full flex-col justify-center gap-2 py-3 pl-3'>
          {item.numbers.map((number, index) => {
            return <UserInfo key={number.user_id} info={{ number: number.number, user_name: number.user_name, avatar: number.avatar, user_id: number.user_id }} />
          })}
        </div>
      </div>
    </div>
  )
}

const ListTicketNumber = ({ index, ticket }: { index: number; ticket: Tickets }) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isFetchingDetail, setIsFetchingDetail] = useState(false)
  const [ticketDetail, setTicketDetail] = useState<LotteryData | null>(null)
  const handleCloseModal = () => {
    setIsOpenModal(false)
  }

  const handleOpenModal = () => {
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
          <div className='flex h-full w-full flex-col gap-4 overflow-auto'>{ticketDetail?.tickets?.map((item, index) => <TicketDetail item={item} key={index} />)}</div>
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
          <div className='absolute grid w-full max-w-[90%] grid-cols-6 gap-1'>{ticket?.data?.map((item, index) => <Ball isActive={item.toString().includes('?')} key={index} number={item} />)}</div>
        </div>
      </div>
    </div>
  )
}

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

const BodyRecommendedTicket = () => {
  const [isOpenFilter, setIsOpenFilter] = useState(false)
  const [filter, setFilter] = useState<'all' | 'completed' | 'processing'>('all')

  const handleFilter = (e: any) => {
    setFilter(e.target.name)
    setIsOpenFilter(false)
  }

  console.log({ filter })

  return (
    <>
      <div className='flex items-center justify-between'>
        <p className='font-bold'>Đã giới thiệu (5)</p>
        <Popover placement='bottom' isOpen={isOpenFilter} onClose={() => setIsOpenFilter(false)}>
          <PopoverTrigger>
            <Button onClick={() => setIsOpenFilter(true)} className='bg-transparent' endContent={<Filter className='text-primary-gray' size={24} variant='Bold' />}>
              Bộ lọc
            </Button>
          </PopoverTrigger>
          <PopoverContent className='border-none shadow-[0px_4px_16px_0px_#00000014]'>
            <div className='flex w-full flex-col items-end gap-2'>
              <Button name='all' onClick={handleFilter} className='w-full justify-end bg-transparent font-bold text-primary-blue'>
                Tất cả (10)
              </Button>
              <Button name='completed' onClick={handleFilter} className='w-full justify-end bg-transparent'>
                Đã hoàn thành (4)
              </Button>
              <Button name='processing' onClick={handleFilter} className='w-full justify-end bg-transparent'>
                Đang thực hiện (6)
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </>
  )
}

export default Test
