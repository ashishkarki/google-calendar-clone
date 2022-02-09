import dayjs from 'dayjs'

/**
 *
 * @param month - a number between 0 and 11
 * @returns a number between 0 to 6 representing the day of the week where 0 is Sunday
 */
export function getMonth(month = dayjs().month()) {
  const year = dayjs().year()

  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day()

  let currentMonthCount = 0 - firstDayOfTheMonth

  // (5) [Array(0), Array(0), Array(0), Array(0), Array(0)]
  const fiveRowsOfTheMonth = new Array(5).fill([])

  // create seven arrays to each of the 5 rows above and fill them with anything like 0
  const sevenColumnsOfEachRow = fiveRowsOfTheMonth.map(() =>
    new Array(7).fill(0),
  )

  // now, we need to fill the seven columns of each row with the days of the month
  const daysMatrix = []
  sevenColumnsOfEachRow.forEach((row) =>
    daysMatrix.push(
      row.map(() => {
        currentMonthCount++
        const date = dayjs(new Date(year, month, currentMonthCount))

        return date
      }),
    ),
  )

  return daysMatrix
}

// const matrix = getMonth()
// console.table(matrix)
