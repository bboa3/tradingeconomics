import { modeBarButtons } from '@components/Charts/theme/modeBarButtons'
import { Axis } from 'economics'
import React from 'react'
import Plot from 'react-plotly.js'

interface Props {
  data: Axis[]
  tickformat?: string
}

const IndicatorChart: React.FC<Props> = ({ data, tickformat }) => {
  const y = data.map(d => d.y)
  const x = data.map(d => d.x)

  const length = data.length
  const reference = data[length - 2].y
  const value = data[length - 1].y

  return (
    <Plot
      className='w-full h-96'
      data={[
        {
          type: 'indicator',
          mode: 'number+delta',
          value,
          delta: { reference, valueformat: '.0f' },
          domain: { y: [0, 1], x: [0.25, 0.75] }
        },
        {
          y,
          x,
          line: { color: '#0369a1', width: 2 }
        }
      ]}
      layout={{
        showlegend: false,
        plot_bgcolor: '#fff',
        margin: {
          l: 35,
          r: 20,
          t: 10
        },
        xaxis: {
          tickformat,
          griddash: 'dot',
          gridcolor: '#f1f5f9',
          showline: false,
          showticklabels: true,
          linecolor: '#0f172a',
          linewidth: 2,
          ticks: 'outside',
          tickfont: {
            family: 'Arial',
            size: 12,
            color: '#0f172a'
          }
        },
        yaxis: {
          griddash: 'solid',
          gridcolor: '#cbd5e1',
          showline: false,
          showticklabels: true,
          linecolor: '#0f172a',
          linewidth: 2,
          tickfont: {
            family: 'Arial',
            size: 13,
            color: '#0f172a'
          }
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

export default IndicatorChart
