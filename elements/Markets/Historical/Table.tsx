import LoadingTable from '@components/Loading'
import MinChartMenu from '@components/Nav/ChartMenu/Min'
import Table6Cols from '@components/Tables/6Cols'
import useFetch from '@hooks/useFetch'
import dayjs from 'dayjs'
import { Historical } from 'economics'
import React, { memo, useCallback, useState } from 'react'

const tableHeader = { col1: 'Symbol', col2: 'Open', col3: 'High', col4: 'Low', col5: 'Close', col6: 'Date' }

const today = dayjs(new Date()).format('YYYY-MM-DD')

const Table: React.FC = () => {
  const [date, setDate] = useState(today)

  const { data, error } = useFetch<Historical[]>('/markets/historical/aapl:us,gac:com?c=guest:guest&f=json')
  if (error) console.log(error)

  const format = useCallback(() => {
    if (!data) return null

    return data.map((stock) => {
      return {
        col1: stock.Symbol,
        col2: stock.Open,
        col4: stock.High,
        col3: stock.Low,
        col5: stock.Close,
        col6: stock.Date
      }
    })
  }, [data])

  const tableData = format()

  return (
    <>
      {
        tableData
          ? (
          <Table6Cols
            tableNavigation={<MinChartMenu setDate={setDate} date={date} className='max-w-xs'/>}
            header={tableHeader}
            data={tableData}
          />
            )
          : (
          <LoadingTable />
            )
      }
    </>
  )
}

export default memo(Table)
