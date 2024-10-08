import ToastComponent from '@/components/ToastComponent'
import { Ticket, TPostMessage } from '@/types'
import moment from 'moment'
import { useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'

const useUnfocusItem = (callback: () => void, exclusionRef?: React.RefObject<HTMLElement | null>): React.RefObject<any> => {
  const itemRef = useRef<any>(null)

  useEffect(() => {
    const handleBlur = (event: Event) => {
      const clickedOutside = itemRef.current && !itemRef.current.contains(event.target as Node)

      const clickedOnExclusion = exclusionRef && exclusionRef.current && exclusionRef.current.contains(event.target as Node)

      if (clickedOutside && !clickedOnExclusion) {
        callback()
      }
    }

    document.addEventListener('click', handleBlur)

    return () => {
      document.removeEventListener('click', handleBlur)
    }
  }, [callback, exclusionRef])

  return itemRef
}

function capitalizeWords(string: string) {
  if (!string) return ''
  return string
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value)
  const handler: any = useRef(null)

  useEffect(() => {
    // Clear the timeout if value changes (cleanup function)
    if (handler.current) {
      clearTimeout(handler.current)
    }

    // Set the timeout to update debouncedValue after the specified delay
    handler.current = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    // Cleanup function to clear timeout if component unmounts or value changes
    return () => {
      if (handler.current) {
        clearTimeout(handler.current)
      }
    }
  }, [value, delay])

  return debouncedValue
}

const handleAddLangInUrl = ({ mainUrl, lang, token }: { mainUrl: string; lang: string; token: string }) => {
  return `${mainUrl}?lang=${lang}&token=${token}`
}

const formatLocalTime = (time: string) => {
  const utcMoment = moment.utc(time, 'HH:mm:ss')
  const localTime = utcMoment.local().format('HH:mm:ss')
  return localTime
}

const formatDDMMYYYY = (time: string) => {
  return moment(time).format('DD/MM/YYYY')
}

const postMessageCustom = ({ message, data = {} }: TPostMessage) => {
  //@ts-ignore
  if (window?.vuatho) {
    //@ts-ignore
    window?.vuatho?.postMessage(
      JSON.stringify({
        message,
        data
      })
    )
  } else {
    ToastComponent({ message: message || 'has bug here', type: 'error' })
  }
}
function countNumbersAndQuestionMarks(arr: Ticket): { numbers: number; questionMarks: number } {
  let numbers = 0
  let questionMarks = 0

  arr.forEach((item) => {
    numbers += item.toString().match(/\d/g)?.length || 0
    questionMarks += item.toString().match(/\?/g)?.length || 0
  })

  return { numbers, questionMarks }
}

function calculateQuestionMarkPercentage(arr: string[]): number {
  const totalMarks = arr.reduce((acc, item) => acc + (item.match(/\?/g)?.length || 0), 0)
  const totalCharacters = arr.reduce((acc, item) => acc + item.length, 0)

  return 100 - (totalMarks / totalCharacters) * 100
}

export { useUnfocusItem, capitalizeWords, useDebounce, handleAddLangInUrl, formatLocalTime, formatDDMMYYYY, postMessageCustom, countNumbersAndQuestionMarks, calculateQuestionMarkPercentage }
