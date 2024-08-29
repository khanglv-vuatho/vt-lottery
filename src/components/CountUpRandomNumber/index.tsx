import { memo, useState, useEffect } from 'react'

interface CountUpRandomNumberProps {
  targetNumber: number
}

const CountUpRandomNumber: React.FC<CountUpRandomNumberProps> = ({ targetNumber }) => {
  const [displayNumber, setDisplayNumber] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayNumber(Math.floor(Math.random() * targetNumber))
    }, 50)

    return () => clearInterval(interval)
  }, [targetNumber])

  return <span>{displayNumber.toLocaleString()}</span>
}

export default memo(CountUpRandomNumber)
