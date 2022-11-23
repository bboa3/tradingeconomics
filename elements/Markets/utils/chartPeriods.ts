import dayjs from 'dayjs'
import { Period } from 'economics'

const today = new Date()
export const chartPeriods: Period[] = [
  {
    label: '10 Anos',
    from: dayjs(today).subtract(10, 'years').year().toString(),
    to: today.getFullYear().toString()
  },
  {
    label: '15 Anos',
    from: dayjs(today).subtract(15, 'years').year().toString(),
    to: today.getFullYear().toString()
  },
  {
    label: '25 Anos',
    from: dayjs(today).subtract(25, 'years').year().toString(),
    to: today.getFullYear().toString()
  },
  {
    label: 'Máximo',
    from: '1992',
    to: today.getFullYear().toString()
  }
]
