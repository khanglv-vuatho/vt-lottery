import { SVGProps } from 'react'

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number
}

export type InfoUser = {
  id: number
  full_name: string
  avatar: string
}

export type Ticket = Array<string | number>

export type Tickets = {
  data: Ticket
  id: number
}

export type TicketData = {
  total_ticket: number
  tickets: Tickets[]
  total_user_referral: number
  info_user: InfoUser
}

export type TNumberInfo = {
  number: string | number
  user_id: number | string
  user_name: string | null
  avatar: string | null
}

export type LotteryTicket = {
  key: number
  numbers: TNumberInfo[]
  num: string
}

export type LotteryData = {
  id: number
  uuid: string
  user_id: number
  tickets: LotteryTicket[]
}
export type TPostMessage = { message: string; data?: any }
