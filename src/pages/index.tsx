import BodyYourTicket from '@/components/BodyYourTicket'
import { ButtonOnlyIcon } from '@/components/Buttons'
import { ArrowDownSvg } from '@/components/Icons'
import { keyPossmessage } from '@/constants'
import instance from '@/services/axiosConfig'
import { TicketData } from '@/types'
import { postMessageCustom } from '@/utils'
import { ArrowLeft2 } from 'iconsax-react'
import { useEffect, useState } from 'react'

const HomePage = () => {
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

export default HomePage
