import CreateEventButton from './CreateEventButton'
import LabelDisplayer from './LabelDisplayer'
import SmallCalendar from './SmallCalendar'

const Sidebar = () => {
  return (
    <aside className="w-64 p-5 border">
      <CreateEventButton />

      <SmallCalendar />

      <LabelDisplayer />
    </aside>
  )
}

export default Sidebar
