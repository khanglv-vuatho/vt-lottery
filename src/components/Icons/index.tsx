import * as React from 'react'

import { IconSvgProps } from '@/types'
import { twMerge } from 'tailwind-merge'

export const Logo: React.FC<IconSvgProps> = ({ size = 36, height, ...props }) => (
  <svg fill='none' height={size || height} viewBox='0 0 32 32' width={size || height} {...props}>
    <path
      clipRule='evenodd'
      d='M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z'
      fill='currentColor'
      fillRule='evenodd'
    />
  </svg>
)

export const Ticket = ({ className }: { className?: string }) => {
  return (
    <svg viewBox='0 0 312 64' fill='none' xmlns='http://www.w3.org/2000/svg' className={className}>
      <path
        d='M310.533 19.0286C310.533 18.4288 311.12 17.9138 312 17.6245V15.2539C311.127 14.9646 310.533 14.4496 310.533 13.8499C310.533 13.2501 311.12 12.7351 312 12.4458V9.99757C306.109 9.99757 301.338 5.51736 301.338 0H10.6616C10.6616 5.52442 5.88381 9.99757 0 9.99757V12.4317C0.895363 12.7139 1.50481 13.2431 1.50481 13.8499C1.50481 14.4566 0.895363 14.9787 0 15.268V17.6175C0.895363 17.8997 1.50481 18.4288 1.50481 19.0356C1.50481 19.6424 0.895363 20.1645 0 20.4538V22.8032C0.895363 23.0854 1.50481 23.6146 1.50481 24.2214C1.50481 24.8281 0.895363 25.3502 0 25.6395V27.989C0.895363 28.2712 1.50481 28.8004 1.50481 29.4071C1.50481 30.0139 0.895363 30.536 0 30.8253V33.1747C0.895363 33.457 1.50481 33.9861 1.50481 34.5929C1.50481 35.1996 0.895363 35.7218 0 36.011V38.3605C0.895363 38.6427 1.50481 39.1719 1.50481 39.7786C1.50481 40.3854 0.895363 40.9075 0 41.1968V43.5462C0.895363 43.8285 1.50481 44.3576 1.50481 44.9644C1.50481 45.5712 0.895363 46.0933 0 46.3825V48.732C0.895363 49.0142 1.50481 49.5434 1.50481 50.1502C1.50481 50.7569 0.895363 51.279 0 51.5683V54.0024C5.89134 54.0024 10.6616 58.4826 10.6616 64H301.331C301.331 58.4756 306.109 54.0024 311.992 54.0024V51.5542C311.12 51.2649 310.525 50.7499 310.525 50.1502C310.525 49.5504 311.112 49.0354 311.992 48.7461V46.3755C311.12 46.0862 310.525 45.5712 310.525 44.9715C310.525 44.3717 311.112 43.8567 311.992 43.5674V41.1968C311.12 40.9075 310.525 40.3925 310.525 39.7927C310.525 39.193 311.112 38.678 311.992 38.3887V36.0181C311.12 35.7288 310.525 35.2138 310.525 34.614C310.525 34.0143 311.112 33.4993 311.992 33.21V30.8394C311.12 30.5501 310.525 30.0351 310.525 29.4353C310.525 28.8356 311.112 28.3206 311.992 28.0313V25.6607C311.12 25.3714 310.525 24.8564 310.525 24.2566C310.525 23.6569 311.112 23.1419 311.992 22.8526V20.482C311.12 20.1927 310.525 19.6777 310.525 19.0779L310.533 19.0286Z'
        fill='url(#paint0_linear_4953_9122)'
      />
      <path
        d='M297.485 59.993L13.5153 59.994C13.5153 55.6093 9.70066 52.051 5 52.051V11.944C9.70066 11.944 13.5153 8.38574 13.5153 4.001L297.485 4C297.485 8.38474 301.299 11.943 306 11.943V52.057C301.299 52.057 297.485 55.6153 297.485 60V59.993Z'
        stroke='url(#paint1_linear_4953_9122)'
        stroke-miterlimit='10'
      />
      <defs>
        <linearGradient id='paint0_linear_4953_9122' x1='2.88034e-07' y1='31.7495' x2='312' y2='31.7495' gradientUnits='userSpaceOnUse'>
          <stop stop-color='#FEBB28' />
          <stop offset='0.265' stop-color='#FEAB0B' />
          <stop offset='0.72' stop-color='#FEDE6D' />
          <stop offset='1' stop-color='#FEAB0B' />
        </linearGradient>
        <linearGradient id='paint1_linear_4953_9122' x1='5' y1='32' x2='306' y2='32' gradientUnits='userSpaceOnUse'>
          <stop stop-color='#EB7E30' />
          <stop offset='0.275' stop-color='#DF7E25' />
          <stop offset='0.675' stop-color='#FEBA0B' />
          <stop offset='1' stop-color='#D8692A' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export const TicketDetail = ({ className, isFill }: { className?: string; isFill?: boolean }) => {
  return (
    <svg className={className} viewBox='0 0 348 94' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g filter='url(#filter0_ii_4953_9437)'>
        <path
          d='M1 5.00018L1.00017 89C1.00017 91.2091 2.79104 93 5.00018 93L77.4157 92.9998C79.6248 92.9998 81.3867 91.1741 82.0452 89.0653C83.2522 85.2005 86.4158 80.9471 93.3791 80.947C100.453 80.947 103.791 85.3369 105.12 89.2495C105.809 91.2792 107.543 92.9998 109.686 92.9998L343 92.9998C345.209 92.9998 347 91.2089 347 88.9998L347 4.99998C347 2.79085 345.209 0.999993 343 0.999993L109.18 0.999995C107.251 0.999995 105.626 2.40096 104.84 4.16269C103.215 7.80678 99.7048 12.027 93.379 12.027C87.1584 12.027 83.8487 7.94607 82.3549 4.34507C81.5897 2.5004 79.9284 0.999997 77.9313 1L5 1.00017C2.79086 1.00017 1 2.79104 1 5.00018Z'
          fill={isFill ? 'url(#paint0_linear_4953_9437)' : 'white'}
        />
      </g>
      <path
        d='M1 5.00018L1.00017 89C1.00017 91.2091 2.79104 93 5.00018 93L77.4157 92.9998C79.6248 92.9998 81.3867 91.1741 82.0452 89.0653C83.2522 85.2005 86.4158 80.9471 93.3791 80.947C100.453 80.947 103.791 85.3369 105.12 89.2495C105.809 91.2792 107.543 92.9998 109.686 92.9998L343 92.9998C345.209 92.9998 347 91.2089 347 88.9998L347 4.99998C347 2.79085 345.209 0.999993 343 0.999993L109.18 0.999995C107.251 0.999995 105.626 2.40096 104.84 4.16269C103.215 7.80678 99.7048 12.027 93.379 12.027C87.1584 12.027 83.8487 7.94607 82.3549 4.34507C81.5897 2.5004 79.9284 0.999997 77.9313 1L5 1.00017C2.79086 1.00017 1 2.79104 1 5.00018Z'
        stroke='url(#paint1_linear_4953_9437)'
      />
      <path
        d='M1 5.00018L1.00017 89C1.00017 91.2091 2.79104 93 5.00018 93L77.4157 92.9998C79.6248 92.9998 81.3867 91.1741 82.0452 89.0654C83.2522 85.2005 86.4159 80.9471 93.3791 80.947L93.379 12.027C87.1584 12.027 83.8487 7.94607 82.3549 4.34507C81.5897 2.5004 79.9284 0.999997 77.9313 1L5 1.00017C2.79086 1.00017 1 2.79104 1 5.00018Z'
        fill='url(#paint2_linear_4953_9437)'
      />
      <line x1='92.884' y1='75.6183' x2='92.884' y2='18.3817' stroke='#FFB05D' stroke-width='0.763335' stroke-linecap='round' stroke-dasharray='2.04 2.04' />
      <defs>
        <filter id='filter0_ii_4953_9437' x='-1.53556' y='0.5' width='351.071' height='95.0356' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
          <feOffset dx='2.03556' dy='2.03556' />
          <feGaussianBlur stdDeviation='1.01778' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0' />
          <feBlend mode='normal' in2='shape' result='effect1_innerShadow_4953_9437' />
          <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
          <feOffset dx='-2.03556' dy='2.03556' />
          <feGaussianBlur stdDeviation='1.01778' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0' />
          <feBlend mode='normal' in2='effect1_innerShadow_4953_9437' result='effect2_innerShadow_4953_9437' />
        </filter>
        <linearGradient id='paint0_linear_4953_9437' x1='14.5394' y1='11' x2='289.693' y2='96.952' gradientUnits='userSpaceOnUse'>
          <stop stop-color='#FFFDF3' />
          <stop offset='1' stop-color='#FFF1C6' />
        </linearGradient>
        <linearGradient id='paint1_linear_4953_9437' x1='347' y1='47' x2='1' y2='47' gradientUnits='userSpaceOnUse'>
          <stop stop-color='#FEB51A' />
          <stop offset='0.56' stop-color='#FFD680' />
          <stop offset='1' stop-color='#F6A700' />
        </linearGradient>
        <linearGradient id='paint2_linear_4953_9437' x1='1' y1='47' x2='93' y2='47' gradientUnits='userSpaceOnUse'>
          <stop stop-color='#FEAB0B' />
          <stop offset='1' stop-color='#FFE86D' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export const TicketNumber = ({ className }: { className?: string }) => {
  return (
    <svg className={twMerge('size-[94px] max-h-[94px] max-w-[94px]', className)} viewBox='0 0 94 94' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M1 5.00018L1.00017 89C1.00017 91.2091 2.79104 93 5.00018 93L77.4157 92.9998C79.6248 92.9998 81.3867 91.1741 82.0452 89.0654C83.2522 85.2005 86.4159 80.9471 93.3791 80.947L93.379 12.027C87.1584 12.027 83.8487 7.94607 82.3549 4.34507C81.5897 2.5004 79.9284 0.999997 77.9313 1L5 1.00017C2.79086 1.00017 1 2.79104 1 5.00018Z'
        fill='url(#paint0_linear_4953_9447)'
        stroke='#F6AA08'
      />
      <defs>
        <linearGradient id='paint0_linear_4953_9447' x1='1' y1='47' x2='93' y2='47' gradientUnits='userSpaceOnUse'>
          <stop stop-color='#FEAB0B' />
          <stop offset='1' stop-color='#FFE86D' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export const TicketNumberDetail = ({ className, isFill }: { className?: string; isFill?: boolean }) => {
  return (
    <svg className={twMerge('max-h-[94px] max-w-[256px]', className)} viewBox='0 0 256 94' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g filter='url(#filter0_ii_4953_9446)'>
        <path
          d='M12.8403 4.16269C11.2152 7.80678 7.70472 12.027 1.3789 12.027L1.37907 80.947C8.45319 80.947 11.7912 85.3369 13.1198 89.2495C13.809 91.2791 15.5427 92.9998 17.6862 92.9998L251 92.9998C253.209 92.9998 255 91.2089 255 88.9998L255 4.99998C255 2.79084 253.209 0.999989 251 0.999989L17.1804 0.999992C15.2514 0.999992 13.626 2.40095 12.8403 4.16269Z'
          fill={isFill ? 'url(#paint0_linear_4953_9446)' : 'white'}
        />
      </g>
      <path
        d='M12.8403 4.16269C11.2152 7.80678 7.70472 12.027 1.3789 12.027L1.37907 80.947C8.45319 80.947 11.7912 85.3369 13.1198 89.2495C13.809 91.2791 15.5427 92.9998 17.6862 92.9998L251 92.9998C253.209 92.9998 255 91.2089 255 88.9998L255 4.99998C255 2.79084 253.209 0.999989 251 0.999989L17.1804 0.999992C15.2514 0.999992 13.626 2.40095 12.8403 4.16269Z'
        stroke={isFill ? 'url(#paint1_linear_4953_9446)' : '#AEAEAE'}
      />
      <defs>
        <filter id='filter0_ii_4953_9446' x='-1.15665' y='0.5' width='258.692' height='95.0354' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
          <feOffset dx='2.03556' dy='2.03556' />
          <feGaussianBlur stdDeviation='1.01778' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0' />
          <feBlend mode='normal' in2='shape' result='effect1_innerShadow_4953_9446' />
          <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
          <feOffset dx='-2.03556' dy='2.03556' />
          <feGaussianBlur stdDeviation='1.01778' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0' />
          <feBlend mode='normal' in2='effect1_innerShadow_4953_9446' result='effect2_innerShadow_4953_9446' />
        </filter>
        <linearGradient id='paint0_linear_4953_9446' x1='11.3034' y1='11' x2='221.646' y2='59.1635' gradientUnits='userSpaceOnUse'>
          <stop stop-color='#FFFDF3' />
          <stop offset='1' stop-color='#FFF1C6' />
        </linearGradient>
        <linearGradient id='paint1_linear_4953_9446' x1='255' y1='46.9999' x2='1.37891' y2='46.9999' gradientUnits='userSpaceOnUse'>
          <stop stop-color='#FEB51A' />
          <stop offset='0.56' stop-color='#FFD680' />
          <stop offset='1' stop-color='#F6A700' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export const TicketNumberDetailFill = ({ className }: { className?: string }) => {
  return (
    <svg width='256' height='94' viewBox='0 0 256 94' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g filter='url(#filter0_ii_4953_9443)'>
        <path
          d='M12.8403 4.16269C11.2152 7.80678 7.70472 12.027 1.3789 12.027L1.37907 80.947C8.45319 80.947 11.7912 85.3369 13.1198 89.2495C13.809 91.2791 15.5427 92.9998 17.6862 92.9998L251 92.9998C253.209 92.9998 255 91.2089 255 88.9998L255 4.99998C255 2.79084 253.209 0.999989 251 0.999989L17.1804 0.999992C15.2514 0.999992 13.626 2.40095 12.8403 4.16269Z'
          fill='white'
        />
      </g>
      <path
        d='M12.8403 4.16269C11.2152 7.80678 7.70472 12.027 1.3789 12.027L1.37907 80.947C8.45319 80.947 11.7912 85.3369 13.1198 89.2495C13.809 91.2791 15.5427 92.9998 17.6862 92.9998L251 92.9998C253.209 92.9998 255 91.2089 255 88.9998L255 4.99998C255 2.79084 253.209 0.999989 251 0.999989L17.1804 0.999992C15.2514 0.999992 13.626 2.40095 12.8403 4.16269Z'
        stroke='#AEAEAE'
      />
      <defs>
        <filter id='filter0_ii_4953_9443' x='-1.15665' y='0.5' width='258.692' height='95.0354' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
          <feOffset dx='2.03556' dy='2.03556' />
          <feGaussianBlur stdDeviation='1.01778' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0' />
          <feBlend mode='normal' in2='shape' result='effect1_innerShadow_4953_9443' />
          <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
          <feOffset dx='-2.03556' dy='2.03556' />
          <feGaussianBlur stdDeviation='1.01778' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0' />
          <feBlend mode='normal' in2='effect1_innerShadow_4953_9443' result='effect2_innerShadow_4953_9443' />
        </filter>
        <linearGradient id='paint0_linear_4953_9443' x1='255' y1='47' x2='-1.5' y2='47' gradientUnits='userSpaceOnUse'>
          <stop stop-color='#AEAEAE' />
          <stop offset='1' stop-color='#D6D6D6' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export const ArrowDownSvg = ({ className }: { className?: string }) => {
  return (
    <svg className={className} viewBox='0 0 25 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M12.5 10L8.74228e-07 -2.78221e-07L6.25 2.68172e-07L12.5 5.15151L18.75 1.36096e-06L25 1.90735e-06L12.5 10Z' fill='white' />
    </svg>
  )
}
