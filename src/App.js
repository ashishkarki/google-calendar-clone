import { useState, useContext, useEffect } from 'react'
import './App.css'
import CalendarHeader from './components/CalendarHeader'
import Month from './components/Month'
import Sidebar from './components/Sidebar'
import GlobalContext from './context/GlobalContext'
import { getMonth } from './util'

function App() {
  const [monthCalendar, setMonthCalendar] = useState(getMonth())
  const { monthIndex } = useContext(GlobalContext)

  useEffect(() => {
    setMonthCalendar(getMonth(monthIndex))
  }, [monthIndex])

  return (
    <>
      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month monthCalendar={monthCalendar} />
        </div>
      </div>
    </>
  )
}

export default App
