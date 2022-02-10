import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

function LabelDisplayer() {
  const { labels, updateLabelState } = useContext(GlobalContext)

  return (
    <React.Fragment>
      <p className="mt-10 font-bold text-gray-500">Labels</p>

      {labels.map(({ labelClass, checked }, index) => {
        const txtColor = `text-custom-${labelClass}`
        console.log(`txtColor: ${txtColor}`)

        return (
          <label key={index} className="items-center block mt-3">
            <input
              type="checkbox"
              checked={checked}
              className={`form-checkbox h-5 w-5 ${txtColor} rounded focus:ring-0 cursor-pointer`}
              onChange={() =>
                updateLabelState({ labelClass, checked: !checked })
              }
            />
            <span className="ml-2 text-gray-700 capitalize">{labelClass}</span>
          </label>
        )
      })}
    </React.Fragment>
  )
}

export default LabelDisplayer
