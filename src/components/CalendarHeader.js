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
    setGlobalMonthIndex(dayjs().month())
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
    console.log(`globalMonthIndex: ${globalMonthIndex}`)
  }, [globalMonthIndex])

  return (
    <header className="px-4 py-2 flex items-center">
      <img src={logo} alt="calendar" className="mr-2 w-12 h-12" />

      <h1 className="mr-10 text-xl text-gray-500 font-bold"> Calendar</h1>

      <button
        className="border rounded py-2 px-4 mr-5"
        onClick={handleTodayClick}
      >
        Today
      </button>

      {/* for navigating between months
      <button onClick={() => setMonthIndex(monthIndex - 1)}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_left
        </span>
      </button>

      <button onClick={() => setMonthIndex(monthIndex + 1)}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_right
        </span>
      </button> */}
      <MonthNavigator onChevronClick={handleChevronClick} />

      <h2 className="ml-4 text-xl text-gray-500 font-bold">
        {/* {dayjs(new Date(dayjs().year(), gloablMonthIndex)).format('MMMM YYYY')} */}
        <MonthYearDisplay monthIndex={globalMonthIndex} />
      </h2>
    </header>
  )
}

export default CalendarHeader
