import { createStore } from 'redux'

export const ActionTypes = {
  TOKEN: 'token'
} as const

export type TInitState = {
  token: string
}
const DefaultValueState: TInitState = {
  token: ''
} as const

function counterReducer(state: TInitState = DefaultValueState, action: { type: string; payload: any }) {
  switch (action.type) {
    case ActionTypes.TOKEN:
      return { ...state, token: action.payload }
    default:
      return state
  }
}

let store = createStore(counterReducer)

export default store
