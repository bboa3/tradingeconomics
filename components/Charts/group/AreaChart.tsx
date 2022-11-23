import { modeBarButtons } from '@components/Charts/theme/modeBarButtons'
import { AxisGroup } from 'economics'
import { Data } from 'plotly.js'
import React from 'react'
import Plot from 'react-plotly.js'

interface Props {
  data: AxisGroup[]
  ticksuffixY?: string
  tickformat?: string
}

const GroupedAreaChart: React.FC<Props> = ({ data, ticksuffixY, tickformat }) => {
  const plots: Data[] = data.map(({ name, color, axis }) => ({
    x: axis.map(d => d.x),
    y: axis.map(d => d.y),
    name,
    fill: 'tonexty',
    type: 'scatter',
    line: { color, width: 2 },
    mode: 'lines'
  }))

  return (
    <Plot
      className='w-full h-96'
      data={plots}
      layout={{
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

export default GroupedAreaChart
