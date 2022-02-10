import React, { useEffect, useReducer, useState } from 'react'
import GlobalContext from './GlobalContext'
import dayjs from 'dayjs'
import savedEventsReducer from './GlobalReducer'
import { EVENTS_LOCAL_STORAGE_KEY } from '../constants'

const initEvents = () => {
  const eventsInStorage = localStorage.getItem(EVENTS_LOCAL_STORAGE_KEY)

  const parsedEventsInStorage = eventsInStorage
    ? JSON.parse(eventsInStorage)
    : []

  return parsedEventsInStorage
}

function ContextWrapper(props) {
  const [globalMonthIndex, setGlobalMonthIndex] = useState(dayjs().month())
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(null)
  const [selectedDayInSmallCal, setSelectedDayInSmallCal] = useState(dayjs())
  const [eventModalOpen, setEventModalOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)

  const [savedEvents, dispatchCalendarEvts] = useReducer(
    savedEventsReducer,
    [],
    initEvents,
  )

  useEffect(() => {
    if (smallCalendarMonth !== null) {
      // basically, sync the main calendar to the small calendar on the sidebar
      setGlobalMonthIndex(smallCalendarMonth)
    }
  }, [smallCalendarMonth])

  useEffect(() => {
    localStorage.setItem(EVENTS_LOCAL_STORAGE_KEY, JSON.stringify(savedEvents))
  }, [savedEvents])

  return (
    <GlobalContext.Provider
      value={{
        globalMonthIndex,
        setGlobalMonthIndex,

        smallCalendarMonth,
        setSmallCalendarMonth,

        selectedDayInSmallCal,
        setSelectedDayInSmallCal,

        eventModalOpen,
        setEventModalOpen,

        savedEvents,
        dispatchCalendarEvts,

        selectedEvent,
        setSelectedEvent,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}

export default ContextWrapper
