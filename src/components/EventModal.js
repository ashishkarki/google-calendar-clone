import React, { useContext, useState } from 'react'
import { EVENTS_LABEL_CLASSES, EVENT_ACTIONS } from '../constants'
import GlobalContext from '../context/GlobalContext'

const EventModal = () => {
  const {
    setEventModalOpen,
    selectedDayInSmallCal,
    setSelectedEvent,
    dispatchCalendarEvts,
    selectedEvent,
  } = useContext(GlobalContext)

  const [title, setTitle] = useState(
    (selectedEvent && selectedEvent.title) ?? '',
  )
  const [description, setDescription] = useState(
    (selectedEvent && selectedEvent.description) ?? '',
  )
  const [selectedLabel, setSelectedLabel] = useState(
    (selectedEvent && selectedEvent.labelClass) ?? EVENTS_LABEL_CLASSES[0],
  )

  const createIconsHelper = (materialIconName, extraClasses = '') => {
    return (
      <span className={`text-gray-400 material-icons-outlined ${extraClasses}`}>
        {materialIconName}
      </span>
    )
  }

  const handleSaveEvent = (e) => {
    e.preventDefault()

    // basic validation
    if (!title || !description) {
      return alert('Please fill in the title and description')
    }

    const newCalEvt = {
      title,
      description,
      labelClass: selectedLabel,
      day: selectedDayInSmallCal.valueOf(),
      id: (selectedEvent && selectedEvent.id) ?? Date.now(),
    }

    // cause the event to be saved
    if (selectedEvent) {
      dispatchCalendarEvts({
        type: EVENT_ACTIONS.UPDATE_EVENT,
        payload: newCalEvt,
      })
    } else {
      dispatchCalendarEvts({
        type: EVENT_ACTIONS.ADD_EVENT,
        payload: newCalEvt,
      })
    }

    // reset the selectedEvent
    setSelectedEvent(null)

    // close the modal
    setEventModalOpen(false)
  }

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-screen">
      <form className="w-1/4 bg-white rounded-lg shadow-2xl">
        <header className="flex items-center justify-between px-4 py-2 bg-gray-100">
          {createIconsHelper('drag_handle')}

          <div>
            {
              // if there is an event selected, show the delete button
              selectedEvent && (
                <span
                  className="text-gray-400 cursor-pointer material-icons-outlined"
                  onClick={() => {
                    dispatchCalendarEvts({
                      type: EVENT_ACTIONS.DELETE_EVENT,
                      payload: selectedEvent,
                    })
                    setEventModalOpen(false)
                  }}
                >
                  delete
                </span>
              )
            }
            <button onClick={() => setEventModalOpen(false)}>
              {createIconsHelper('close')}
            </button>
          </div>
        </header>

        <div className="p-3">
          <div className="grid items-end grid-cols-1/5 gap-y-7">
            <div></div>
            <input
              type="text"
              name="title"
              autoFocus
              placeholder="Add title"
              value={title}
              className="w-full p-3 pb-2 text-xl font-semibold text-gray-600 border-0 border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              required
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>

          <div className="flex mt-5 mb-1">
            {createIconsHelper('schedule')}

            <p className="ml-4">
              {selectedDayInSmallCal.format('dddd, MMMM DD')}
            </p>
          </div>

          <div className="flex mt-5 mb-1">
            {createIconsHelper('segment')}
            <input
              type="text"
              name="description"
              placeholder="Add description"
              value={description}
              className="w-full p-3 pb-2 ml-4 -mt-4 text-gray-600 border-0 border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500 "
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>

          <div className="flex mt-5 mb-1">
            {createIconsHelper('bookmark_border')}
            <div className="flex ml-4 gap-x-2">
              {EVENTS_LABEL_CLASSES.map((labelClass, index) => {
                const bgColor = `bg-custom-${labelClass}`

                return (
                  <span
                    key={index}
                    onClick={() => setSelectedLabel(labelClass)}
                    className={`${bgColor} w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                  >
                    {selectedLabel === labelClass && (
                      <span className="text-sm text-white material-icons-outlined">
                        check
                      </span>
                    )}
                  </span>
                )
              })}
            </div>
          </div>
        </div>

        {/* footer */}
        <footer className="flex justify-end p-3 mt-5 border-t">
          <button
            onClick={handleSaveEvent}
            type="submit"
            className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  )
}

export default EventModal
