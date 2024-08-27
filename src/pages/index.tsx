import { ButtonOnlyIcon } from '@/components/Buttons'
import TicketItem from '@/components/TicketItem'
import { keyPossmessage } from '@/constants'
import instance from '@/services/axiosConfig'
import { postMessageCustom } from '@/utils'
import { Spinner } from '@nextui-org/react'
import { ArrowLeft2, Profile2User, Ticket } from 'iconsax-react'
import { useEffect, useMemo, useState } from 'react'

interface UserInfo {
  id: number
  full_name: string
  avatar: string
}

interface TicketData {
  total_ticket: number
  tickets: string[][]
  total_user_referral: number
  info_user: UserInfo
}

const Index = () => {
  const [isFetching, setIsFetching] = useState(false)
  const [ticketData, setTicketData] = useState<TicketData | null>(null)

  const handleGetTicket = async () => {
    try {
      const response = await instance.get<TicketData>('/referral/get-lottery')

      setTicketData({
        ...response.data,
        tickets: [...response.data.tickets].reverse()
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handleCloseWebview = () => {
    postMessageCustom({ message: keyPossmessage.CAN_POP })
  }

  useEffect(() => {
    isFetching && handleGetTicket()
  }, [isFetching])

  useEffect(() => {
    setIsFetching(true)
  }, [])

  return ticketData === null ? (
    <div className='flex h-dvh flex-col items-center justify-center bg-white'>
      <Spinner />
    </div>
  ) : (
    <div className='flex h-dvh flex-col items-center justify-between bg-primary-blue'>
      <div className='flex h-full max-w-[390px] flex-col'>
        <div className='w-full'>
          <header className='flex w-full items-center justify-between py-4 font-bold text-white'>
            <ButtonOnlyIcon onClick={handleCloseWebview} className='text-white'>
              <ArrowLeft2 />
            </ButtonOnlyIcon>
            <p>Dãy số may mắn</p>
            <div />
          </header>
          <div className='items-centser grid w-full grid-cols-2 gap-4 py-4 pt-2 text-white'>
            <div className='flex flex-col gap-2 rounded-2xl bg-white/10 p-4'>
              <p className='text-sm font-normal'>Tổng</p>
              <div className='flex items-center gap-2'>
                <span>
                  <Ticket variant='Bold' />
                </span>
                <p className='text-2xl'>{ticketData?.total_ticket}</p>
              </div>
            </div>
            <div className='flex flex-col gap-2 rounded-2xl bg-white/10 p-4'>
              <p className='text-sm font-normal'>Đã giới thiệu</p>
              <div className='flex items-center gap-2'>
                <span>
                  <Profile2User variant='Bold' />
                </span>
                <p className='text-2xl'>{ticketData?.total_user_referral}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex h-full flex-1 flex-col gap-4 overflow-y-auto rounded-t-2xl bg-white p-4'>{ticketData?.tickets.reverse().map((item, index) => <TicketItem item={item} key={index} />)}</div>
      </div>
    </div>
  )
}

export default Index
