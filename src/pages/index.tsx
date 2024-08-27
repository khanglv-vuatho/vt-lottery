import TicketItem from '@/components/TicketItem'
import { Spinner } from '@nextui-org/react'
import { ArrowLeft2, Profile2User, Ticket } from 'iconsax-react'
import { useEffect, useState } from 'react'

type TInfoTicket = {
  listTicket: string[][] | null
  totalInvite: number
}
const Index = () => {
  const [isFetching, setIsFetching] = useState(false)
  const [infoTicket, setInfoTicket] = useState<TInfoTicket>({ listTicket: null, totalInvite: 0 })

  // TODO: API
  const handleGetTicket = async () => {
    try {
      // const data = await instance.get('/ticket')
      const fakeData = {
        listTicket: [
          ['84', '13', '54', '72', '46', '3?'],
          ['25', '90', '83', '56', '17', '49'],
          ['70', '34', '95', '41', '87', '60']
        ],
        totalInvite: 12
      }
      setInfoTicket(fakeData)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    isFetching && handleGetTicket()
  }, [isFetching])

  useEffect(() => {
    setIsFetching(true)
  }, [])

  return infoTicket.listTicket === null ? (
    <div className='flex h-dvh flex-col items-center justify-center bg-white'>
      <Spinner />
    </div>
  ) : (
    <div className='flex h-dvh flex-col items-center justify-between bg-primary-blue'>
      <div className='flex h-full max-w-[390px] flex-col'>
        <div className='w-full'>
          <header className='flex w-full items-center justify-between py-4 font-bold text-white'>
            <ArrowLeft2 />
            <p>Dãy số may mắn</p>
            <div />
          </header>
          <div className='grid w-full grid-cols-2 items-center gap-4 py-4 pt-2 text-white'>
            <div className='flex flex-col gap-2 rounded-2xl bg-white/10 p-4'>
              <p className='text-sm font-normal'>Tổng</p>
              <div className='flex items-center gap-2'>
                <span>
                  <Ticket variant='Bold' />
                </span>
                <p className='text-2xl'>{infoTicket?.listTicket?.length}</p>
              </div>
            </div>
            <div className='flex flex-col gap-2 rounded-2xl bg-white/10 p-4'>
              <p className='text-sm font-normal'>Đã giới thiệu</p>
              <div className='flex items-center gap-2'>
                <span>
                  <Profile2User variant='Bold' />
                </span>
                <p className='text-2xl'>{infoTicket?.totalInvite}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex h-full flex-1 flex-col gap-4 overflow-y-auto rounded-t-2xl bg-white p-4'>{infoTicket?.listTicket?.map((item, index) => <TicketItem item={item} key={index} />)}</div>
      </div>
    </div>
  )
}

export default Index
