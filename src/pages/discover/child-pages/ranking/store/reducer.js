import { Map } from "immutable";
import * as actionTypes from "./constants"
const defaultState = Map({
  topListInfo: {},
  topListDetail: {},
  commnetInfo: {}
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_LIST_INFO:
      return state.set('topListInfo', action.topListInfo)
    case actionTypes.CHANGE_TOP_LIST_DETAIL:
      return state.set("topListDetail", action.topListDetail)
    case actionTypes.CHANGE_COMMENT_INFO:
      return state.set("commentInfo", action.commentInfo)
    default:
      return state
  }
}
export default reducer