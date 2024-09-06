import { memo } from 'react'
import ImageCustom from '../ImageCustom'
import { TNumberInfo } from '@/types'

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

export default memo(UserInfo)
