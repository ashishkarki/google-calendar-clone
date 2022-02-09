import { DATE_NAVIGATION_DIRECTION } from '../constants'

// for navigating between months
const MonthNavigator = ({ onChevronClick }) => {
  return (
    <>
      <button
        onClick={() => onChevronClick(DATE_NAVIGATION_DIRECTION.PREVIOUS)}
      >
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_left
        </span>
      </button>

      <button onClick={() => onChevronClick(DATE_NAVIGATION_DIRECTION.NEXT)}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_right
        </span>
      </button>
    </>
  )
}

export default MonthNavigator
