import { modeBarButtons } from '@components/Charts/theme/modeBarButtons'
import { Axis } from 'economics'
import React from 'react'
import Plot from 'react-plotly.js'

interface Props {
  data: Axis[]
  ticksuffixY?: string
  tickformat?: string
}

const AreaChart: React.FC<Props> = ({ data, ticksuffixY, tickformat }) => {
  const y = data.map(d => d.y)
  const x = data.map(d => d.x)

  return (
    <Plot
    className='w-full h-96'
      data={[
        {
          x,
          y,
          fill: 'tonexty',
          type: 'scatter',
          line: { color: '#0369a1', width: 2 },
          mode: 'lines'
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
          showline: true,
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
          ticksuffix: ticksuffixY,
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

export default AreaChart
