import dayjs from 'dayjs'

const MonthYearDisplay = ({ monthIndex }) => {
  return (
    <span>
      {dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}
    </span>
  )
}

export default MonthYearDisplay
