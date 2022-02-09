import React, { useEffect, useState } from 'react'
import GlobalContext from './GlobalContext'
import dayjs from 'dayjs'

function ContextWrapper(props) {
  const [globalMonthIndex, setGlobalMonthIndex] = useState(dayjs().month())
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(null)
  const [selectedDayInSmallCal, setSelectedDayInSmallCal] = useState(null)

  useEffect(() => {
    if (smallCalendarMonth !== null) {
      // basically, sync the main calendar to the small calendar on the sidebar
      setGlobalMonthIndex(smallCalendarMonth)
    }
  }, [smallCalendarMonth])

  return (
    <GlobalContext.Provider
      value={{
        globalMonthIndex,
        setGlobalMonthIndex,

        smallCalendarMonth,
        setSmallCalendarMonth,

        selectedDayInSmallCal,
        setSelectedDayInSmallCal,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}

export default ContextWrapper
