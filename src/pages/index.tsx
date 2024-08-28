import { ButtonOnlyIcon } from '@/components/Buttons'
import ListTicketBall from '@/components/ListTicketBall'
import ToastComponent from '@/components/ToastComponent'
import { keyPossmessage } from '@/constants'
import instance from '@/services/axiosConfig'
import { TicketData } from '@/types'
import { postMessageCustom } from '@/utils'
import { Spinner } from '@nextui-org/react'
import { ArrowLeft2, Profile2User, Ticket } from 'iconsax-react'
import { useEffect, useState } from 'react'

const Index = () => {
  const queryParams = new URLSearchParams(location.search)
  const isClient = queryParams.get('isClient')

  const [isFetching, setIsFetching] = useState(false)
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

  ToastComponent({
    type: 'error',
    message: JSON.stringify(ticketData)
  })

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

  return isFetching ? (
    <div className='flex h-dvh flex-col items-center justify-center bg-white'>
      <Spinner />
    </div>
  ) : (
    <div className={`flex h-dvh flex-col items-center justify-between ${isClient ? 'bg-[#FFFAEA] text-primary-black' : 'bg-primary-blue text-white'} `}>
      <div className='flex h-full w-full max-w-[390px] flex-col'>
        <div className='w-full'>
          <header className='flex w-full items-center justify-between py-4 font-bold'>
            <ButtonOnlyIcon onClick={handleCloseWebview} className='text-inherit'>
              <ArrowLeft2 />
            </ButtonOnlyIcon>
            <p>Dãy số may mắn</p>
            {/* // placeholder div*/}
            <ButtonOnlyIcon className='opacity-0' isDisabled>
              <ArrowLeft2 />
            </ButtonOnlyIcon>
          </header>
          <div className='items-centser grid w-full grid-cols-2 gap-4 px-3 py-4 pt-2 text-white'>
            <div className={`flex flex-col gap-2 rounded-2xl p-4 ${isClient ? 'bg-[#FFD864] text-primary-black' : 'bg-white/10 text-white'}`}>
              <p className='text-sm font-normal'>Tổng</p>
              <div className='flex items-center gap-2'>
                <span>
                  <Ticket variant={isClient ? 'Outline' : 'Bold'} />
                </span>
                <p className='text-2xl font-bold'>{ticketData?.total_ticket || 0}</p>
              </div>
            </div>
            <div className={`flex flex-col gap-2 rounded-2xl p-4 ${isClient ? 'bg-[#FFD864] text-primary-black' : 'bg-white/10 text-white'}`}>
              <p className='text-sm font-normal'>Đã giới thiệu</p>
              <div className='flex items-center gap-2'>
                <span>
                  <Profile2User variant={isClient ? 'Outline' : 'Bold'} />
                </span>
                <p className='text-2xl font-bold'>{ticketData?.total_user_referral || 0}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex h-full flex-1 flex-col gap-4 overflow-y-auto rounded-t-2xl bg-white p-4'>
          {ticketData?.tickets?.map((item, index) => <ListTicketBall key={index} item={item.data} ticketId={item.id} />)}
        </div>
      </div>
    </div>
  )
}

export default Index
