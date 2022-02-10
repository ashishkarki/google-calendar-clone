import { DATE_NAVIGATION_DIRECTION } from '../constants'

// for navigating between months
const MonthNavigator = ({ onChevronClick }) => {
  return (
    <>
      <button
        onClick={() => onChevronClick(DATE_NAVIGATION_DIRECTION.PREVIOUS)}
      >
        <span className="mx-2 text-gray-600 cursor-pointer material-icons-outlined">
          chevron_left
        </span>
      </button>

      <button onClick={() => onChevronClick(DATE_NAVIGATION_DIRECTION.NEXT)}>
        <span className="mx-2 text-gray-600 cursor-pointer material-icons-outlined">
          chevron_right
        </span>
      </button>
    </>
  )
}

export default MonthNavigator
