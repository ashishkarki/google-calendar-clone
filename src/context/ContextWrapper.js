import React, { useState } from 'react'
import GlobalContext from './GlobalContext'
import dayjs from 'dayjs'

function ContextWrapper(props) {
  const [globalMonthIndex, setGlobalMonthIndex] = useState(dayjs().month())

  return (
    <GlobalContext.Provider
      value={{
        globalMonthIndex,
        setGlobalMonthIndex,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}

export default ContextWrapper
