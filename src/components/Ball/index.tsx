import { memo } from 'react'

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

export default memo(Ball)
