import React from 'react'

const GlobalContext = React.createContext({
  // 0-11 - 0 is January, current month's index
  globalMonthIndex: 0,
  setGlobalMonthIndex: (idx) => {},

  smallCalendarMonth: 0,
  setSmallCalendarMonth: (idx) => {},

  selectedDayInSmallCal: 0,
  setSelectedDayInSmallCal: (idx) => {},

  // event modal state
  eventModalOpen: false,
  setEventModalOpen: () => {},

  // reducer
  savedEvents: [],
  dispatchCalendarEvts: ({ type, payload }) => {},

  // selected event
  selectedEvent: null,
  setSelectedEvent: (evt) => {},

  // selected labels
  labels: [],
  setLabels: (labels) => {},
  updateLabelState: (labelToUpdate) => {},
  labelFilteredEvents: [],
})

export default GlobalContext
