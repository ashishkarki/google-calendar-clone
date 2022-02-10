import { EVENT_ACTIONS } from '../constants'

function savedEventsReducer(state, { type, payload }) {
  switch (type) {
    case EVENT_ACTIONS.ADD_EVENT:
      return [...state, payload]
    case EVENT_ACTIONS.UPDATE_EVENT:
      return state.map((event) => {
        if (event.id === payload.id) {
          return { ...event, ...payload }
        }

        return event
      })
    case EVENT_ACTIONS.DELETE_EVENT:
      return state.filter((event) => event.id !== payload.id)
    default:
      return state
  }
}

export default savedEventsReducer
