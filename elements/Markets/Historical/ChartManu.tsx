import ChartMenu from '@components/Nav/ChartMenu'
import { chartPeriods } from '@elements/Markets/utils/chartPeriods'
import { chartTypes } from '@elements/Markets/utils/chartTypes'
import { ChartType, Period } from 'economics'
import React from 'react'

interface Props {
  setChartType: React.Dispatch<React.SetStateAction<ChartType>>
  setChartPeriod: React.Dispatch<React.SetStateAction<Period>>
}

const GDPChartMenu: React.FC<Props> = ({ setChartPeriod, setChartType }) => {
  return (
    <ChartMenu
      widthClassName='max-w-2xl w-full'
      chartPeriods={chartPeriods}
      chartTypes={chartTypes}
      setChartPeriod={setChartPeriod}
      setChartType={setChartType}
    />
  )
}

export default GDPChartMenu
