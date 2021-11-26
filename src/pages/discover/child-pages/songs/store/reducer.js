import { Map } from "immutable"
import * as actionTypes from "./constants"
const defaultState = Map({
  songsInfo: {}
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_SONGS_INFO:
      return state.set("songsInfo", action.songsInfo)
    default:
      return state
  }
}

export default reducer