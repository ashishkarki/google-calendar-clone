import React, { useContext, useState } from 'react'
import GlobalContext from '../context/GlobalContext'

const EventModal = () => {
  const { setEventModalOpen, selectedDayInSmallCal } = useContext(GlobalContext)

  const [title, setTitle] = useState('')

  const createIconsHelper = (materialIconName) => {
    return (
      <span className="material-icons-outlined text-gray-400">
        {materialIconName}
      </span>
    )
  }

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          {createIconsHelper('drag_handle')}

          <button onClick={() => setEventModalOpen(false)}>
            {createIconsHelper('close')}
          </button>
        </header>

        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div></div>
            <input
              type="text"
              name="title"
              placeholder="Add title"
              value={title}
              className="p-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              required
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>

          <div className="mt-5 mb-1 flex">
            {createIconsHelper('schedule')}

            <p className="ml-4">
              {selectedDayInSmallCal.format('dddd, MMMM DD')}
            </p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default EventModal
