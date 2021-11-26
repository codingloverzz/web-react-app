import * as actionTypes from "./constants"
import { getUserSubCount, getUserPlayList } from "../../../services/mine"

const changeUserSubCountAction = (res) => ({
  type: actionTypes.CHANGE_USER_SUB_COUNT,
  userSubCount: res
})
export const getUserSubCountAction = () => {
  return dispatch => {
    getUserSubCount().then(res => {
      dispatch(changeUserSubCountAction(res))
    })
  }
}

const changeUserPlayList = (res) => ({
  type: actionTypes.CHANGE_USER_PLAY_LIST,
  userPlayList: res
})
export const getUserPlayListAction = (uid) => {
  return dispatch => {
    getUserPlayList(uid).then(res => {
      dispatch(changeUserPlayList(res.playlist))
    })
  }
}