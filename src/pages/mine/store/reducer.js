import { Map } from "immutable";
import * as actionTypes from "./constants"
const defaultState = Map({

  userSubCount: {},
  userPlayList: []
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_USER_SUB_COUNT:
      return state.set("userSubCount", action.userSubCount)
    case actionTypes.CHANGE_USER_PLAY_LIST:
      return state.set("userPlayList", action.userPlayList)
    default:
      return state
  }
}

export default reducer