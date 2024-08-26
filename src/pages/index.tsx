import { calculateQuestionMarkPercentage, countNumbersAndQuestionMarks } from '@/utils'
import { Spinner } from '@nextui-org/react'
import { ArrowLeft2, Profile2User, Ticket } from 'iconsax-react'
import { useEffect, useState } from 'react'

type TInfoTicket = {
  listTicket: string[][] | null
  total: number
}
const Index = () => {
  const [isFetching, setIsFetching] = useState(false)
  const [infoTicket, setInfoTicket] = useState<TInfoTicket>({ listTicket: null, total: 0 })

  const handleGetTicket = async () => {
    try {
      // const data = await instance.get('/ticket')
      const fakeData = {
        listTicket: [['??', '??', '??', '??', '??', '??']],
        total: 12
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
                <p className='text-2xl'>{infoTicket?.total}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex h-full flex-1 flex-col gap-4 overflow-y-auto rounded-t-2xl bg-white p-4'>{infoTicket?.listTicket?.map((item, index) => <TicketItem item={item} key={index} />)}</div>
      </div>
    </div>
  )
}

const TicketItem = ({ item }: { item: string[] }) => {
  const { numbers, questionMarks } = countNumbersAndQuestionMarks(item)
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex w-full items-center justify-between text-sm'>
        <p>
          Đã giới thiệu: <span className='font-bold'>{numbers}</span>
        </p>
        <p>
          Còn lại: <span className='font-bold'>{questionMarks}</span>
        </p>
      </div>

      <ListTicketBall item={item} />
    </div>
  )
}
const ListTicketBall = ({ item }: { item: string[] }) => {
  const percentage = calculateQuestionMarkPercentage(item)
  return (
    <div className='relative w-full overflow-hidden rounded-2xl bg-[#e4e4e4]'>
      <div className='relative z-50 flex w-full items-center justify-center p-4'>
        <div className='grid w-fit grid-cols-6 items-center justify-center gap-4'>
          {item.map((item, index) => (
            <Ball key={index} item={item} />
          ))}
        </div>
      </div>
      <div
        className='absolute inset-0 w-[50%] blur-md'
        style={{
          background: 'linear-gradient(90deg, #00C070 0%, #2865FF 100%)',
          width: `${percentage}%`
        }}
      ></div>
    </div>
  )
}

const Ball = ({ item }: { item: string }) => {
  return (
    <div
      className='flex size-10 items-center justify-center rounded-full bg-primary-yellow text-sm font-bold'
      style={{
        background: 'radial-gradient(100% 100% at 0% 0%, #FFFFFF 0%, #FFFFFF 70.5%, #BFBFBF 100%)'
      }}
    >
      {item}
    </div>
  )
}

export default Index
