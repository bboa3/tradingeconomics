import ByDates from '@components/Dates/FromToDates'
import Dropdown from '@components/Nav/ChartMenu/Dropdown'
import { Popover } from '@headlessui/react'
import { ChartDropdownMenuItem, ChartType, Period } from 'economics'
import React from 'react'

interface CustomerDropdownMenu {
  title: string
  setSelected: React.Dispatch<React.SetStateAction<any>>
  items: ChartDropdownMenuItem[]
}

interface Props {
  chartPeriods: Period[]
  chartTypes: ChartType[]
  setChartType: React.Dispatch<React.SetStateAction<ChartType>>
  setChartPeriod: React.Dispatch<React.SetStateAction<Period>>
  widthClassName?: string
  customerDropdownMenus?: CustomerDropdownMenu[]
}

const ChartMenu: React.FC<Props> = ({ chartPeriods, chartTypes, setChartPeriod, setChartType, widthClassName, customerDropdownMenus }) => {
  return (
    <div className='w-full'>
      <Popover as="nav" className="w-full flex justify-center bg-sky-600 rounded-lg">
        <Popover.Group as="ul" className={`${widthClassName || 'w-full max-w-xs'} flex flex-1 justify-between items-center px-2`}>
          <ByDates setChartPeriod={setChartPeriod} />
          {
            chartPeriods.map(period => {
              return (
                <div key={period.label} className='w-full hidden lg:block mx-1 text-white cursor-pointer rounded-lg hover:text-slate-300 focus:outline-none'>
                  <div
                    className='text-sm font-medium px-2'
                    onClick={() => setChartPeriod(period)}
                  >
                    {period.label}
                  </div>
                </div>
              )
            })
          }
          <Dropdown className='lg:hidden' label='Período'>
            {
              chartPeriods.map((period) => (
                <div
                  key={period.label}
                  className="w-full"
                >
                  <button
                    className='w-full py-1 px-3 cursor-pointer text-left text-sm text-slate-600 bg-white hover:bg-slate-300 hover:text-slate-900 font-medium rounded-lg'
                    onClick={() => setChartPeriod(period)}
                  >{period.label}</button>
                </div>
              ))
            }
          </Dropdown>
          {
            customerDropdownMenus && customerDropdownMenus.map(({ title, items, setSelected }) => (
              <Dropdown key={title} className='hidden lg:block' label={title}>
                {
                  items.map(item => (
                    <div
                      key={item.id}
                      className="w-full"
                    >
                      <button
                        className='w-full py-1 px-3 cursor-pointer text-left text-sm text-slate-600 bg-white hover:bg-slate-300 hover:text-slate-900 font-medium rounded-lg'
                        onClick={() => setSelected(item)}
                      >
                        {item.name}
                      </button>
                    </div>
                  ))
                }
              </Dropdown>
            ))
          }
          <Dropdown label='Gráficos'>
            {
              chartTypes.map((chart) => (
                <div
                  key={chart.id}
                  className="w-full"
                >
                  <button
                    className='w-full py-1 px-3 cursor-pointer text-left text-sm text-slate-600 bg-white hover:bg-slate-300 hover:text-slate-900 font-medium rounded-lg'
                    onClick={() => setChartType(chart)}
                  >
                    {chart.label}
                  </button>
                </div>
              ))
            }
          </Dropdown>
          <li className='px-2 cursor-pointer text-white rounded-lg font-medium hover:text-slate-200 focus:outline-none'>
            <a target="_blank" rel="noreferrer" href="https://mozeconomia.docs.apiary.io/">API</a>
          </li>
        </Popover.Group>
      </Popover>

      {
        customerDropdownMenus && (
          <ul className='w-28 lg:hidden flex justify-between items-center px-2 bg-sky-600 rounded-b-lg'>
            {
              customerDropdownMenus.map(({ title, items, setSelected }) => (
                  <Dropdown key={title} label={title}>
                  {
                    items.map(item => (
                      <div
                        key={item.id}
                        className="w-full"
                      >
                        <button
                          className='w-full py-1 px-3 cursor-pointer text-left text-sm text-slate-600  hover:text-slate-900 font-medium rounded-lg'
                          onClick={() => setSelected(item)}>{item.name}
                        </button>
                      </div>
                    ))
                  }
                </Dropdown>
              ))
            }
        </ul>
        )
      }
    </div>
  )
}

export default ChartMenu
