import dayjs from 'dayjs'
import React from 'react'
import { DATE_FORMAT_DEFAULT } from '../constants'

/**
 * @description represents a single day in the calendar
 */
function Day({ day, rowIndex }) {
  const getCurrentDayClass = () => {
    const currentlyPrintingDay = day.format(DATE_FORMAT_DEFAULT)
    const today = dayjs().format(DATE_FORMAT_DEFAULT)

    // if the day is today, return a blue background
    return currentlyPrintingDay === today
      ? 'bg-blue-600 text-white rounded-full w-7'
      : ''
  }

  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {rowIndex === 0 && (
          <p className="text-sm mt-1">{day.format('ddd').toUpperCase()}</p>
        )}

        <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
          {day.format('DD')}
        </p>
      </header>
    </div>
  )
}

export default Day
