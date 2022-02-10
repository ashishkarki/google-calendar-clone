import dayjs from 'dayjs'
import React, { useContext, useEffect, useState } from 'react'
import { DATE_FORMAT_DEFAULT, DATE_NAVIGATION_DIRECTION } from '../constants'
import GlobalContext from '../context/GlobalContext'
import { getMonth } from '../util'
import MonthNavigator from './MonthNavigator'
import MonthYearDisplay from './MonthYearDisplay'

const SmallCalendar = () => {
  const [currentMonthIndex, setCurrrentMonthIndex] = useState(dayjs().month())
  const [currentMonth, setCurrentMonth] = useState(getMonth())
  const {
    globalMonthIndex,
    setSmallCalendarMonth,
    selectedDayInSmallCal,
    setSelectedDayInSmallCal,
  } = useContext(GlobalContext)

  const handleChevronClick = (direction) => {
    if (direction === DATE_NAVIGATION_DIRECTION.PREVIOUS) {
      setCurrrentMonthIndex(currentMonthIndex - 1)
    } else if (direction === DATE_NAVIGATION_DIRECTION.NEXT) {
      setCurrrentMonthIndex(currentMonthIndex + 1)
    } else {
      setCurrrentMonthIndex(dayjs().month())
    }
  }

  const getCurrentDayClass = (day) => {
    const currentlyPrintingDay = day.format(DATE_FORMAT_DEFAULT)
    const today = dayjs().format(DATE_FORMAT_DEFAULT)
    const selectedDay =
      selectedDayInSmallCal && selectedDayInSmallCal.format(DATE_FORMAT_DEFAULT)

    // if the day is today, return a blue background
    if (currentlyPrintingDay === today) {
      return 'bg-blue-500 text-white rounded-full'
    } else if (currentlyPrintingDay === selectedDay) {
      return 'bg-blue-100 rounded-full text-blue-600 font-bold'
    } else {
      return ''
    }
  }

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIndex))
  }, [currentMonthIndex])

  useEffect(() => {
    setCurrrentMonthIndex(globalMonthIndex)
  }, [globalMonthIndex])

  return (
    <div className="mt-9">
      <header className="flex justify-between">
        <p className="font-bold text-gray-500">
          <MonthYearDisplay monthIndex={currentMonthIndex} />
        </p>

        {/* these empty outer divs keep the Navigators in place */}
        <div>
          <MonthNavigator onChevronClick={handleChevronClick} />
        </div>
      </header>

      <div className="grid grid-cols-7 grid-rows-6">
        {/* first display the top row of day initials */}
        {currentMonth[0].map((day, dayIndex) => (
          <span key={dayIndex} className="py-1 text-sm text-center">
            {day.format('dd').charAt(0)}
          </span>
        ))}

        {/* now display the actual days as buttons */}
        {currentMonth.map((week, weekIndex) => (
          <React.Fragment key={weekIndex}>
            {week.map((day, dayIndex) => (
              <button
                key={dayIndex}
                className={`py-1 w-full ${getCurrentDayClass(day)}`}
                onClick={() => {
                  setSmallCalendarMonth(currentMonthIndex)
                  setSelectedDayInSmallCal(day)
                }}
              >
                <span className="text-sm">{day.format('D')}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default SmallCalendar
