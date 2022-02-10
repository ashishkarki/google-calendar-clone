import { useContext } from 'react'
import plusImg from '../assets/plus.svg'
import GlobalContext from '../context/GlobalContext'

const CreateEventButton = () => {
  const { setEventModalOpen } = useContext(GlobalContext)

  return (
    <button
      className="flex items-center p-2 border rounded-full shadow-md hover:shadow-2xl"
      onClick={() => setEventModalOpen(true)}
    >
      <img src={plusImg} alt="create event" className="w-7 h-7" />
      <span className="pl-3 pr-7">Create</span>
    </button>
  )
}

export default CreateEventButton
