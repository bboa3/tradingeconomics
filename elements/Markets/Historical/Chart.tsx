import AreaChart from '@components/Charts/AreaChart'
import BarChart from '@components/Charts/BarChart'
import LineChart from '@components/Charts/LineChart'
import { ChartType } from 'economics'
import React from 'react'

interface Axis {
  y: number
  x: Date
}

interface Props {
  chartData: Axis[]
  chartType: ChartType
}

const Chart: React.FC<Props> = ({ chartData, chartType }) => {
  const { id } = chartType

  if (id === 'bar') {
    return (
      <BarChart
        data={chartData}
        ticksuffixY='%'
      />
    )
  }

  if (id === 'area') {
    return (
      <AreaChart
        data={chartData}
        ticksuffixY='%'
      />
    )
  }

  return (
    <LineChart
      data={chartData}
      ticksuffixY='%'
    />
  )
}

export default Chart
