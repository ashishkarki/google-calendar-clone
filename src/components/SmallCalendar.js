import dayjs from 'dayjs'
import React, { useContext, useEffect, useState } from 'react'
import { DATE_NAVIGATION_DIRECTION } from '../constants'
import GlobalContext from '../context/GlobalContext'
import { getMonth } from '../util'
import MonthNavigator from './MonthNavigator'
import MonthYearDisplay from './MonthYearDisplay'

const SmallCalendar = () => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month())
  const [currentMonth, setCurrentMonth] = useState(getMonth())
  const { globalMonthIndex } = useContext(GlobalContext)

  const handleChevronClick = (direction) => {
    if (direction === DATE_NAVIGATION_DIRECTION.PREVIOUS) {
      setMonthIndex(monthIndex - 1)
    } else if (direction === DATE_NAVIGATION_DIRECTION.NEXT) {
      setMonthIndex(monthIndex + 1)
    } else {
      setMonthIndex(dayjs().month())
    }
  }

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex))
  }, [monthIndex])

  useEffect(() => {}, [globalMonthIndex])

  return (
    <div className="mt-9">
      <header className="flex justify-between">
        <p className="text-gray-500 font-bold">
          {/* {dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')} */}
          <MonthYearDisplay monthIndex={monthIndex} />
        </p>

        <MonthNavigator onChevronClick={handleChevronClick} />
      </header>
    </div>
  )
}

export default SmallCalendar
