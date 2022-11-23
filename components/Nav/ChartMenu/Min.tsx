import DateComponent from '@components/Dates/Date'
import Dropdown from '@components/Nav/ChartMenu/Dropdown'
import { Popover } from '@headlessui/react'
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'
import { ChartDropdownMenuItem } from 'economics'
import React from 'react'

interface CustomerDropdownMenu {
  title: string
  setSelected: React.Dispatch<React.SetStateAction<any>>
  items: ChartDropdownMenuItem[]
}

interface Props {
  customerDropdownMenus?: CustomerDropdownMenu[]
  className?: string
  setDate?: React.Dispatch<React.SetStateAction<string>>
  date?: string
}

const MinChartMenu: React.FC<Props> = ({ customerDropdownMenus, setDate, date }) => {
  return (
    <Popover as="nav" className="w-full flex justify-end">
      <Popover.Group as="ul" className={'w-full border-b border-gray-300 flex flex-1 justify-between items-center py-2 px-2 bg-white'}>
      { (date && setDate) && <DateComponent date={date} setDate={setDate}/> }
      {
        customerDropdownMenus && customerDropdownMenus.map(({ title, items, setSelected }) => (
          <Dropdown key={title} className='block' label={title}>
            {
              items.map(item => (
                <div
                  key={item.id}
                  className="w-full"
                >
                  <button
                    className='w-full py-1 px-3 cursor-pointer text-left text-sm bg-white text-slate-600  hover:text-slate-900 font-medium rounded-lg'
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
        <li className='flex justify-center items-center px-2 cursor-pointer text-gray-600 rounded-lg font-medium hover:text-gray-400 focus:outline-none'>
          <ArrowDownTrayIcon className='w-5 h-6 pr-1' />
          <span className='block'>Export</span>
        </li>
        <li className='px-2 cursor-pointer text-gray-600 rounded-lg font-medium hover:text-gray-400 focus:outline-none'>
          <a target="_blank" rel="noreferrer" href="https://mozeconomia.docs.apiary.io/">API</a>
        </li>
      </Popover.Group>
    </Popover>
  )
}

export default MinChartMenu
