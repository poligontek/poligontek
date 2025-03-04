/* eslint-disable @typescript-eslint/no-explicit-any */
import CountUp from 'react-countup';

export default function Counter({value}:any) {
  return (
    <CountUp end={value} />
  )
}
