import dayjs from 'dayjs'
import React, { useContext } from 'react'
import { DATE_FORMAT_DEFAULT } from '../constants'

import GlobalContext from '../context/GlobalContext'

/**
 * @description represents a single day in the calendar
 */
function Day({ day, rowIndex }) {
  const { setSelectedDayInSmallCal, setEventModalOpen } = useContext(
    GlobalContext,
  )

  const getCurrentDayClass = () => {
    const currentlyPrintingDay = day.format(DATE_FORMAT_DEFAULT)
    const today = dayjs().format(DATE_FORMAT_DEFAULT)

    // if the day is today, return a blue background
    return currentlyPrintingDay === today
      ? 'bg-blue-600 text-white rounded-full w-7'
      : ''
  }

  return (
    <div className="flex flex-col border border-gray-200">
      <header className="flex flex-col items-center">
        {rowIndex === 0 && (
          <p className="mt-1 text-sm">{day.format('ddd').toUpperCase()}</p>
        )}

        <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
          {day.format('DD')}
        </p>
      </header>

      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          setSelectedDayInSmallCal(day)
          setEventModalOpen(true)
        }}
      >
        {''}
      </div>
    </div>
  )
}

export default Day
