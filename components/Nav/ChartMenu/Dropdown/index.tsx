import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import React, { Fragment, ReactNode } from 'react'

function classNames (...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

interface Props {
  children: ReactNode
  label: string
  className?: string
}

const Dropdown: React.FC<Props> = ({ children, label, className }) => {
  return (
    <Popover as='li' className={`relative ${className} w-full mx-1`}>
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? 'text-slate-200' : 'text-white',
              'group pl-1 inline-flex options-center text-sm font-medium hover:text-slate-300 focus:outline-none'
            )}
          >
            <span>{label}</span>
            <ChevronDownIcon
              className={classNames(
                open ? 'text-slate-200' : 'text-white',
                'ml-2 h-5 w-5 group-hover:text-slate-300'
              )}
              aria-hidden="true"
            />
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
            <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-1 w-screen max-w-xs m:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
              <div className="w-full rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="w-full max-h-80 overflow-auto relative grid gap-2 bg-white py-2 sm:gap-1">
                  { children }
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

export default Dropdown
