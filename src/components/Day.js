import dayjs from 'dayjs'
import React, { useContext, useEffect, useState } from 'react'
import { DATE_FORMAT_DEFAULT } from '../constants'

import GlobalContext from '../context/GlobalContext'

/**
 * @description represents a single day in the calendar
 */
function Day({ day, rowIndex }) {
  const {
    setSelectedDayInSmallCal,
    setEventModalOpen,
    savedEvents,
    setSelectedEvent,
  } = useContext(GlobalContext)

  const [dayEvents, setDayEvents] = useState([])

  useEffect(() => {
    const thisDaysEvts = savedEvents.filter((savedEvt) =>
      dayjs(savedEvt.day).isSame(day, 'day'),
    )
    // console.log(`Day ${day} has ${JSON.stringify(thisDaysEvts)} events`)

    setDayEvents(thisDaysEvts)
  }, [day, savedEvents])

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
        {
          // if there are events on this day, render them
          dayEvents.length > 0 && (
            <div className="flex flex-col">
              {dayEvents.map((dayEvt, index) => (
                <div
                  key={index}
                  className={`bg-custom-${dayEvt.labelClass} p-1 mr-3 text-gray-700 text-sm rounded mb-1 truncate`}
                  onClick={() => setSelectedEvent(dayEvt)}
                >
                  {dayEvt.title}
                </div>
              ))}
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Day
