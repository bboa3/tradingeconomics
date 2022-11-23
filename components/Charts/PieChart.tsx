import { modeBarButtons } from '@components/Charts/theme/modeBarButtons'
import { Axis } from 'economics'
import React from 'react'
import Plot from 'react-plotly.js'

interface Props {
  data: Axis[]
}

const PieChart: React.FC<Props> = ({ data }) => {
  const y = data.map(d => d.y)
  const x = data.map(d => d.x)

  return (
    <Plot
      className='w-full h-96'
      data={[
        {
          values: y,
          labels: x,
          type: 'pie'
        }
      ]}
      layout={{
        plot_bgcolor: 'white',
        margin: {
          l: 35,
          r: 20,
          t: 10
        }
      }}
      config={{
        staticPlot: true,
        responsive: true,
        locale: 'pt-PT',
        modeBarButtonsToRemove: modeBarButtons,
        displaylogo: false,
        toImageButtonOptions: {
          filename: 'MozEconomia',
          format: 'png'
        }
      }}
    />
  )
}

export default PieChart
