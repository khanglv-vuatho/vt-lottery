import { ArrowLeft2, Profile2User, Ticket } from 'iconsax-react'

const Index = () => {
  return (
    <div className='flex h-dvh flex-col justify-between bg-primary-blue'>
      <div className='w-full'>
        <header className='flex w-full items-center justify-between p-4 font-bold text-white'>
          <ArrowLeft2 />
          <p>Dãy số may mắn</p>
          <div />
        </header>
        <div className='grid w-full grid-cols-2 items-center gap-4 p-4 pt-2 text-white'>
          <div className='flex flex-col gap-2 rounded-2xl bg-white/10 p-4'>
            <p className='text-sm font-normal'>Tổng</p>
            <div className='flex items-center gap-2'>
              <span>
                <Ticket variant='Bold' />
              </span>
              <p className='text-2xl'>5</p>
            </div>
          </div>
          <div className='flex flex-col gap-2 rounded-2xl bg-white/10 p-4'>
            <p className='text-sm font-normal'>Đã giới thiệu</p>
            <div className='flex items-center gap-2'>
              <span>
                <Profile2User variant='Bold' />
              </span>
              <p className='text-2xl'>65</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex h-full flex-col gap-4 rounded-t-2xl bg-white p-4'>
        <TicketItem />
        <TicketItem />
        <TicketItem />
        <TicketItem />
        <TicketItem />
        <TicketItem />
      </div>
    </div>
  )
}

const TicketItem = () => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex w-full items-center justify-between text-sm'>
        <p>
          Đã giới thiệu: <span className='font-bold'>5</span>
        </p>
        <p>
          Còn lại: <span className='font-bold'>7</span>
        </p>
      </div>

      <ListTicketBall />
    </div>
  )
}
const ListTicketBall = () => {
  const arr = [55, 12, 45, 21, 54, 12]

  return (
    <div
      style={{
        background: 'linear-gradient(90deg, #00C070 0%, #8CADFF 35%, #E4E4E4 51%)'
      }}
      className='flex w-full items-center justify-center rounded-2xl p-4'
    >
      <div className='grid w-fit grid-cols-6 items-center justify-center gap-4'>
        {arr.map((i) => (
          <Ball key={i} />
        ))}
      </div>
    </div>
  )
}

const Ball = () => {
  return (
    <div
      className='flex size-10 items-center justify-center rounded-full bg-primary-yellow text-sm font-bold'
      style={{
        background: 'radial-gradient(100% 100% at 0% 0%, #FFFFFF 0%, #FFFFFF 70.5%, #BFBFBF 100%)'
      }}
    >
      12
    </div>
  )
}

export default Index
