import { Popover, Transition } from '@headlessui/react'
import { CalendarIcon } from '@heroicons/react/24/outline'
import React, { Fragment, useState } from 'react'

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}

interface Props {
  setDate: React.Dispatch<React.SetStateAction<string>>
  date: string
}

const DateComponent: React.FC<Props> = ({ setDate, date }) => {
  const [d, setD] = useState(date)

  return (
    <Popover as='li' className='relative'>
      {({ open }) => (
        <>
          <Popover.Button
            name='open-date-form'
            className={classNames(
              open ? 'text-gray-800' : 'text-gray-600',
              'group w-5 h-5 inline-flex hover:text-gray-800 focus:outline-none'
            )}
          >
            <CalendarIcon />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-1 w-screen max-w-[14rem] m:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
              <div className="flex justify-between p-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className='w-full pr-2'>
                  <input
                    type="date"
                    value={d}
                    onChange={(e) => setD(e.target.value)}
                    required
                    className="w-full shadow-sm text-sm text-slate-700 focus:text-slate-900 border-slate-200 rounded-lg focus:border-sky-500 focus:ring-sky-500"
                  />
                </div>
                <button
                  onClick={() => setDate(d)}
                  className='w-9 h-9 rounded-lg text-white font-bold text-base hover:bg-sky-600 bg-sky-800'
                >
                  Ok
                </button>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

export default DateComponent
