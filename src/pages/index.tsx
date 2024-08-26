import DefaultLayout from '@/layouts/default'
import instance from '@/services/axiosConfig'
import { Button } from '@nextui-org/react'
import { useEffect, useState } from 'react'

export default function IndexPage() {
  return (
    <DefaultLayout>
      <Button color='primary' className='text-primary-light-red'>
        Button
      </Button>
    </DefaultLayout>
  )
}
