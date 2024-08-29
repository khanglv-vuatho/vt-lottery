'use client'

import { Image, ImageProps } from '@nextui-org/react'
import { forwardRef, Ref, useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface ImageCustomProps extends ImageProps {
  fallback?: string
}

const ImageCustom = forwardRef(({ src, alt, className, ...props }: ImageCustomProps, ref: Ref<HTMLImageElement>) => {
  const [isLoading, setIsLoading] = useState(true)
  const handleOnLoadImage = () => {
    setIsLoading(false)
  }
  return (
    <>
      <Image removeWrapper className={twMerge(`pointer-events-none select-none rounded-none ${isLoading ? 'block' : 'hidden'}`, className)} ref={ref} src={src + '?width=10&height=10'} alt={alt} />
      <Image
        removeWrapper
        className={twMerge(`pointer-events-none select-none rounded-none ${isLoading ? 'hidden' : 'block'}`, className)}
        ref={ref}
        src={src + '?width=100&height=100'}
        alt={alt}
        {...props}
        onLoad={handleOnLoadImage}
      />
    </>
  )
})

export default ImageCustom
