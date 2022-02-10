import logo from '../assets/logo.png'
import { useContext, useEffect } from 'react'
import GlobalContext from '../context/GlobalContext'
import dayjs from 'dayjs'
import { DATE_NAVIGATION_DIRECTION } from '../constants'
import MonthNavigator from './MonthNavigator'
import MonthYearDisplay from './MonthYearDisplay'

const CalendarHeader = () => {
  const { globalMonthIndex, setGlobalMonthIndex } = useContext(GlobalContext)

  const handleTodayClick = () => {
    // if this is the current month, set the global month to random value to force re-render
    setGlobalMonthIndex(
      globalMonthIndex === dayjs().month()
        ? globalMonthIndex + Math.random()
        : dayjs().month(),
    )
  }

  const handleChevronClick = (direction) => {
    if (direction === DATE_NAVIGATION_DIRECTION.PREVIOUS) {
      setGlobalMonthIndex(globalMonthIndex - 1)
    } else if (direction === DATE_NAVIGATION_DIRECTION.NEXT) {
      setGlobalMonthIndex(globalMonthIndex + 1)
    } else {
      setGlobalMonthIndex(dayjs().month())
    }
  }

  useEffect(() => {
    console.log(
      `CalendarHeader => globalMonthIndex updated to: ${globalMonthIndex}`,
    )
  }, [globalMonthIndex])

  return (
    <header className="flex items-center px-4 py-2">
      <img src={logo} alt="calendar" className="w-12 h-12 mr-2" />

      <h1 className="mr-10 text-xl font-bold text-gray-500"> Calendar</h1>

      <button
        className="px-4 py-2 mr-5 border rounded"
        onClick={handleTodayClick}
      >
        Today
      </button>

      {/* for navigating between months
      <button onClick={() => setMonthIndex(monthIndex - 1)}>
        <span className="mx-2 text-gray-600 cursor-pointer material-icons-outlined">
          chevron_left
        </span>
      </button>

      <button onClick={() => setMonthIndex(monthIndex + 1)}>
        <span className="mx-2 text-gray-600 cursor-pointer material-icons-outlined">
          chevron_right
        </span>
      </button> */}
      <MonthNavigator onChevronClick={handleChevronClick} />

      <h2 className="ml-4 text-xl font-bold text-gray-500">
        {/* {dayjs(new Date(dayjs().year(), gloablMonthIndex)).format('MMMM YYYY')} */}
        <MonthYearDisplay monthIndex={globalMonthIndex} />
      </h2>
    </header>
  )
}

export default CalendarHeader
