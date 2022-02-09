import dayjs from 'dayjs'
import React from 'react'

/**
 * @description represents a single day in the calendar
 */
function Day({ day, rowIndex }) {
  const getCurrentDayClass = () => {
    // if the day is today, return a blue background
    return day.format('YYYY-MM-DD') === dayjs().format('YYYY-MM-DD')
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
