import Layout from '@components/Layout'
import Table from '@elements/Markets/Historical/Table'
import React from 'react'

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <Layout
      title='Mozambique GDP - 2022 Data - 2023 Forecast - 1991-2021 Historical - Chart - News'
      description='The Gross Domestic Product (GDP) in Mozambique was worth 16.10 billion US dollars in 2021, according to official data from the World Bank. The GDP value of Mozambique represents 0.01 percent of the world economy. GDP in Mozambique averaged 7.91 USD Billion from 1980 until 2021, reaching an all time high of 17.72 USD Billion in 2014 and a record low of 2.09 USD Billion in 1988. This page provides the latest reported value for - Mozambique GDP - plus previous releases, historical high and low, short-term forecast and long-term prediction, economic calendar, survey consensus and news.'
      keywords='Mozambique,GDP,data,chart,actual,historical,values,calendar,forecast,graph,2021,2022,2023'
    >
      <h1 className='text-center text-4xl font-bold mt-4'>Market Historical</h1>
      <div className='max-w-4xl w-full'>
        <Table />
      </div>
    </Layout>
  )
}

export default Home
