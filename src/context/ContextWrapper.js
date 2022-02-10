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
  const [labels, setLabels] = useState([])

  const [savedEvents, dispatchCalendarEvts] = useReducer(
    savedEventsReducer,
    [],
    initEvents,
  )

  const updateLabelState = (labelToUpdate) => {
    setLabels(
      labels.map((curLabel) => {
        return curLabel.labelClass === labelToUpdate.labelClass
          ? labelToUpdate
          : curLabel
      }),
    )
  }

  const labelFilteredEvents = React.useMemo(() => {
    return savedEvents.filter((savedEvt) =>
      labels
        .filter((label) => label.checked)
        .map((label) => label.labelClass)
        .includes(savedEvt.labelClass),
    )
  }, [savedEvents, labels])

  useEffect(() => {
    if (smallCalendarMonth !== null) {
      // basically, sync the main calendar to the small calendar on the sidebar
      setGlobalMonthIndex(smallCalendarMonth)
    }
  }, [smallCalendarMonth])

  useEffect(() => {
    localStorage.setItem(EVENTS_LOCAL_STORAGE_KEY, JSON.stringify(savedEvents))
  }, [savedEvents])

  useEffect(
    () =>
      setLabels((previousLabels) => {
        const allLabelsOfSavedEvts = savedEvents.map((evt) => evt.labelClass)
        const uniqueLabelObjs = [...new Set(allLabelsOfSavedEvts)].map(
          (labelClass) => {
            // if the label is already in the labels array,
            // return its current state else mark this label as checked
            const currentLabel = previousLabels.find(
              (l) => l.label === labelClass,
            )

            return {
              labelClass,
              checked: currentLabel ? currentLabel.checked : true,
            }
          },
        )

        return [...uniqueLabelObjs]
      }),
    [savedEvents],
  )

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

        labels,
        setLabels,
        updateLabelState,
        labelFilteredEvents,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}

export default ContextWrapper
