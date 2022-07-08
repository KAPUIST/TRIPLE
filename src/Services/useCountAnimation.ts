import { useEffect, useState } from 'react'

const ease = (int: number): number => {
  return int === 1 ? 1 : 1 - Math.pow(2, -10 * int) // 제곱값
}
const CountAnimaition = (end: number, start: number, duration: number) => {
  const [cnt, setCnt] = useState(start)
  // 0 ;
  const frameRate = 1000 / 60
  // 초를 60번 ; 16

  const totalFrame = Math.round(duration / frameRate) // 2000 / 16.666666  125

  useEffect(() => {
    let currentNumber = start // 0
    const cnt = setInterval(() => {
      const time = ease(++currentNumber / totalFrame)
      setCnt(Math.round(end * time)) // 699 699
      if (time === 1) {
        clearInterval(cnt)
      }
    }, frameRate)
  }, [end, frameRate, start, totalFrame])

  return cnt
}
export default CountAnimaition
