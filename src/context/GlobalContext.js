import React from 'react'

const GlobalContext = React.createContext({
  // 0-11 - 0 is January, current month's index
  globalMonthIndex: 0,
  setGlobalMonthIndex: (idx) => {},

  smallCalendarMonth: 0,
  setSmallCalendarMonth: (idx) => {},

  selectedDayInSmallCal: 0,
  setSelectedDayInSmallCal: (idx) => {},
})

export default GlobalContext
