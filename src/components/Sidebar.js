import CreateEventButton from './CreateEventButton'
import SmallCalendar from './SmallCalendar'

const Sidebar = () => {
  return (
    <aside className="w-64 p-5 border">
      <CreateEventButton />

      <SmallCalendar />
    </aside>
  )
}

export default Sidebar
