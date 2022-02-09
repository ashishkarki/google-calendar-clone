import React from 'react'
import Day from './Day'

const Month = ({ monthCalendar }) => {
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {monthCalendar.map((week, weekIndex) => {
        return (
          <React.Fragment key={weekIndex}>
            {week.map((day, dayIndex) => (
              <Day day={day} key={dayIndex} rowIndex={weekIndex} />
            ))}
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default Month
